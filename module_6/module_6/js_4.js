const gameBoard = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
const rows = [];
let elements = 0;

for (let i = 0; i <3; i+=1){
  rows[i] = [];
  
  for (let j = 0; j <3; j+=1){
    rows[i][j]=gameBoard[elements];
    elements+=1;
  }
}
console.log(rows);

let board ='';
for (let i = 0; i < rows.length; i += 1) {
  for (let j = 0; j < rows[i].length; j += 1) {
    board += `${rows[i][j]} `;}
    board += "\n"; }
alert(`Игра завершена \n ${board}`);