
    var showText = function(x,y,z){
    var resultElem = document.getElementById(y);
    resultElem.innerHTML =  z + " says: " + "<b>" + x + "</b>";  }

    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
            showText("Tie! Choose again!", "gameresult", "Judge" )
        }

        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                showText("rock wins!", "gameresult", "Judge" );
            }

            else {
                showText("paper wins!", "gameresult", "Judge" ) ;
            }
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                showText("paper wins!", "gameresult", "Judge" ) ;
            }
            else {
                showText("scissors wins!", "gameresult", "Judge" ) ;
            }
        }
        else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                showText("rock wins!", "gameresult", "Judge" ) ;
            }
            else {
                showText("scissors wins!", "gameresult", "Judge" ) ;
            }
        }

    }

    var computerChoiceFunction = function () {
        var computerChoice = Math.random();

        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        showText ( computerChoice, "computersays", "computer") ;
        return computerChoice   ;
    }

    var runGameWithHtmlInput = function () {

        var inputHtml = document.getElementById("1")
        var userChoice = inputHtml.value

        showText(userChoice, "usersays", "user")      ;
        computerChoiceFunction()
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            compare(userChoice, computerChoiceFunction())  }
            else {
            showText("Only rock, paper and scissors can play!", "gameresult", "Judge")}
        }


