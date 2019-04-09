
$('.square').click((e)=>{
    // find out which square and which row
    const clickedSquare = $(e.target).attr('square');
    const clickedRow = $(e.target).parent().attr('row');
    // change the game.board state
    if($(e.target).hasClass('null') &&
    !$(`[square = ${clickedSquare -1}][row = ${clickedRow}]`).hasClass('null')
        game.board[clickedRow][clickedSquare] = game.activePlayer
        // check for victory
        checkForWin();
        // change active player
        changeActivePlayer()
        // re-update the page
        render();
    }
})