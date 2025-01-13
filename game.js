let scoreofU = 0;
let scoreofC = 0;

function computerChoice() {
    const choices = ['bear', 'gun', 'human'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userInput, computerInput) {
    if (userInput === computerInput) {
        return 'It is a tie!';
    }
    if (userInput === 'human') {
        if (computerInput === 'bear') {
            scoreofC++;
            return 'You have been mauled by a bear!';
        } else {
            scoreofU++;
            return 'You have disarmed a gun!';
        }
    }
    if (userInput === 'bear') {
        if (computerInput === 'gun') {
            scoreofC++;
            return 'You have been shot by a gun!';
        } else {
            scoreofU++;
            return 'You have mauled a human!';
        }
    }
    if (userInput === 'gun') {
        if (computerInput === 'human') {
            scoreofC++;
            return 'Your gun has been disarmed!';
        } else {
            scoreofU++;
            return 'You have shot a bear!';
        }
    }
}

function playGame(userInput) {
    const computerInput = computerChoice();
    const result = determineWinner(userInput, computerInput);

    document.getElementById('user-choice').textContent = `Your choice: ${userInput}`;
    document.getElementById('computer-choice').textContent = `Computer's choice: ${computerInput}`;
    document.getElementById('winner').textContent = `Result: ${result}`;
    document.getElementById('score').textContent = `Score: User ${scoreofU} - Computer ${scoreofC}`;

    if (scoreofU > 5 && scoreofU > scoreofC) {
        message('Congratulations! You are the winner!');
        resetGame();
    } else if (scoreofC > 5 && scoreofC > scoreofU) {
        message('The computer wins! Better luck next time.');
        resetGame();
    }
}

function resetGame() {
    scoreofU = 0;
    scoreofC = 0;
    document.getElementById('user-choice').textContent = 'Your choice: ';
    document.getElementById('computer-choice').textContent = 'Computer\'s choice: ';
    document.getElementById('winner').textContent = 'Result: ';
    document.getElementById('score').textContent = 'Score: User 0 - Computer 0';
}
