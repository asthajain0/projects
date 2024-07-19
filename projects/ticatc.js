console.log('welcome')
let ting=new Audio("ting.mp3");
let turn="X";
let gameover=false;
const changeturn=()=>{
    return turn=== "X"?"0":"X";
}
const win=()=>{
   let inside=document.getElementsByClassName('.inside')
   let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
]
wins.forEach((e)=>{
    if((inside[e[0]].innerText===inside[e[1]].innerText) && (inside[e[1]].innerText===inside[e[2]].innerText) && inside[e[0]].innerText!=""){
        document.querySelector('.result').innerText = inside[e[0]].innerText + " Won"
        gameover=true;
        
    }
})
}
let box=document.getElementsByClassName("box");
        Array.from(box).forEach(ele=>{
            let fine=ele.querySelectorAll('.inside');
            ele.addEventListener('click',()=>{
                if(fine.innerText===''){
                    fine.innerText=turn;
                    turn = changeTurn();
                    ting.play();
                    win();
                    if (!gameover){
                        document.getElementsByClassName("out")[0].innerText  = "Turn for " + turn;
                    } 
                }
            })
        })