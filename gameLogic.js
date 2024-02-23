let playerText=document.getElementById('p1');
let restartBtn=document.getElementById('r1');
let boxes=Array.from(document.getElementsByClassName('box'));
console.log(boxes);
let winnerIndicator=getComputedStyle(document.body).getPropertyValue("--winning-blocks");//llows you to use the css style in css file in js file

const txtO="o";
const txtX="x";
let currentPlayer=txtX;

let spaces=Array(9).fill(null);
 console.log(spaces);
const startGame=()=>{
    boxes.forEach(box=>box.addEventListener('click',boxClicked))
}
function boxClicked(e){

const id=e.target.id;

if(!spaces[id])
    {
       spaces[id]=currentPlayer;
       console.log(spaces[id])
       e.target.innerText=currentPlayer;

       if(playerHasWon()!==false){
        playerText.innerText=`${currentPlayer} has won!`;
        let winningBlocks=playerHasWon();
        console.log(winningBlocks);
        winningBlocks.map(box=>boxes[box].style.backgroundColor=winnerIndicator);
       }
       currentPlayer=currentPlayer==txtO?txtX:txtO;
   }
}



const winningCombo=[
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6]
];

function playerHasWon(){
   for (const condition of winningCombo) {
    let [a,b,c]=condition;

    if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c])){ 
         return [a,b,c]
    }
   }
   return false;
}

restartBtn.addEventListener('click',restart);
function restart()
{
    spaces.fill(null);
    boxes.forEach(box=>{
        box.innerText='';
        box.style.backgroundColor='';
    })
    playerText.innerText='Tic Tac Toe';
    currentPlayer=txtO;
    
}
startGame();
