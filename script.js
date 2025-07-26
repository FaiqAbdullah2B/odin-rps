console.log("Hello World")

function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "scissors"
            break
    }
}

function getUserChoice(){
    return prompt("Please select your play: Rock, Paper or Scissors")
}

function playRound(choice){
    let comp = getComputerChoice()

    let user = choice || getUserChoice();
    
    user = user.toLowerCase()

    // console.log(`Computer Played ${comp}`)

    let domCompChoice = document.querySelector("#compChoice");

    domCompChoice.textContent = `Computer Played ${comp}`;

    let domResult = document.querySelector("#result");

    if (comp == user){
        // console.log("draw")
        domResult.textContent = "Draw";
        return 0;
    } else if ((user == "rock" && comp == "scissors") ||
        (user == "paper" && comp == "rock") ||
        (user == "scissors" && comp == "paper")) {
        // console.log("You Win")
        domResult.textContent = "You Win!";
        return 1;
    } else {
        // console.log("You Lose")
        domResult.textContent = "You Lose";
        return 2;
    }
}

function playGame(){
    // let userScore = 0
    // let compScore = 0

    // let gameOver = false;

    // let result;

    

    // // while (!gameOver){
        
    // //     console.log(`Your Score: ${userScore}`)
    // //     console.log(`Computer Score: ${compScore}`)

    // //     result = playRound();

    // //     if(result == 1){
    // //         userScore++;
    // //     } else if (result == 2){
    // //         compScore++;
    // //     }

    // //     if(compScore > 4){
    // //         console.log("Game over! the computer beat you")
    // //         gameOver = true;
    // //     }

    // //     if(userScore > 4){
    // //         console.log("Game over! you beat the computer")
    // //         gameOver = true;
    // //     }
    // // }


    let rockButton = document.querySelector("#Rock");
    let paperButton = document.querySelector("#Paper");
    let scissors = document.querySelector("Scissors");

    rockButton.addEventListener("click", () => playRound("rock"));
    paperButton.addEventListener("click", () => playRound("paper"));
    scissorButton.addEventListener("click", () => playRound("scissors"));

}

playGame();