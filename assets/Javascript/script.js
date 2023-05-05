// JS for Rules Popup button 
function togglePopup() {
    document.getElementById('popup-1').classList.toggle('active');
}

// JS for Game 1 Play
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


// Game 2
window.addEventListener('DOMContentLoaded', function() {
    var tiles = Array.from(document.querySelectorAll('.tile'));
    var playerDisplay = document.querySelector('.display-player');
    var resetButton = document.querySelector('#reset');
    var announcer = document.querySelector('.announcer');

    var board = ['', '', '', '', '', '', '', '', ''];
    var currentPlayer = 'X';
    var isGameActive = true;

    var PLAYERX_WON = 'PLAYERX_WON';
    var PLAYERO_WON = 'PLAYERO_WON';
    var TIE = 'TIE';

    var winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        var roundWon = false;
        for (var i = 0; i <= 7; i++) {
            var winCondition = winningConditions[i];
            var a = board[winCondition[0]];
            var b = board[winCondition[1]];
            var c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
    }

    var resetBoard = function() {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    };

    var announce = function(type) {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Wins';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Wins';
                break;
            case TIE:
                announcer.innerText = 'It is a Tie';
        }
        announcer.classList.remove('hide');
    };

    var isValidAction = function(tile) {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    var updateBoard =  function(index) {
        board[index] = currentPlayer;
    };

    var changePlayer = function() {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    };

    var userAction = function(tile, index) {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    };
    
    tiles.forEach( function(tile, index) {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});