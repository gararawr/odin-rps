// let result = "You win";


function computerPlay() {
  let computerPlay = Math.random();

  if (computerPlay < 0.33) {
    computerPlay = "rock";
  } else if (computerPlay < 0.66) {
    computerPlay = "paper";
  } else { 
    computerPlay = "scissors";
  } 
  return computerPlay;
}

function playerSelection() {
  let choice = prompt("rock, paper, or scissors?").toLowerCase();
  return choice;
}


// Just incase! The line of code below, makes any equal string a draw!
function game(computerPlay, playerSelection) {
  if (computerPlay == playerSelection) {
    return "It's a draw bitch";
  } else if (computerPlay === "rock" && playerSelection === "scissors") {
    return "L";
  } else if (computerPlay === "rock" && playerSelection === "paper") {
    return "dub";
  } else if (computerPlay === "scissors" && playerSelection === "rock") {
    return "dub";
  } else if (computerPlay === "scissors" && playerSelection === "paper") {
    return "L";
  } else if (computerPlay === "paper" && playerSelection === "scissors"){
    return "dub";
  } else if (computerPlay === "paper" && playerSelection === "rock") {
    return "L";
  }
}

let pWin = 0;
let cWin = 0;
let draw = 0;
let counter = 0;
let gamie = "dub";
let gameB = "L";
let gameC = "It's a draw bitch";

for (let gx5 = 0; gx5 < 5; gx5++) {
  var gay = (game(computerPlay(), playerSelection()));
  console.log(gay);
   if(gay === gamie) {  
    pWin++;
  } else if(gay === gameB) {
    cWin++;
  } else if(gay === gameC) {
    draw++;
  } 
}

function score() {
  if(pWin > cWin) {
    console.log("You won");
  } else if(cWin > pWin) {
    console.log("You lost");
  } else if(cWin = pWin) {
    console.log("Draw");
  }
}
score();


console.log(pWin);
console.log(cWin);
console.log(draw);














































// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));





// for (let i = 1; i <= answer; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if(i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
// 