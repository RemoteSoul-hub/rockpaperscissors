    /* Function that randomizes the output from the computer*/
    function computerPlay() {
        const options = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random()* options.length);
        console.log(random, options[random]);
        return random, options[random];
    }
let playerSelection = "Rock";
let computerSelection = computerPlay();
    /* Function that plays a round */ 
    function playRound(playerSelection, computerSelection) {
        let player = playerSelection.toLowerCase();
        let ply = 0; /* player score */
        let cpu = 0; /* cpu score */
if (player === computerSelection) {
    console.log("It's a tie!");
    return ("It's a tie!");
}

else if (player == "rock"){
    if (computerSelection == "scissors") {
        console.log("You win! "+player+" beats "+computerSelection);
        ply ++;
        return "You win! "+player+" beats "+computerSelection;
    }
    else if (computerSelection == "paper") {
        console.log("You lose! "+computerSelection+" beats "+player);
        cpu++;
        return "You lose! "+computerSelection+" beats "+player;
    }

}
else if (player == "paper") {
    if (computerSelection == "rock") {
        console.log("You win! "+player+" beats "+computerSelection);
        ply ++;
        return "You win! "+player+" beats "+computerSelection;
    }
    else if (computerSelection == "scissors"){
        console.log("You lose! "+computerSelection+" beats "+player);
        cpu++;
        return "You lose! "+computerSelection+" beats "+player;
    }
}
else if (player == "scissors") {
        if (computerSelection == "rock") {
            console.log("You lose! "+computerSelection+" beats "+player);
            cpu++;
            return "You lose! "+computerSelection+" beats "+player;
        }
    else if (computerSelection == "paper") {
        console.log("You win! "+player+" beats "+computerSelection);
        ply ++;
        return "You win! "+player+" beats "+computerSelection;
    }
}
}
// console.log(playRound(playerSelection, computerSelection));

