
    var showText = function(x,y,z){
    var resultElem = document.getElementById(y);
    resultElem.innerHTML =  z + " says: " + "<b>" + x + "</b>";  }


    var showWhoWinsFunction = function (zs){
        showText(zs + " wins", "gameresult", "Judge");
    }

    var compare = function(choice1, choice2) {
         var winner = {}  ;
        // hogy lehetne a winner-t kivezetni innen? return?

        if (choice1 === choice2) {
            showText("Tie! Choose again!", "gameresult", "Judge" )
        }

        else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                winner.what="rock";
                showWhoWinsFunction(winner.what)
            }

            else {
               winner.what="paper";
                showWhoWinsFunction(winner.what)
            }
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                winner.what="paper";
                showWhoWinsFunction(winner.what)
            }
            else {
               winner.what="scissors";
                showWhoWinsFunction(winner.what)
            }
        }
        else if (choice1 === "scissors") {
            if (choice2 === "rock") {
               winner.what="rock" ;
                showWhoWinsFunction(winner.what)
            }
            else {
                winner.what="scissors";
                showWhoWinsFunction(winner.what)

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

        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            computerChoiceFunction();
            compare(userChoice, computerChoiceFunction())  }
            else {
            showText("Only rock, paper and scissors can play!", "gameresult", "Judge")}
        showText(" ", "computersays", "computer")
        }


