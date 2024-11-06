const board = document.getElementById('board');
const rollButton = document.getElementById('rollButton');
const diceValueDisplay = document.getElementById('diceValue');
const statusDisplay = document.getElementById('status');

let playerPosition = 0;
const snakes = { 16: 6, 48: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
const ladders = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };

function createBoard() {
    for (let i = 100; i >= 1; i--) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = i;
        board.appendChild(cell);
    }
}

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceValueDisplay.innerText = diceValue;
    movePlayer(diceValue);
}

function movePlayer(diceValue) {
    playerPosition += diceValue;
    if (playerPosition > 100) {
        playerPosition = 100; // Can't go beyond 100
    }

    // Check for snakes or ladders
    if (snakes[playerPosition]) {
        playerPosition = snakes[playerPosition];
        statusDisplay.innerText = "Oh no! You hit a snake!";
    } else if (ladders[playerPosition]) {
        playerPosition = ladders[playerPosition];
        statusDisplay.innerText = "Yay! You climbed a ladder!";
    } else {
        statusDisplay.innerText = "You moved to " + playerPosition;
    }

    updatePlayerPosition();
}

function updatePlayerPosition() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.innerHTML = ''); // Clear previous player position
    const playerCell = cells[100 - playerPosition];
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerCell.appendChild(playerDiv);
}

rollButton.addEventListener('click', rollDice);
createBoard();
updatePlayerPosition();