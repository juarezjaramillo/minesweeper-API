import random

from challenge.exceptions import MineExplodedError
from challenge.models import Board, Cell


class BoardService:
    def create_board(self, num_rows, num_columns, num_mines):
        board = Board(num_rows=num_rows, num_columns=num_columns, num_mines=num_mines)
        board.save()
        # Create the cells and add the mines
        cells = [Cell(board=board, row=i, column=j) for i in range(num_rows) for j in range(num_columns)]
        [self.__add_mine(cells) for i in range(num_mines)]
        Cell.objects.bulk_create(cells)
        return board

    def __add_mine(self, cells):
        index = random.randint(0, len(cells) - 1)
        cell = cells[index]
        # When the cell already has a mine, we call ourselves to attempt at another index
        if cell.mine:
            self.__add_mine(cells)
        else:
            cell.mine = True

    def flag_cell(self, board, row, column):
        self.__flag_cell(board, row, column, True)

    def unflag_cell(self, board, row, column):
        self.__flag_cell(board, row, column, False)

    def __flag_cell(self, board, row, column, flag):
        index = (row * board.num_columns) + column
        cell = board.cells.all()[index]
        cell.flagged = flag
        print(cell.flagged)
        cell.save()

    def reveal_cell(self, board, row, column):
        temp_cells = board.cells.all()
        # The cells are in a list, for easier processing we transform it into a bi-dimensional array
        cells = self.__to_bidim_array(list(temp_cells), board.num_rows, board.num_columns)
        try:
            self.__reveal_cell(board, cells, row, column)
        except MineExplodedError:
            # finish game, player lose
            pass

    def __reveal_cell(self, board, cells, row, column):
        cell = cells[row][column]
        print(row, column)
        print(cell)
        if cell.revealed:
            return
        # Is there a mine?
        cell.revealed = True
        if cell.mine:
            cell.save()
            raise MineExplodedError
        # Now we need to calculated the number of adjacent cells with a mine
        # The adjacent cells are in a "circle" around the cell
        # the "circle" is represented by the previous and next rows and the previous and next column
        # we must validate that the indexes do not go below zero or exceed the number of rows/columns
        mine_count = 0
        for i in range(max(row - 1, 0), min(row + 1, board.num_rows - 1) + 1):  # previous/next row
            for j in range(max(column - 1, 0), min(column + 1, board.num_columns - 1) + 1):  # previous/next columns
                if cells[i][j].mine:
                    mine_count += 1

        cell.value = mine_count
        cell.save()
        # if there are no adjacent mines, repeat for all adjacent cells
        if mine_count == 0:
            for i in range(max(row - 1, 0), min(row + 1, board.num_rows - 1) + 1):
                for j in range(max(column - 1, 0), min(column + 1, board.num_columns - 1) + 1):
                    self.__reveal_cell(board, cells, i, j)

    def __to_bidim_array(self, cell_list, num_rows, num_columns):
        cells = []
        for i in range(num_rows):
            tmp = []
            for j in range(num_columns):
                tmp.append(cell_list[i * num_columns + j])
            cells.append(tmp)
        return cells
