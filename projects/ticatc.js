console.log('welcome')
let ting=new Audio("ting.mp3");
let finish=new Audio("gameover.mp3")
let turn="X";
let gameover=false;
const changeturn=()=>{
    return turn=== "X"?"0":"X";
}
const win=()=>{
   let inside=document.getElementsByClassName('inside')
   let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
wins.forEach(e=>{
    if((inside[e[0]].innerText===inside[e[1]].innerText) && (inside[e[2]].innerText===inside[e[1]].innerText) && inside[e[0]].innerText!=""){
        document.querySelector('.out').innerText = inside[e[0]].innerText + " Won"
        gameover=true;
        finish.play();
    }
})
 
}
let box=document.getElementsByClassName("box");
        Array.from(box).forEach(ele=>{
            let fine=ele.querySelector('.inside');
            ele.addEventListener('click',()=>{
                if(fine.innerText===''){
                    fine.innerText=turn;
                    turn = changeturn();
                    ting.play();
                    win();
                    if (!gameover){
                        document.getElementsByClassName("out")[0].innerText  = "Turn for " + turn;
                    } 
                }
            })
        })

        reset.addEventListener('click', ()=>{
            let boxtexts = document.querySelectorAll('.inside');
            Array.from(boxtexts).forEach(element => {
                element.innerText = ""
            });
            turn = "X"; 
            gameover = false
            
            document.getElementsByClassName("out")[0].innerText  = "Turn for " + turn;
            
        })
        
