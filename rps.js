/*
Rock, Paper, Scissor Game

Step 1: Create an array with the elements "Rock", "Paper", and "Scissor", and store it in a
cariable called arrayChoices.
Step 2: Create one variable called yourScore that stores your score and another one called 
compScore that stores the computer's score, and give them an initial value of 0.
Step 3: Create a variable called yScoreId and store in it the selection of the table cell
in which your score will be displayed.
Step 4: Create a variable called cScoreId and store in it the selection of the table cell
in which the computer's score will be displayed.
Step 5: Create a variable called parr and store in it the selection of the "p" element in
which some messages will be displayed.
Step 6: Create a function called determineWinner that takes in a value as a parameter. This value
will pass in the values of the button elements in our HTML file. We made this connection by adding
an onclick event that calls the determineWinner function to each button element, and with their values 
as the parameters. 
Step 7: Create a variable called compChoice and store in it a generator of random elements 
from the arrayChoices using the Math.random method. 
Step 8: Usig an if statement, check if the value passed




*/





const arrayChoices = ["Rock", "Paper", "Scissor"];

let yourScore = 0;
let compScore = 0;
const yScoreId = document.getElementById("yScore");
const cScoreId = document.getElementById("cScore");
const parr = document.getElementById("demo");

const determineWinner = function(value) {
	let compChoice = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];

	if(value == "rock" && compChoice == "Scissor") {
		yourScore++
		yScoreId.innerHTML = yourScore;
	} else if(value == "scissor" && compChoice == "Rock"){
		compScore++		
		cScoreId.innerHTML = compScore;
	} else if(value == "scissor" && compChoice == "Paper") {
		yourScore++
		yScoreId.innerHTML = yourScore;
	} else if(value == "paper" && compChoice == "Scissor"){
		compScore++
		cScoreId.innerHTML = compScore;
	} else if(value == "paper" && compChoice == "Rock") {
		yourScore++
		yScoreId.innerHTML = yourScore;
	} else if(value == "rock" && compChoice == "Paper"){
		compScore++
		cScoreId.innerHTML = compScore;
	} else if(compChoice = value) {
		parr.innerHTML = "Tie"
	}; 

	if(yourScore == 3) {
		parr.innerHTML = "Congratulations! You Win!"
		resetButton();
	} else if(compScore == 3) {
		parr.innerHTML = "Sorry, try again."
		resetButton();
	};	

};

let resetGame = function () {
document.location.href = "";
};

function resetButton() {
	const y = document.createElement("BUTTON");
	y.className = "btn btn-dark";
  	y.innerHTML	= "Play Again";
  	document.querySelector(".container-fluid").appendChild(y);
  	y.addEventListener("click", resetGame);
  	const bElems = document.getElementsByClassName("btn-lg");
	for(let i = 0; i < bElems.length; i++) {
    bElems[i].disabled = true;
	}
};
