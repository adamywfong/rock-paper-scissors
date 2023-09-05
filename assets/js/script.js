var rps = ["Rock","Paper","Scissors"]
var result = ["You Won!", "You Lost :(", "It's a Draw!"]

//Keeps track of Wins, Losses, and Draws
var wld = [0,0,0];

//Compares user input to opponent imput to determine game result
var rpsMatrix = [
    [2,1,0],
    [0,2,1],
    [1,0,2]
];

function playRPS(choice) {
    var botRPS = Math.floor(3*Math.random());
    wld[rpsMatrix[choice][botRPS]]++;
    alert("Your opponent picks " + rps[botRPS] +".\n" + result[rpsMatrix[choice][botRPS]]+"\nWins: " + wld[0] + " Losses: " + wld[1] + " Draws: " + wld[2]);
    console.log("Wins: " + wld[0] + " Losses: " + wld[1] + " Draws: " + wld[2]);
}

function pick() {
    var playerRPS = prompt("Please enter Rock, Paper, or Scissors");
    while (playerRPS  != 'R' && playerRPS != 'P' && playerRPS !='S'){
        if (playerRPS .toUpperCase() == 'R' || playerRPS .toUpperCase() == 'ROCK') {
            console.log("You picked Rock");
            return 0;
        } else if (playerRPS .toUpperCase() == 'P' || playerRPS .toUpperCase() == 'PAPER') {
            console.log("You picked Paper");
            return 1;
        } else if (playerRPS .toUpperCase() == 'S' || playerRPS .toUpperCase() == 'SCISSORS') {
            console.log("You picked Scissors");
            return 2;
        } else {
            playerRPS  = prompt("That wasn't an option! Try again. Please enter Rock, Paper, or Scissors");
        }
    }
}

function play() {
    var playing = true;
    while (playing){
        playRPS(pick());
        playing = confirm("Do you want to play again?");
    }
}

play();


