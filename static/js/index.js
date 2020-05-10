$(function () {
    let $board = $("#board");
    let $selectBoard = $("#select-board");
    let $newBoard = $("#new_board")
    // The board currently selected
    let theBoard = null;

    let api = new Minesweeper.BoardsApi()
    // We obtain the list of boards
    api.boards(function (error, data, response) {
        if (error) {
            alert(error);
        } else {
            console.log(data);
            $selectBoard.empty();
            // For each board, we add an option
            $.each(data, function (key, value) {
                $selectBoard.append('<option value=' + value.id + '>' + value.id + '</option>');
            });
            //Select first board, if any
            if (data.length > 0) {
                $selectBoard.val(data[0].id);
                $selectBoard.change(); // Trigger board selection
            }
        }
    });

    // When the user selects a different board
    $selectBoard.change(() => {
        // Although we already obtained the boards from the api
        // For demonstration purpose, we call the API again to get the selected board
        api.boardsGet($selectBoard.val(), function (error, data, response) {
            if (error) {
                alert(error);
            } else {
                setBoard(data);
            }
        });
    });

    // Start new board - click
    $newBoard.click(function () {
        api.boardsCreate({'num_rows': 9, 'num_columns': 7, 'num_mines': 10}, function (error, data, response) {
            if (error) {
                alert("error");
            } else {
                $selectBoard.append('<option value=' + data.id + '>' + data.id + '</option>');
                $selectBoard.val(data.id);
                setBoard(data);
            }
        });
    });
    // When the user clicks a cell
    $board.on("mousedown", "td", function (event) {
        switch (event.which) {
        case 1:
            api.boardsRevealCell(theBoard.id, {
                'row': $(this).attr("data-row"), "column": $(this).attr("data-column")
            },
            function (error, data, response) {
                if (error) {
                    alert(error);
                } else {
                    setBoard(data);
                }
            });
            break;
        case 3:
            let row = parseInt($(this).attr("data-row"));
            let column  = parseInt($(this).attr("data-column"));
            let cell = theBoard.cells[(row * theBoard.numColumns) + column]
            let $td = $(this);
            console.log(cell);

            if (cell.flagged) {
                api.boardsUnflagCell(theBoard.id, {
                        'row': $(this).attr("data-row"), "column": $(this).attr("data-column")
                    },
                    function (error, data, response) {
                        if (error) {
                            alert(error);
                        } else {
                            $td.removeClass("flagged");
                            cell.flagged=false;
                        }
                    });
            }else {
                api.boardsFlagCell(theBoard.id, {
                        'row': $(this).attr("data-row"), "column": $(this).attr("data-column")
                    },
                    function (error, data, response) {
                        if (error) {
                            alert(error);
                        } else {
                            $td.addClass("flagged");
                            cell.flagged=true;
                        }
                    });
            }
            break;
    }

    });

    $("#show-mines").change(function () {
        renderBoard(theBoard);
    })

    function setBoard(board) {
        theBoard = board;
        renderBoard(theBoard);
    }

    function renderBoard(board) {
        //console.log(JSON.stringify(board));
        $board.empty()
        for (let i = 0; i < board.numRows; i++) {
            let $tr = $("<tr></tr>").appendTo($board)
            for (let j = 0; j < board.numColumns; j++) {
                let $td = $("<td></td>").appendTo($tr);
                // The cells are obtained in order from the backend
                let cell = board.cells[(i * board.numColumns) + j]
                $td.attr("data-row", i).attr("data-column", j);

                if (cell.value > 0) {
                    $td.text(cell.value);
                } else {
                    // When the value is zero we do not show the number
                    $td.html("&nbsp;");
                }
                if(cell.mine && $("#show-mines").prop('checked')){
                    $td.addClass("mine");
                }else if(cell.revealed){
                    $td.addClass("revealed");
                }else if(cell.flagged){
                    $td.addClass("flagged");
                }

            }
        }
    }
});
