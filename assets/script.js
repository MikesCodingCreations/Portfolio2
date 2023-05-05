// JS for Rules Popup button 
function togglePopup() {
    document.getElementById('popup-1').classList.toggle('active');
}

// ***** JS for Game 1 Play
const totalScore = {computerScore: 0, playerScore: 0}

// Function that randomizes the computers choise
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}

// Function that gets the results of the game 
function getResult(playerChoice, computerChoice){
    let score;
    if (playerChoice == computerChoice) {
        score = 0
    } else if (playerChoice == 'Rock' && computerChoice === 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice === 'Rock') {
        score = 1
    } else if (playerChoice == 'Scissors' && computerChoice === 'Paper') {
        score = 1
    } else {
        score = -1
    }
    return score
}

// Funtion that displays the score in the HTML page
function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerScoreDiv = document.getElementById('computer-score')

    if (score == -1) {
        resultDiv.innerText = 'You Lose!'
    } else if (score == 0){
        resultDiv.innerText = 'You Drew!'
    } else {
        resultDiv.innerText = 'You Won!'
    }

    handsDiv.innerText = 
    `🧑 - ${playerChoice} 
    💻 - ${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

// This function should calculte who won and display it on the screen
// Main game logic
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    totalScore['computerScore'] += score
    showResult(score, playerChoice, computerChoice)
}

// Event Listeners to listen to user's input
function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
}

// Funtion that enables the user to restart/end the game and clear the score
function endGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerScoreDiv = document.getElementById('computer-score')


    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
    computerScoreDiv.innerText = ''
}

playGame()