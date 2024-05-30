let boxes =  document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let winText = document.querySelector(".winner");
let count = 0;

let turn=true;  // playerX playerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,3,8],
    [2,4,6],
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turn=true;
    enableBoxes();
    winText.classList.add("hide");
    newGame.classList.add("hide");
}

const showWinner=(pos)=>{
    winText.innerText=`${pos} is the Winner`;
    winText.classList.remove("hide");
    newGame.classList.remove("hide");
};

const draw=(count)=>{
    if(count==9){
    winText.innerText=" Game has Drawed";
    winText.classList.remove("hide");
    newGame.classList.remove("hide");
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let positionValue1=boxes[pattern[0]].innerText;
        let positionValue2=boxes[pattern[1]].innerText;
        let positionValue3=boxes[pattern[2]].innerText;


        if(positionValue1!==""&&positionValue2!==""&&positionValue3!==""){
            if(positionValue1===positionValue2&&positionValue2===positionValue3){
                showWinner(positionValue1); 
                disableBoxes();             
            }
        }
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn==true){ 
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }

        box.disabled=true; // button will disable means value will not change after multiple click

        checkWinner();

        count++;

        draw(count);
    })
});

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
