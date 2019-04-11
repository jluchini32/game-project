// const checkHorizontalVictory = () => {
//     console.log(game.board);
//     game.board.forEach((row)=>{
//      // if(row[0] == row[1] && row[1] == row[2] && row[2] == row[3] && row[0] !== null){
//     //original if check ^
//      if((row[0] == row[1] && row[1] == row[2] && row[2] == row[3] && row[0] !== null) ||
//         (row[1] == row[2] && row[2] == row[3] && row[3] == row[4] && row[1] !== null)  ||
//         (row[2] == row[3] && row[3] == row[4] && row[4] == row[5] && row[2] !== null)  ||
//         (row[3] == row[4] && row[4] == row[5] && row[5] == row[6] && row[3] !== null)){

//             console.log("HORIZONTAL VICTORY")
//             game.active = false;
//             game.winner = game.activePlayer
//             // turns off the listeners on the squares
//             $('.square').off();
//         }
//     })
// }

if((row[5[0]] == row[4[0]] && row[4[0]] == row[3[0]] && row[3[0]] == row[2[0]] && row[5] !== null) ||
(row[4[0]] == row[3[0]] && row[3[0]] == row[2[0]] && row[2[0]] == row[1[0]] && row[4] !== null) ||
(row[3[0]] == row[2[0]] && row[2[0]] == row[1[0]] && row[1[0]] == row[0[0]] && row[3] !== null) ||

(row[5[1]] == row[4[1]] && row[4[1]] == row[3[1]] && row[3[1]] == row[2[1]] && row[5] !== null) ||
(row[4[1]] == row[3[1]] && row[3[1]] == row[2[1]] && row[2[1]] == row[1[1]] && row[4] !== null) ||
(row[3[1]] == row[2[1]] && row[2[1]] == row[1[1]] && row[1[1]] == row[0[1]] && row[3] !== null) ||

(row[5[2]] == row[4[2]] && row[4[2]] == row[3[2]] && row[3[2]] == row[2[2]] && row[5] !== null) ||
(row[4[2]] == row[3[2]] && row[3[2]] == row[2[2]] && row[2[2]] == row[1[2]] && row[4] !== null) ||
(row[3[2]] == row[2[2]] && row[2[2]] == row[1[2]] && row[1[2]] == row[0[2]] && row[3] !== null) ||

(row[5[3]] == row[4[3]] && row[4[3]] == row[3[3]] && row[3[3]] == row[2[3]] && row[5] !== null) ||
(row[4[3]] == row[3[3]] && row[3[3]] == row[2[3]] && row[2[3]] == row[1[3]] && row[4] !== null) ||
(row[3[3]] == row[2[3]] && row[2[3]] == row[1[3]] && row[1[3]] == row[0[3]] && row[3] !== null) ||

(row[5[4]] == row[4[4]] && row[4[4]] == row[3[4]] && row[3[4]] == row[2[4]] && row[5] !== null) ||
(row[4[4]] == row[3[4]] && row[3[4]] == row[2[4]] && row[2[4]] == row[1[4]] && row[4] !== null) ||
(row[3[4]] == row[2[4]] && row[2[4]] == row[1[4]] && row[1[4]] == row[0[4]] && row[3] !== null) ||

(row[5[4]] == row[4[4]] && row[4[4]] == row[3[4]] && row[3[4]] == row[2[4]] && row[5] !== null) ||
(row[4[4]] == row[3[4]] && row[3[4]] == row[2[4]] && row[2[4]] == row[1[4]] && row[4] !== null) ||
(row[3[4]] == row[2[4]] && row[2[4]] == row[1[4]] && row[1[4]] == row[0[4]] && row[3] !== null) ||

(row[5[5]] == row[4[5]] && row[4[5]] == row[3[5]] && row[3[5]] == row[2[5]] && row[5] !== null) ||
(row[4[5]] == row[3[5]] && row[3[5]] == row[2[5]] && row[2[5]] == row[1[5]] && row[4] !== null) ||
(row[3[5]] == row[2[5]] && row[2[5]] == row[1[5]] && row[1[5]] == row[0[5]] && row[3] !== null) ||

(row[5[6]] == row[4[6]] && row[4[6]] == row[3[6]] && row[3[6]] == row[2[6]] && row[5] !== null) ||
(row[4[6]] == row[3[6]] && row[3[6]] == row[2[6]] && row[2[6]] == row[1[6]] && row[4] !== null) ||
(row[3[6]] == row[2[6]] && row[2[6]] == row[1[6]] && row[1[6]] == row[0[6]] && row[3] !== null)){