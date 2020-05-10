let api = new Minesweeper.BoardsApi()
api.boards(function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});