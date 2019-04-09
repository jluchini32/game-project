// 0 will be Os and 1 will be Xs

const game = {
    board: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ],
    activePlayer: "red",
    active: true,
    winner: null
}

const changeActivePlayer = () => {
    // change the active player
    if(game.activePlayer === "red"){
        game.activePlayer = "black"
    }else{
        game.activePlayer = "red"
    }
}
const checkHorizontalVictory = () => {
    game.board.forEach((row)=>{
        if(row[0] == row[1] && row[1] == row[2] && row[0] !== null){
            console.log("HORIZONTAL VICTORY")
            game.active = false;
            game.winner = row[0];
            // turns off the listeners on the squares
            $('.square').off();
        }
    })
}
const checkForWin = () => {
    checkHorizontalVictory();
    // loop over the game board
    // look for diagonal, horizontal, and vertical wins
}

// $('.square').click((e)=>{
//     // find out which square and which row
//     const squareNumber = $(e.target).attr('square');
//     const rowNumber = $(e.target).parent().attr('row');
//     // change the game.board state
//     if(game.board[rowNumber][squareNumber] == null){
//         game.board[rowNumber][squareNumber] = game.activePlayer
//         // check for victory
//         checkForWin();
//         // change active player
//         changeActivePlayer()
//         // re-update the page
//         render();
//     }
// })
$('.square').click((e)=>{
    // find out which square and which row
    const squareNumber = $(e.target).attr('square');
    const rowNumber = $(e.target).parent().attr('row');
    // change the game.board state
    if($(e.target).hasClass('null') &&
    !$(`[square = ${clickedSquare}][row = ${clickedRow -1}]`).hasClass('null')){
        game.board[rowNumber][squareNumber] = game.activePlayer
        // check for victory
        checkForWin();
        // change active player
        changeActivePlayer();
        render();
    }
})
const render = () => {
    // if the game is still going, show whose turn it is
    if(game.active){
        $('.current-player').text(game.activePlayer);
    }
    // forEach takes two params which represent the thing in the array and the index its at
    game.board.forEach((row, rowNumber)=>{
        // row will be one of the three arrays, rowNumber is which array it is
        row.forEach((square, squareNumber)=>{
            //if the square has a value
            if(square !== null){
                // fill in that div with text on the page
                $(`.square[square=${squareNumber}][row=${rowNumber}]`).empty().append(`<h3 class="square-text">${square}</h3>`)
            }
        })
    })
    if(game.winner){
        $('body').append(`<h2>A WINNAR IS ${game.winner}</h2>`)
    }
}