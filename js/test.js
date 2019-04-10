if($(e.target).hasClass('null') &&
(!$(`[square == ${squareNumber}][row == ${rowNumber -1}]`).hasClass('null')) ||
rowNumber == 5) {


if(game.board[rowNumber][squareNumber] === null
    && (game.board[rowNumber-1][squareNumber] !==null || 
        rowNumber === gameboard.length -1 ))}