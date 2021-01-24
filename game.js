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
    // Computer Options 
    const computerOptions = ['rock', 'paper', 'scissors'];
options.forEach(option => {
    option.addEventListener('click', function() {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // call compareHands
    });
});

};

const compareHands = (playerChoice, computerChoice) => {
    // update text
    const winner = document.querySelector('.winner');
    // Check for a tie
    if(playerChoice === computerChoice) {
        winner.textContent = "It is a tie.";
        return;
    }
    // Check for player has rock
    if(playerChoice === 'rock') {
        if(computerChoice === 'scissors') {
            winner.textContent = "Player Wins";
        }
    }
};

    // Call all the inner functions 
    startGame();
    playMatch();
};

// start the game function 
game();


//     /* Function that randomizes the output from the computer*/
//     function computerPlay() {
//         const options = ["rock", "paper", "scissors"];
//         const random = Math.floor(Math.random()* options.length);
//         console.log(random, options[random]);
//         return random, options[random];
//     }
// let playerSelection = "Rock";
// let computerSelection = computerPlay();
//     /* Function that plays a round */ 
//     function playRound(playerSelection, computerSelection) {
//         let player = playerSelection.toLowerCase();
//         let ply = 0; /* player score */
//         let cpu = 0; /* cpu score */
// if (player === computerSelection) {
//     console.log("It's a tie!");
//     return ("It's a tie!");
// }

// else if (player == "rock"){
//     if (computerSelection == "scissors") {
//         console.log("You win! "+player+" beats "+computerSelection);
//         ply ++;
//         return "You win! "+player+" beats "+computerSelection;
//     }
//     else if (computerSelection == "paper") {
//         console.log("You lose! "+computerSelection+" beats "+player);
//         cpu++;
//         return "You lose! "+computerSelection+" beats "+player;
//     }

// }
// else if (player == "paper") {
//     if (computerSelection == "rock") {
//         console.log("You win! "+player+" beats "+computerSelection);
//         ply ++;
//         return "You win! "+player+" beats "+computerSelection;
//     }
//     else if (computerSelection == "scissors"){
//         console.log("You lose! "+computerSelection+" beats "+player);
//         cpu++;
//         return "You lose! "+computerSelection+" beats "+player;
//     }
// }
// else if (player == "scissors") {
//         if (computerSelection == "rock") {
//             console.log("You lose! "+computerSelection+" beats "+player);
//             cpu++;
//             return "You lose! "+computerSelection+" beats "+player;
//         }
//     else if (computerSelection == "paper") {
//         console.log("You win! "+player+" beats "+computerSelection);
//         ply ++;
//         return "You win! "+player+" beats "+computerSelection;
//     }
// }
// }
// // console.log(playRound(playerSelection, computerSelection));

