const resultDiv = document.querySelector('#result');
const gameButtons = document.querySelectorAll('.gameButton');
const computerChoiceText = document.querySelector('#computerChoice');
const playerChoiceText = document.querySelector('#playerChoice');
const score = document.querySelector('#score');
let playerScore = 0;    
let computerScore = 0;

let resultText = document.createElement('p');
resultText.textContent = 'Test';
for (let x = 0; x < gameButtons.length; x++) {
    gameButtons[x].addEventListener('click', () => {
        let possibilities = ['rock', 'paper', 'scissors'];
        let computerChoice = Math.floor(Math.random() * possibilities.length);
        playerChoiceText.textContent = `You chose: ${possibilities[x]}`;
        computerChoiceText.textContent = `Computer chose: ${possibilities[computerChoice]}`;

        if (x === computerChoice) {
            resultText.textContent = 'Tie!';
        }
        else if (x === 0 && computerChoice === 1) {
            computerScore++;
            resultText.textContent = 'You lose! Paper beats rock.';
        }
        else if (x === 0 && computerChoice === 2) {
            playerScore++;
            resultText.textContent = 'You win! Rock beats scissors.';
        }
        else if (x === 1 && computerChoice === 0) {
            playerScore++;
            resultText.textContent = 'You win! Paper beats rock.';
        }
        else if (x === 1 && computerChoice === 2) {
            computerScore++;
            resultText.textContent = 'You lose! Scissors beats paper.';
        }
        else if (x === 2 && computerChoice === 0) {
            computerScore++;
            resultText.textContent = 'You lose! Rock beats scissors.';
        }
        else if (x === 2 && computerChoice === 1) {
            playerScore++;
            resultText.textContent = 'You win! Scissors beats paper.';
        }
        resultDiv.appendChild(resultText);
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    });
}
