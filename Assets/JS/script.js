let playButton = document.getElementById("goButton");
let docCpuScore = document.getElementById("cpuScore");
let docPlayerScore = document.getElementById("playerScore");

let result = "";


var computer = 
{
    cpuMove:"",
    cpuScore: 0,
    cpuPickedLetter:false,
    cpuPicksALetter: function()
    {
        var choice = getRandomInt(3);
        if (choice == 0)
        {
            this.cpuMove = "R";
        }
        else if (choice == 1)
        {
            this.cpuMove = "P";
        }
        else
        {
            this.cpuMove = "S";
        }
    }
}


var player = 
{
    playerName: "",
    playerScore: 0,
    playersMove: "",
    playerPickedLetter: false,
    playerPicksALetter: function()
    {
        this.playersMove = getInput("Pick a letter: R for Rock, P for Paper, S for Scissors", "R, P, S");
    },
    playersChoiceIsValid: function()
    {
        if (this.playersMove == "r" || this.playersMove == "R" || this.playersMove == "p" || this.playersMove == "P" ||this.playersMove == "s" || this.playersMove == "S") 
        {
            this.playerPickedLetter = true;
        }
    }
}

function getInput(promptText, defaultText) 
{
    var retVal = window.prompt(promptText, defaultText);

    return retVal;
} 


function sendAlert(promptText)
{
    window.alert(promptText);

    return;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

playButton.addEventListener("click", e => {
    if (player.playerName == "")
    {
        player.playerName = getInput("Welcome to Rock Paper Scissors", "Enter your name here");
    }

   

    while(player.playerPickedLetter == false)
    {
        player.playerPicksALetter();
        player.playersChoiceIsValid();
    }

    computer.cpuPicksALetter();
    computer.cpuPickedLetter= true;

    if( player.playerPickedLetter && computer.cpuPickedLetter)
    {
        if (player.playersMove == "r" || player.playersMove == "R")
        {
            switch(computer.cpuMove)
            {
                case "R":
                    result = "Tie.";
                    player.playerScore += 0;
                    computer.cpuScore += 0;
                    break;
                case "P":
                    result = "Computer Wins.";
                    player.playerScore += 0;
                    computer.cpuScore += 1;
                    break;
                case "S":
                    result = "Player Wins.";
                    player.playerScore += 1;
                    computer.cpuScore += 0;
                    break;
            }
        }
        if (player.playersMove == "p" || player.playersMove == "P")
        {
            switch(computer.cpuMove)
            {
                case "P":
                    result = "Tie.";
                    player.playerScore += 0;
                    computer.cpuScore += 0;
                    break;
                case "S":
                    result = "Computer Wins.";
                    player.playerScore += 0;
                    computer.cpuScore += 1;
                    break;
                case "R":
                    result = "Player Wins.";
                    player.playerScore += 1;
                    computer.cpuScore += 0;
                    break;
            }
        }
        if (player.playersMove == "s" || player.playersMove == "S")
        {
            switch(computer.cpuMove)
            {
                case "S":
                    result = "Tie.";
                    player.playerScore += 0;
                    computer.cpuScore += 0;
                    break;
                case "R":
                    result = "Computer Wins.";
                    player.playerScore += 0;
                    computer.cpuScore += 1;
                    break;
                case "P":
                    result = "Player Wins.";
                    player.playerScore += 1;
                    computer.cpuScore += 0;
                    break;
            }
        }

        sendAlert(result);

        docCpuScore.textContent = computer.cpuScore;
        docPlayerScore.textContent = player.playerScore;



    }

    
});














































