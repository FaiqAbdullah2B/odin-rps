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

function playRound(){
    let comp = getComputerChoice()

    let user = getUserChoice()
    
    user = user.toLowerCase()

    console.log(`Computer Played ${comp}`)

    if (comp == user){
        console.log("draw")
        return 0;
    } else if ((user == "rock" && comp == "scissors") ||
        (user == "paper" && comp == "rock") ||
        (user == "scissors" && comp == "paper")) {
        console.log("You Win")
        return 1;
    } else {
        console.log("You Lose")
        return 2;
    }
}

function playGame(){
    let userScore = 0
    let compScore = 0

    let gameOver = false;

    let result;

    

    while (!gameOver){
        
        console.log(`Your Score: ${userScore}`)
        console.log(`Computer Score: ${compScore}`)

        result = playRound();

        if(result == 1){
            userScore++;
        } else if (result == 2){
            compScore++;
        }

        if(compScore > 4){
            console.log("Game over! the computer beat you")
            gameOver = true;
        }

        if(userScore > 4){
            console.log("Game over! you beat the computer")
            gameOver = true;
        }
    }

}

playGame();