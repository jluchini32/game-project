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
    activePlayer: "RED",
    active: true,
    winner: null
}

const changeActivePlayer = () => {
    // change the active player
    if(game.activePlayer === "RED"){
        game.activePlayer = "BLACK"
    }else{
        game.activePlayer = "RED"
    }
}

const checkHorizontalVictory = () => {
    console.log(game.board);
    game.board.forEach((row)=>{
     // if(row[0] == row[1] && row[1] == row[2] && row[2] == row[3] && row[0] !== null){
    //original if check ^
        if((row[0] == row[1] && row[1] == row[2] && row[2] == row[3] && row[0] !== null) ||
        (row[1] == row[2] && row[2] == row[3] && row[3] == row[4] && row[1] !== null)  ||
        (row[2] == row[3] && row[3] == row[4] && row[4] == row[5] && row[2] !== null)  ||
        (row[3] == row[4] && row[4] == row[5] && row[5] == row[6] && row[3] !== null)){

            console.log("HORIZONTAL VICTORY")
            game.active = false;
            game.winner = game.activePlayer
            // turns off the listeners on the squares
            $('.square').off();
        }
    })
}

const checkForWin = () => {
    checkHorizontalVictory();
    // checkVerticalVictory();
    // loop over the game board
   
    // look for diagonal, horizontal, and vertical wins
}

$('.square').click((e)=>{
    // find out which square and which row
    const squareNumber = $(e.target).attr('square');
    const rowNumber = parseInt($(e.target).parent().attr('row'));
    // change the game.board state
    console.log(squareNumber);
    console.log(rowNumber+1);
    console.log(rowNumber !== game.board.length-1);
    console.log(game.board[rowNumber+1][squareNumber])
    // if($(e.target).hasClass('null') &&
    // (!$(`[square == ${squareNumber}][row == ${rowNumber -1}]`).hasClass('null')) ||
    // rowNumber == 5)
    
  prevNullCell = [];
    for(let x = rowNumber; x > 0; x -1){
        if(game.board[rowNumber][squareNumber] === null
            && (game.board[rowNumber-1][squareNumber] !==null || 
                rowNumber === gameboard.length -1 )){
        }else if(prevNullCell.length > 0) {
     }
            break;
                console.log('abcd');
    }
    {

    
    
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
        // $('game.activePlayer').css('backgroundColor = red');
    }
    // forEach takes two params which represent the thing in the array and the index its at
    game.board.forEach((row, rowNumber)=>{
        // row will be one of the three arrays, rowNumber is which array it is
        row.forEach((square, squareNumber)=>{
            //if the square has a value
            if(square !== null){
                // fill in that div with text on the page
                // $(`.square[square=${squareNumber}][row=${rowNumber}]`).empty().append(`<h3 class="square-text">${square}</h3>`);

            if(game.board[rowNumber][squareNumber] === "RED"){
            $(`.square[square=${squareNumber}][row=${rowNumber}]`).empty().css({"backgroundColor": "red"});
            
            }else if(game.board[rowNumber][squareNumber] === "BLACK"){
                $(`.square[square=${squareNumber}][row=${rowNumber}]`).empty().css({"backgroundColor": "black"});
                }
            }
        })
    })
    if(game.winner){
        $('body').append(`<h2>WINNER IS ${game.winner}</h2>`)
    }
}


//