$(document).ready(function() {
    $('#button1').click(function(){
      $('#results').fadeIn('slow') ;

    } );
})      ;




var showText = function (x, y, z) {
    var resultElem = document.getElementById(y);
    resultElem.innerHTML = z + " says: " + "<br/>" + "<b>" + x + "</b>";
}


var showWhatWinsFunction = function (zs) {
    showText(zs + " wins", "gameresult", "Judge");
}
var showWhoWinsFunction = function (q) {
    showText(q + " wins", "whowonresult", "Judge")
}

var compare = function (choice1, choice2) {
    var winner = {};
    // hogy lehetne a winner-t kivezetni innen? return?

    if (choice1 === choice2) {
        showText("Tie! Choose again!", "gameresult", "Judge")
    }

    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            winner.what = "rock";
            winner.who = "user"
            showWhatWinsFunction(winner.what)
            showWhoWinsFunction(winner.who)
        }

        else {
            winner.what = "paper";
            winner.who = "computer"
            showWhatWinsFunction(winner.what)
            showWhoWinsFunction(winner.who)
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            winner.what = "paper";
            winner.who = "user"
            showWhatWinsFunction(winner.what)
            showWhoWinsFunction(winner.who)
        }
        else {
            winner.what = "scissors";
            winner.who = "computer"
            showWhatWinsFunction(winner.what)
            showWhoWinsFunction(winner.who)
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            winner.what = "rock";
            winner.who = "computer"
            showWhatWinsFunction(winner.what)
            showWhoWinsFunction(winner.who)
        }
        else {
            winner.what = "scissors";
            winner.who = "user"
            showWhatWinsFunction(winner.what)
            showWhoWinsFunction(winner.who)

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
    showText(computerChoice, "computersays", "Computer");
    return computerChoice;
}

var runGameWithHtmlInput = function () {

    var inputHtml = document.getElementById("1")
    var userChoice = inputHtml.value

    showText(userChoice, "usersays", "User");

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        computerChoiceFunction();
        compare(userChoice, computerChoiceFunction())
    }
    else {
        showText("Only rock, paper and scissors can play!", "gameresult", "Judge");
        showText(":s", "computersays", "Computer") ;
        showText(">:|", "whowonresult", "Judge")
    }
}




