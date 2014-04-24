(function() {

    var conditions = [
        {winner: "rock", over:["scissors", "paper"] },
    ];

    var numOfWins = 0;

    var rockWins;
    var paperWins;
    var scissorsWins;

    var game = {};
    this.game = game;

    game.runGame = function () {

        //oneGame();

        runGameWithHtmlInput();
    }

    game.runGameWithHtmlInput = function(){

        var inputDomElem = document.getElementById("rps_input");

        var userChoice = inputDomElem.value;

        var textToShow = "";

//        document.querySelector("#id > .className > input");

        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            var x = compare(userChoice, computerChoiceFunction());
            textToShow = x.what + " wins";
        } else {
            textToShow = "Only rock or paper or scissors can play!";
        }

        showResult(textToShow);

    }

    /**
     * private (hidden)
     */

    game.showResult(x){
        var resultElem = document.getElementById("rps_result");
        resultElem.innerHTML = "<b>" + x + "</b>";
    }

    game.oneGame(){
        var userChoice = prompt("Do you choose rock, paper or scissors?");

        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            compare(userChoice, computerChoiceFunction())
        } else {
            console.log("Only rock or paper or scissors can play!")
        }
    }

    var computerChoiceFunction = function () {

        var computerChoice = Math.random();

        if (computerChoice < 0.34+0.01.rockWins) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        console.log("Computer: " + computerChoice);
        return computerChoice;
    }

// ez okes, majd szepitjuk
    var compare = function (choice1, choice2) {

        var compareData = {};

        if (choice1 === choice2) {
            userChoice = prompt("Tie! Choose again!");
            compare(userChoice, computerChoiceFunction());
            compareData.who = "nobody";

        }
        //hogyan lehet, hogy mindig elölről kezdje?? do while-lal
        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                numOfWins ++;
                compareData.what = "rock";

            }

            else {
                numOfWins ++;
                compareData.what = "paper";

            }
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                compareData.what = "paper";

            }
            else {
                compareData.what = "scissors";
            }
        }

        return compareData;

    }

})()