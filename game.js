const game = ()=> {
    let pScore = 0; /* player score */
    let cScore = 0;  /* computer score */

    //Starts the Game

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play Match
const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const cpuHand = document.querySelector('.cpu-hand');
    const hands = document.querySelectorAll('.hands img');
    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        })
    })
    // Computer Options 
    const computerOptions = ['rock', 'paper', 'scissors'];
options.forEach(option => {
    option.addEventListener('click', function() {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
setTimeout(() => {        // call compareHands
    compareHands(this.textContent, computerChoice);

    // Update Images
    playerHand.src = `./assets/${this.textContent}.png`;
    cpuHand.src = `./assets/${computerChoice}.png`;}, 2000)
        // Animation 
        playerHand.style.animation = "shakePlayer 2s ease";
        cpuHand.style.animation = "shakeCpu 2s ease";
    });
});

};

const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const cpuScore = document.querySelector('.cpu-score p');
    playerScore.textContent = pScore;
    cpuScore.textContent = cScore;
}

const compareHands = (playerChoice, computerChoice) => {
    // update text
    const winner = document.querySelector('.winner');
    // Check for a tie
    if(playerChoice === computerChoice) {
        winner.textContent = "It is a tie.";
        return;
    }
    // Check for player rock
    if(playerChoice === 'rock') {
        if(computerChoice === 'scissors') {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
        }
        else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }
    }
    // Check for player paper
    if(playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }
        else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
        }
    }
       // Check for player scissors
       if(playerChoice === 'scissors') {
        if(computerChoice === 'paper') {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
        }
        else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }
    }
};
// counts the 5 rounds
const countRounds = () => {
    for (let i=1; i<=5;i++) {

    }

}
// Announces final result ( winner)
const finalres = (pScore, cScore) => {

}
    // Call all the inner functions 
    startGame();
    playMatch();
};

// start the game function 
game();

