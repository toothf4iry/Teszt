var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoiceFunction = function () {

    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);
    return computerChoice;
}

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        userChoice = prompt("Tie! Choose again!");
        compare(userChoice, computerChoiceFunction());

    }
    //hogyan lehet, hogy mindig elölről kezdje?? do while-lal
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            console.log("rock wins");
        }

        else {
            console.log("paper wins");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("paper wins");
        }
        else {
            console.log("scissors wins");
        }
    }

}

if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    compare(userChoice, computerChoiceFunction())
} else {
    console.log("Only rock or paper or scissors can play!")
}
