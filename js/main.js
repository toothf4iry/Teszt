// mivel ez a sor legkivul van, a this=window objektumnak a resze.
// Mindig ugyelni kell, minel kevesebb kodresz legyen a window-ban, mert nagyon veszelyes:
// - konnyen feltorheto a kod (pl. csalas celjabol)
// - nev utkozes lehet, igy a kodok egymast irjak felul.

// ez a sor blokkolja a kod tovabbi vegrehajtasat, ovatosan banni az ilyenekkel! debuggerben meg tudod nezni
var userChoice = prompt("Do you choose rock, paper or scissors?");


// function computerChoiceFunction(){
// ==
// var computerChoiceFunction = function () {
//
// A 2. megoldast altalaban akkor hasznaljuk, ha ki akarjuk fejezni hogy valtozoba akarjuk rakni a fuggvenyt.
// egyebkent mindketto helyes

// ez okes
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

// ez okes, majd szepitjuk
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


// ez a kod az elso sorhoz tartozik logikailag, azaz a prompt-hoz
// epp ezert celszeru lenne 1 fuggvenybe rakni oket, es body onload -kor elinditani.
if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    compare(userChoice, computerChoiceFunction())
} else {
    console.log("Only rock or paper or scissors can play!")
}
