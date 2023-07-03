//random choise of the pc
function getComputerChoice(){
   let x = Math.floor(Math.random() * 10);
   if(x < 3){
    return 'ROCK';
   }
   else if(x < 6){
    return 'PAPER';
   }
   else{
    return 'SCISSORS';
   }
}

//the restart button
let restart = document.getElementById('restart');
//this counts the player's wins
let countMan = 0;
let man = document.getElementById('playerScore');
man.textContent = countMan;
//and this the computer's
let computer = document.getElementById('pcScore');;
let countPc = 0;
computer.textContent = countPc;
//winners
let winner = document.getElementById('winner');
//outcome
let outcome = document.getElementById('roundOutcome');
//pc's choise
let pc = document.getElementById('pc');
//this fuction plays one round
function playRound(choise) {
    if(countMan <= 4 && countPc <= 4){
    const playerSelection = choise.toUpperCase();

    console.log('You choise: ' + playerSelection);

    const computerSelection = getComputerChoice();

    console.log("Computer's choise: " + computerSelection);

    pc.textContent = computerSelection;
    
    if(playerSelection == computerSelection){
        console.log("It's a Tie!");
        outcome.textContent = "It's a Tie!";
    }
    else if((playerSelection == 'ROCK' && computerSelection == 'PAPER')||(playerSelection == 'PAPER' && computerSelection == 'SCISSORS' )||(playerSelection == 'SCISSORS' && computerSelection == 'ROCK' )){
        console.log("You Lose!");
        outcome.textContent = "You Lost.";
        countPc++;
        computer.textContent = countPc;
       if(countPc == 5){
           winner.textContent = 'Computer Wins!'
       }
    }
    else{
        console.log("You Win!");
        outcome.textContent = "You Won.";
        countMan++;
        man.textContent = countMan;
       if(countMan == 5){
           winner.textContent = 'Player Wins!!!'
       }
    }
   
  }
}  
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function(){
   
    playRound('rock');
});
paper.addEventListener('click', function(){
    
    playRound('paper');
});
scissors.addEventListener('click',function(){
    
    playRound('scissors');
});
//end game


//restart button
restart.addEventListener('click', function(){
    winner.textContent = ' ';
    outcome.textContent = " ";
    countMan = 0;
    countPc = 0;
    man.textContent = countMan;
    computer.textContent = countPc;
    pc.textContent = 'Waitting...'
});

