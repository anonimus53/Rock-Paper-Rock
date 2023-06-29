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
let count = 0;
let count2 = 0;
function playRound() {
    let choise = prompt('Chose between(Rock, Paper and scissors) by typing the word here: ');
    const playerSelection = choise.toUpperCase();
    console.log('You choise: ' + playerSelection);
    const computerSelection = getComputerChoice();
    console.log("Computer's choise: " + computerSelection);
    if(playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS'){
        return "You typed your choise wrong, the round is ignored"
    }

    if(playerSelection == computerSelection){
        return "It's a Tie!";
    }
    else if((playerSelection == 'ROCK' && computerSelection == 'PAPER')||(playerSelection == 'PAPER' && computerSelection == 'SCISSORS' )||(playerSelection == 'SCISSORS' && computerSelection == 'ROCK' )){
        count2++;
        return 'You Lose! ' + computerSelection + ' defeats ' + playerSelection;
    }
    else{
        count++;
        return "You Win! " + playerSelection + ' defeats ' + computerSelection;
    }
  }

function game(){
    let round = 1;
  
    for(let i=0; i<5; i++){
        console.log(' Current Round: ' + round);
        
        round++
        
        console.log(playRound());
    }
    console.log('calculating the Score...')
    if(count > count2){
        return 'You are the Winner!!!'
    }
    else if(count < count2){
       return 'Computer Wins!...better luck next time.'
    }
    else{
        return "It's a Draw!"
    }
}
console.log(game());
