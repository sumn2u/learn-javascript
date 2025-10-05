// Rock Paper Scissors Game - JavaScript
// Demonstrates randomization, event handling, DOM manipulation, and game logic

class RockPaperScissorsGame {
    constructor() {
        this.choices = ['rock', 'paper', 'scissors'];
        this.playerScore = 0;
        this.computerScore = 0;
        this.roundNumber = 0;
        this.gameHistory = [];

        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.playerScoreEl = document.getElementById('playerScore');
        this.computerScoreEl = document.getElementById('computerScore');
        this.playerChoiceEl = document.getElementById('playerChoice');
        this.computerChoiceEl = document.getElementById('computerChoice');
        this.playerChoiceTextEl = document.getElementById('playerChoiceText');
        this.computerChoiceTextEl = document.getElementById('computerChoiceText');
        this.gameResultEl = document.getElementById('gameResult');
        this.rockBtn = document.getElementById('rockBtn');
        this.paperBtn = document.getElementById('paperBtn');
        this.scissorsBtn = document.getElementById('scissorsBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.historyListEl = document.getElementById('historyList');
    }

    bindEvents() {
        this.rockBtn.addEventListener('click', () => this.playRound('rock'));
        this.paperBtn.addEventListener('click', () => this.playRound('paper'));
        this.scissorsBtn.addEventListener('click', () => this.playRound('scissors'));
        this.resetBtn.addEventListener('click', () => this.resetGame());
    }

    playRound(playerChoice) {
        const computerChoice = this.getComputerChoice();
        const result = this.determineWinner(playerChoice, computerChoice);

        this.animateChoices(playerChoice, computerChoice);
        this.displayResult(playerChoice, computerChoice, result);
        this.updateScore(result);
        this.addToHistory(playerChoice, computerChoice, result);
    }

    getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomIndex];
    }

    determineWinner(player, computer) {
        if (player === computer) {
            return 'tie';
        }

        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        return winConditions[player] === computer ? 'win' : 'lose';
    }

    animateChoices(playerChoice, computerChoice) {
        // Add selected animation to buttons
        this.rockBtn.classList.remove('selected');
        this.paperBtn.classList.remove('selected');
        this.scissorsBtn.classList.remove('selected');

        const playerBtn = document.querySelector(`[data-choice="${playerChoice}"]`);
        if (playerBtn) {
            playerBtn.classList.add('selected');
        }

        // Add shake animation to choice displays
        this.playerChoiceEl.classList.add('shake');
        this.computerChoiceEl.classList.add('shake');

        setTimeout(() => {
            this.playerChoiceEl.classList.remove('shake');
            this.computerChoiceEl.classList.remove('shake');
        }, 500);
    }

    displayResult(playerChoice, computerChoice, result) {
        // Update choice displays
        this.playerChoiceTextEl.textContent = this.capitalize(playerChoice);
        this.computerChoiceTextEl.textContent = this.capitalize(computerChoice);

        // Update choice icons
        const playerIcon = this.getChoiceIcon(playerChoice);
        const computerIcon = this.getChoiceIcon(computerChoice);

        this.playerChoiceEl.querySelector('.choice-icon').textContent = playerIcon;
        this.computerChoiceEl.querySelector('.choice-icon').textContent = computerIcon;

        // Display result
        const resultMessages = {
            win: '🎉 You Win!',
            lose: '😔 Computer Wins!',
            tie: '🤝 It\'s a Tie!'
        };

        this.gameResultEl.innerHTML = `<h2>${resultMessages[result]}</h2>`;
    }

    updateScore(result) {
        if (result === 'win') {
            this.playerScore++;
            this.playerScoreEl.textContent = this.playerScore;
        } else if (result === 'lose') {
            this.computerScore++;
            this.computerScoreEl.textContent = this.computerScore;
        }

        // Add score animation
        if (result !== 'tie') {
            const scoreEl = result === 'win' ? this.playerScoreEl : this.computerScoreEl;
            scoreEl.style.transform = 'scale(1.2)';
            setTimeout(() => {
                scoreEl.style.transform = 'scale(1)';
            }, 200);
        }
    }

    addToHistory(playerChoice, computerChoice, result) {
        this.roundNumber++;

        const historyItem = {
            round: this.roundNumber,
            player: playerChoice,
            computer: computerChoice,
            result: result
        };

        this.gameHistory.unshift(historyItem);
        this.displayHistory();
    }

    displayHistory() {
        if (this.gameHistory.length === 0) {
            this.historyListEl.innerHTML = '<p class="no-history">No rounds played yet. Make your first move!</p>';
            return;
        }

        this.historyListEl.innerHTML = '';

        this.gameHistory.slice(0, 10).forEach(item => {
            const historyItemEl = document.createElement('div');
            historyItemEl.className = `history-item ${item.result}`;

            historyItemEl.innerHTML = `
                <div class="round-number">Round ${item.round}</div>
                <div class="moves">
                    <div class="player-move">
                        <span>${this.getChoiceIcon(item.player)}</span>
                        <span>${this.capitalize(item.player)}</span>
                    </div>
                    <span class="vs-small">vs</span>
                    <div class="computer-move">
                        <span>${this.getChoiceIcon(item.computer)}</span>
                        <span>${this.capitalize(item.computer)}</span>
                    </div>
                </div>
                <div class="result">${this.capitalize(item.result)}</div>
            `;

            this.historyListEl.appendChild(historyItemEl);
        });
    }

    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.roundNumber = 0;
        this.gameHistory = [];

        this.playerScoreEl.textContent = '0';
        this.computerScoreEl.textContent = '0';

        // Reset choice displays
        this.playerChoiceTextEl.textContent = 'Make your move!';
        this.computerChoiceTextEl.textContent = 'Waiting...';
        this.playerChoiceEl.querySelector('.choice-icon').textContent = '❓';
        this.computerChoiceEl.querySelector('.choice-icon').textContent = '❓';

        // Reset result display
        this.gameResultEl.innerHTML = '<h2>Choose your move to start!</h2>';

        // Remove selected state from buttons
        this.rockBtn.classList.remove('selected');
        this.paperBtn.classList.remove('selected');
        this.scissorsBtn.classList.remove('selected');

        // Reset history
        this.displayHistory();
    }

    getChoiceIcon(choice) {
        const icons = {
            rock: '🪨',
            paper: '📄',
            scissors: '✂️'
        };
        return icons[choice] || '❓';
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new RockPaperScissorsGame();

    // Add keyboard support for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'r') {
            game.playRound('rock');
        } else if (e.key.toLowerCase() === 'p') {
            game.playRound('paper');
        } else if (e.key.toLowerCase() === 's') {
            game.playRound('scissors');
        }
    });

    // Add sound effects (optional)
    const playSound = (type) => {
        // You can add sound files in the same directory and uncomment this
        // const audio = new Audio(`${type}.mp3`);
        // audio.volume = 0.3;
        // audio.play().catch(e => console.log('Audio play failed:', e));
    };

    // Export for potential testing
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = RockPaperScissorsGame;
    }
});
