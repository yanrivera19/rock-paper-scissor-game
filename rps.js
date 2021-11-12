/*
Rock, Paper, Scissor Game

Step 1: Create an array with the elements "Rock", "Paper", and "Scissor", and store it in a
cariable called arrayChoices.
Step 2: Create one variable called yourScore that stores your score and another one called 
compScore that stores the computer's score, and give them an initial title of 0.
Step 3: Create a variable called yScoreId and store in it the selection of the table cell
in which your score will be displayed.
Step 4: Create a variable called cScoreId and store in it the selection of the table cell
in which the computer's score will be displayed.
Step 5: Create a variable called messageDisp and store in it the selection of the "p" element in
which some messages will be displayed.
Step 6: Create one variable called displayComChoice and another called displayYourChoice and store in them the
selection of the "p" elements where the computer's and the user's choices will be displayed.
Step 6: Create a function called determineWinner that takes in a title as a parameter. This title
will pass-in the titles of the button elements in our HTML file. There are three button elements, one
for each choice: rock, paper or scissor. We made this connection by adding an onclick event to each button element that
calls the determineWinner function, and with their titles as the parameters. This will help us determine the user's choices
Step 7: Create a variable called compChoice and store in it a generator of random elements 
from the arrayChoices using the Math.random method. 
Step 8: Display the computer's choice and the user's choice on their respective "p" elements using the innerHTML property.
Step 9: Using an if and else if statements we will compare the users choice with the computer's
choice and determine which choice is the winning one in each possible scenario. We first check if
the title passed in from our first button element (user's choice) is equal to "rock", and if the 
computer's choice (compChoice) is equal to the "Scissor" element from the array. If this conditions
are met, then the user's score (yourScore) will increase by one and will be displayed on the table
cell of the user's column ("You"). We check each possible scenario the same way, and display the 
scores for the computer and the user on the table. If both the computer and the user make the same choice, the
choices are displayed with a message indicating that it's a tie, and neither will earn points.
Step 10: With another separate if statement, we check if either's score (computer and user) is equal
to 3, which is the maximum score. If the user's score gets equal to three before the computer's, we
will display a message indicating that the user won, and call a function (we will define later) that displays a button that 
when clicked will refresh the page to start a new game and will disable the "rock", "paper" and "scissor" 
buttons. We do the same if the computer won but with a message giving the option to try again.
Step 11: Create a button element and store it in a variable called resetBtn. This button will not be displayed
until the resetButton gets executed.
Step 12: Create a function called resetGame that will generate a new random selection from the array, will
reset the variables containing the scores to their initial value of 0, will clear out the displayed messages using an empty
string, will enable the use of the "Rock" "Paper" "Scissor" buttons (which will be disabled in the next function), and will hide the
button element that will be created in the resetButton function.
Step 13: Create a function called resetButton that will create and display on the page a button element whenever executed. This button,
when clicked, will execute the resetGame function that we added to it using the addEventListener method. 
It will also disable the "rock", "paper", "scissor" buttons on the page so that the user is given the option to either play a new game 
with a new score or not play at all. To do this we first select the buttons by their class name, run a for loop through them, and apply 
the disabled property to each one of the buttons.
*/


const arrayChoices = ["Rock", "Paper", "Scissor"];
let yourScore = 0;
let compScore = 0;
const yScoreId = document.getElementById("yScore");
const cScoreId = document.getElementById("cScore");
const messageDisp = document.getElementById("demo");
const displayComChoice = document.getElementById("displayCoChoice");
const displayYourChoice = document.getElementById("displayYoChoice");

const determineWinner = function(title) {
	let compChoice = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
	displayComChoice.innerHTML = "Computer's Choice:" + " " + compChoice;
	displayYourChoice.innerHTML = "Your Choice:" + " " + title;
	
	if(title == "Rock" && compChoice == "Scissor") {
		yourScore++
		yScoreId.innerHTML = yourScore;
	} else if(title == "Scissor" && compChoice == "Rock"){
		compScore++		
		cScoreId.innerHTML = compScore;
	} else if(title == "Scissor" && compChoice == "Paper") {
		yourScore++
		yScoreId.innerHTML = yourScore;
	} else if(title == "Paper" && compChoice == "Scissor"){
		compScore++
		cScoreId.innerHTML = compScore;
	} else if(title == "Paper" && compChoice == "Rock") {
		yourScore++
		yScoreId.innerHTML = yourScore;
	} else if(title == "Rock" && compChoice == "Paper"){
		compScore++
		cScoreId.innerHTML = compScore;
	} else if(compChoice = title) {
		displayComChoice.innerHTML = "Computer's Choice:" + " " + compChoice + " " +"(Tie)";
		displayYourChoice.innerHTML = "Your Choice:" + " " + title + " " + "(Tie)";
	}; 

	if(yourScore == 3) {
		messageDisp.innerHTML = "Congratulations! You Win!"
		resetButton();
	} else if(compScore == 3) {
		messageDisp.innerHTML = "Sorry, try again."
		resetButton();
	};	
};


let resetBtn = document.createElement("BUTTON");
resetBtn.className = "btn btn-dark";
resetBtn.innerHTML	= "Play Again";
document.querySelector(".container-fluid").appendChild(resetBtn);
let btnElems = document.getElementsByClassName("btn-lg");
resetBtn.style.display = "none";

let resetGame = function () {
	compChoice = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
	yourScore = 0;
	compScore = 0;
	yScoreId.innerHTML = "";
	cScoreId.innerHTML = "";
	messageDisp.innerHTML = "";
	displayComChoice.innerHTML = "";
	displayYourChoice.innerHTML = "";
	resetBtn.style.display = "none";	
	for(let i = 0; i < btnElems.length; i++) {
    	btnElems[i].disabled = false;
	}
};

function resetButton() {
	resetBtn.style.display = "inline-block";	
	for(let i = 0; i < btnElems.length; i++) {
    	btnElems[i].disabled = true;
	}
  	resetBtn.addEventListener("click", resetGame);	
};
