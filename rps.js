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
will pass in the values of the button elements in our HTML file. There are three button elements, one
for each choice: rock, paper or scissor. We made this connection by adding an onclick event that calls 
the determineWinner function to each button element, and with their values as the parameters. 
Step 7: Create a variable called compChoice and store in it a generator of random elements 
from the arrayChoices using the Math.random method. 
Step 8: Using an if and else if statements we will compare the users choice with the computer's
choice and determine which choice is the winning one in each possible scenario. We first check if
the value passed in from our first button element (user's choice) is equal to "rock", and if the 
computer's choice (compChoice) is equal to the "Scissor" element from the array. If this conditions
are met, then the user's score (yourScore) will increase by one and will be displayed on the table
cell of the user's column ("You"). We check each possible scenario the same way, and display the 
scores for the computer and the user on the table.
Step 9: With another separate if statement, we check if either's score (computer and user) is equal
to 3, which is the maximum score. If the user's score gets equal to three before the computer's, we
will display a message indicating that the user won, and call a function (we will define later) that displays a button that 
when clicked will refresh the page to start a new game and will disable the "rock", "paper" and "scissor" 
buttons. We do the same if the computer won but with a message giving the option to try again.
Step 10: Create a function called resetGame that will refresh the page and start a new game whenever executed.
Step 11: Create a function called resetButton that will create and display on the page a button element whenever executed. This button,
when clicked, will execute the resetGame function that we added to it using the addEventListener method. It will also
disable the "rock", "paper", "scissor" buttons on the page so that the user is given the option to either play a new game with a new score
or not play at all. To do this we first selected the buttons by their class name, ran a for loop through them, and applied the disabled
property to each one of the buttons.
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
	const resBtn = document.createElement("BUTTON");
	resBtn.className = "btn btn-dark";
  	resBtn.innerHTML	= "Play Again";
  	document.querySelector(".container-fluid").appendChild(resBtn);
  	resBtn.addEventListener("click", resetGame);
  	const buElems = document.getElementsByClassName("btn-lg");
	for(let i = 0; i < buElems.length; i++) {
    	buElems[i].disabled = true;
	}
};
