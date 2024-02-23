let userScore = 0;
let comScore = 0;
const userScorepara=document.getElementById("user-score")
const compScorepara=document.getElementById("comp-score")

const choices = document.querySelectorAll(".choice");
const msg=document.getElementById("msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randonidx=Math.floor(Math.random()*3);
    return options[randonidx];
}

const showWinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {   
          userScore++;
         msg.style.background="green";
         userScorepara.innerHTML=userScore;
        msg.innerHTML=`You win! ${userchoice} beats ${compchoice}`;
       // console.log("you win!");

    }
    else
    {  
         comScore++;    
         compScorepara.innerHTML=comScore;
         msg.style.background="red"
        msg.innerHTML=`You lose. ${compchoice} beats ${userchoice} `;

        console.log("you lose");
    }
}

const playgame = (userchoice) => {
  console.log("user choice", userchoice);
  //Generate computer choices
const compchoice=genCompChoice();
console.log("comp choice", compchoice);
if(userchoice==compchoice)
{
    //draw
    msg.innerHTML="Game was draw.Play Again";
   // console.log("game is draw");
msg.style.background="#081b31"
}
else
{  let userwin=true;
    if( userchoice=="rock")
    { //paper scissors
    userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice=="paper")
    {
        userwin=compchoice==="scissors"?false:true;
    }
    else
    {
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
}
};

choices.forEach((choice) => {
  // console.log(choice); get all the div's of choice
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
