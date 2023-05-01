const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice){
    // This function will return the result of the score if you win, lose or draw.
    let score;
        // If there is a draw 'player = computer choice' then it is a draw aka '0'.
    if (playerChoice == computerChoice) {
        score = 0
        // Each 'else if' resembles the player beating the computer.
    } else if (playerChoice == 'Rock' && computerChoice === 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice === 'Rock') {
        score = 1
    } else if (playerChoice == 'Scissors' && computerChoice === 'Paper') {
        score = 1
        // The 'else' resembles the player loosing to the computer.
    } else {
        score = -1
    }
    return score
}

function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerScoreDiv = document.getElementById('computer-score')
    
    // If you loose, you will be displayed with the following text:
    if (score == -1) {
        resultDiv.innerText = 'You Lose!'
    // If you draw, you will be displayed with the following text:
    } else if (score == 0){
        resultDiv.innerText = 'You Drew!'
    // If you win, you will be displayed with the following text:
    } else {
        resultDiv.innerText = 'You Won!'
    }

    handsDiv.innerText = 
    `🧑 - ${playerChoice} 
    VS
    💻 - ${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

// This function should calculte who won and display it on the screen
// Main game logic
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    // Compute the result based on PC and CC
    const score = getResult(playerChoice, computerChoice)
    // Scoreboard updates
    totalScore['playerScore'] += score
    totalScore['computerScore'] += score
    // Score is show on screen
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