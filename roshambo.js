const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;}
  else {console.log ('Error!!')}}

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random()*3);
	switch (randomNumber) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}}

const userChoice = getUserChoice ('rock')
const computerChoice = getComputerChoice ()

const getWinner = (userChoice, computerChoice) => {if (userChoice === computerChoice) {return 'Tie game!'}
if (userChoice === 'rock') {
		if (computerChoice === 'paper') {return 'You lose!'} 
		else return 'You win!'}
	if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {return 'You lose!'} 
		else return 'You win!'}
	if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {return 'You lose!'} 
		else return 'You win!'}	}


console.log (getWinner ('rock', 'paper'))
		
console.log (determineWinner('rock', computerChoice)

								
								 
