let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Generate Target Number
const  generateTarget    = ()=>{
  return Math.floor(Math.random() * 9);  
}

//compareGuesses()
let compareGuesses = (human, computer, target) => {
  if(human<0 || human>9){
    alert("Enter Number between 0-9");
  }
    const userG = Math.abs(target - human);
    const computerG = Math.abs(target - computer);
    return userG <= computerG;
}
 let updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};
const advanceRound = ()=>{
  currentRoundNumber+=1;
}


