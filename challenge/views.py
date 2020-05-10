from django.http import HttpResponse
# Create your views here.
from django.template import loader
from drf_yasg.utils import swagger_auto_schema, no_body
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from challenge.exceptions import MineExplodedError
from challenge.models import Board
from challenge.serializers import BoardSerializer, CellRefSerializer, NewBoardSerializer
from challenge.services import BoardService


def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render({}, request))


class BoardApi(GenericViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer

    @swagger_auto_schema(operation_id='boards',
                         operation_summary='List all boards'
                         )
    def list(self, request, format=None):
        """
            Gets a list of all the available boards
        """
        boards = Board.objects.all();
        serializer = BoardSerializer(boards, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(operation_id='boards_get',
                         operation_summary='Get details of a board',
                         responses={
                             status.HTTP_200_OK: BoardSerializer,
                             status.HTTP_404_NOT_FOUND: 'Board not found'}
                         )
    def retrieve(self, request, pk, format=None):
        """
            Get the details of a single board
        """
        board = self.get_object()
        serializer = BoardSerializer(board)
        return Response(serializer.data)

    @swagger_auto_schema(operation_id='boards_create',
                         operation_summary='Create and start a new board',
                         request_body=NewBoardSerializer,
                         responses={
                             status.HTTP_200_OK: BoardSerializer,
                             status.HTTP_400_BAD_REQUEST: 'The number of rows, columns or mines is invalid'}
                         )
    def create(self, request, format=None):
        """
            Create and start a new board with the specified number or rows, columns and mines
        """
        serializer = NewBoardSerializer(data=request.data)
        if serializer.is_valid():
            service = BoardService()
            board = service.create_board(serializer.data['num_rows'], serializer.data['num_columns'],
                                         serializer.data['num_mines'])
            board_serializer = BoardSerializer(instance=board)
            return Response(board_serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(operation_id='boards_delete',
                         operation_summary='Delete a board',
                         responses={status.HTTP_204_NO_CONTENT: "Board deleted",
                                    status.HTTP_404_NOT_FOUND: 'Board not found'}
                         )
    def destroy(self, request, *args, **kwargs):
        """
            Delete a single board
        """
        board = self.get_object()
        board.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @swagger_auto_schema(request_body=CellRefSerializer,
                         operation_summary='Reveal a cell',
                         operation_id='boards_reveal_cell',
                         responses={status.HTTP_200_OK: BoardSerializer,
                                    status.HTTP_404_NOT_FOUND: 'Board not found',
                                    status.HTTP_400_BAD_REQUEST: 'The row or column of the cell to reveal is invalid'}
                         )
    @action(['post'], detail=True)
    def reveal(self, request, *args, **kwargs):
        """
            Reveals a particular cell
        """
        board = self.get_object()
        serializer = CellRefSerializer(data=request.data)
        if serializer.is_valid():
            service = BoardService()
            try:
                service.reveal_cell(board, serializer.data['row'], serializer.data['column'])
            except MineExplodedError:
                pass  # We should change the status of the board (player lose)
            board_serializer = BoardSerializer(instance=board)
            return Response(board_serializer.data, status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(method='post', operation_summary='Flag a cell',
                         operation_id='boards_flag_cell',
                         request_body=CellRefSerializer,
                         operation_description='Flag a particular cell',
                         responses={status.HTTP_200_OK: 'The cell was successfully flagged',
                                    status.HTTP_404_NOT_FOUND: 'Board does not exist',
                                    status.HTTP_400_BAD_REQUEST: 'The row or column of the cell to flag is invalid'
                                    })
    @swagger_auto_schema(method='delete', operation_summary='Unflag a cell',
                         operation_id='boards_unflag_cell',
                         request_body=CellRefSerializer,
                         operation_description='Removes the flag a particular cell',
                         responses={status.HTTP_200_OK: 'The cell was successfully unflagged',
                                    status.HTTP_404_NOT_FOUND: 'Board does not exist',
                                    status.HTTP_400_BAD_REQUEST: 'The row or column of the cell to flag is invalid'
                                    })
    @action(['post', 'delete'], detail=True, url_path='flag')
    def flag(self, request, *args, **kwargs):
        pass

    @swagger_auto_schema(method='post', operation_summary='Pause a board',
                         operation_id='boards_pause',
                         request_body=no_body,
                         responses={status.HTTP_200_OK: BoardSerializer,
                                    status.HTTP_404_NOT_FOUND: 'Board does not exist'})
    @action(['post'], detail=True)
    def pause(self, request, *args, **kwargs):
        """
        Pauses a board. While the board is paused, the elapsed time of the board does not increase
        """
        pass

    @swagger_auto_schema(method='post', operation_summary='Resume a board',
                         operation_id='boards_resume',
                         request_body=no_body,
                         responses={status.HTTP_200_OK: BoardSerializer,
                                    status.HTTP_404_NOT_FOUND: 'Board does not exist'})
    @action(['post'], detail=True)
    def resume(self, request, *args, **kwargs):
        """
        Resumes a board
        """
        pass
