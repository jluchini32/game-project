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
        if((row[0] == row[1] && row[1] == row[2] && row[2] == row[3] && row[0] !== null) ||
        (row[1] == row[2] && row[2] == row[3] && row[3] == row[4] && row[1] !== null)  ||
        (row[2] == row[3] && row[3] == row[4] && row[4] == row[5] && row[2] !== null)  ||
        (row[3] == row[4] && row[4] == row[5] && row[5] == row[6] && row[3] !== null)){

            alert("HORIZONTAL VICTORY");
            game.active = false;
            game.winner = game.activePlayer
            // turns off the listeners on the squares
            $('.square').off();
        }
    })
}

const checkVerticalVictory = () => {
    game.board.forEach((square)=>{

    //checks for vert victory in 0 coloumn
        if((game.board[5][0] == game.board[4][0] && game.board[4][0] == game.board[3][0] && game.board[3][0] == game.board[2][0] && game.board[5][0] !== null) ||
        (game.board[4][0] == game.board[3][0] && game.board[3][0] == game.board[2][0] && game.board[2][0] == game.board[1][0] && game.board[4][0] !== null) ||
        (game.board[3][0] == game.board[2][0] && game.board[2][0] == game.board[1][0] && game.board[1][0] == game.board[0][0] && game.board[3][0] !== null) ||

        //checks for vert victory in 1 coloumn
        (game.board[5][1] == game.board[4][1] && game.board[4][1] == game.board[3][1] && game.board[3][1] == game.board[2][1] && game.board[5][1] !== null) ||
        (game.board[4][1] == game.board[3][1] && game.board[3][1] == game.board[2][1] && game.board[2][1] == game.board[1][1] && game.board[4][1] !== null) ||
        (game.board[3][1] == game.board[2][1] && game.board[2][1] == game.board[1][1] && game.board[1][1] == game.board[0][1] && game.board[3][1] !== null) ||

        //checks for vert victory in 2 coloumn
        (game.board[5][2] == game.board[4][2] && game.board[4][2] == game.board[3][2] && game.board[3][2] == game.board[2][2] && game.board[5][2] !== null) ||
        (game.board[4][2] == game.board[3][2] && game.board[3][2] == game.board[2][2] && game.board[2][2] == game.board[1][2] && game.board[4][2] !== null) ||
        (game.board[3][2] == game.board[2][2] && game.board[2][2] == game.board[1][2] && game.board[1][2] == game.board[0][2] && game.board[3][2] !== null) ||

        //checks for vert victory in 3 coloumn
        (game.board[5][3] == game.board[4][3] && game.board[4][3] == game.board[3][3] && game.board[3][3] == game.board[2][3] && game.board[5][3] !== null) ||
        (game.board[4][3] == game.board[3][3] && game.board[3][3] == game.board[2][3] && game.board[2][3] == game.board[1][3] && game.board[4][3] !== null) ||
        (game.board[3][3] == game.board[2][3] && game.board[2][3] == game.board[1][3] && game.board[1][3] == game.board[0][3] && game.board[3][3] !== null) ||

        //checks for vert victory in 4 coloumn
        (game.board[5][4] == game.board[4][4] && game.board[4][4] == game.board[3][4] && game.board[3][4] == game.board[2][4] && game.board[5][4] !== null) ||
        (game.board[4][4] == game.board[3][4] && game.board[3][4] == game.board[2][4] && game.board[2][4] == game.board[1][4] && game.board[4][4] !== null) ||
        (game.board[3][4] == game.board[2][4] && game.board[2][4] == game.board[1][4] && game.board[1][4] == game.board[0][4] && game.board[3][4] !== null) ||

        //checks for vert victory in 5 coloumn
        (game.board[5][5] == game.board[4][5] && game.board[4][5] == game.board[3][5] && game.board[3][5] == game.board[2][5] && game.board[5][5] !== null) ||
        (game.board[4][5] == game.board[3][5] && game.board[3][5] == game.board[2][5] && game.board[2][5] == game.board[1][5] && game.board[4][5] !== null) ||
        (game.board[3][5] == game.board[2][5] && game.board[2][5] == game.board[1][5] && game.board[1][5] == game.board[0][5] && game.board[3][5] !== null)) {

        //checks for vert victory in 6 coloumn
        // (game.board[5][6] == game.board[4][6] && game.board[4][6] == game.board[3][6] && game.board[3][6] == game.board[2][6] && game.board[5][6] !== null) ||
        // (game.board[4][6] == game.board[3][6] && game.board[3][6] == game.board[2][6] && game.board[2][6] == game.board[1][6] && game.board[4][6] !== null) ||
        // (game.board[3][6] == game.board[2][6] && game.board[2][6] == game.board[1][6] && game.board[1][6] == game.board[0][6] && game.board[3][6] !== null)) {
    

            alert("VERTICAL VICTORY");
            game.active = false;
            game.winner = game.activePlayer
            $('.square').off();       // turns off the listeners on the squares

        }
    
    })
}


const checkForWin = () => {
    checkHorizontalVictory();
    checkVerticalVictory();
   }

$('.square').click((e)=>{
    // find out which square and which row
    const squareNumber = $(e.target).attr('square');
    const rowNumber = parseInt($(e.target).parent().attr('row'));
    // console.log(squareNumber);
    // console.log(rowNumber+1);
    // console.log(rowNumber !== game.board.length-1);
    // console.log(game.board[rowNumber+1][squareNumber])
    
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
