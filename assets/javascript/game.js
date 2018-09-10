$(document).ready(function() {
var wins = 0;
var losses = 0;
var remain = 10;
var choices = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

];
var compChoice = choices[Math.floor(Math.random() * choices.length)]
var answer = compChoice;
var wShow = document.getElementById("w");
var lShow = document.getElementById("l");
var rShow = document.getElementById("r");
var gShow = document.getElementById("iGuess");

console.log("C: " + compChoice);

document.onkeyup = function (_event) {

    var userGuess = _event.key;
    
    if (userGuess == "a" || userGuess == "b" || userGuess == "c" || userGuess == "d" || userGuess == "e" || userGuess == "f" || userGuess == "g" || userGuess == "h" || userGuess == "i" || userGuess == "j" ||
        userGuess == "k" || userGuess == "l" || userGuess == "m" || userGuess == "n" || userGuess == "o" || userGuess == "p" || userGuess == "q" || userGuess == "r" || userGuess == "s" || userGuess == "t" ||
        userGuess == "u" || userGuess == "v" || userGuess == "w" || userGuess == "x" || userGuess == "y" || userGuess == "z") {
            console.log("g: " + userGuess)
        if (userGuess == compChoice) {

            alert("Correct! The letter was " + answer + " !");
            wins++;
            wShow.textContent = wins;
            console.log("w " + wins);
            // reset
            compChoice = choices[Math.floor(Math.random() * choices.length)];
            remain = 10;
            rShow.textContent = remain;
            gShow.textcontent = "No Guesses Yet.";
        }

        else {
            // display guess
            remain--;
            rShow.textContent = remain;
            var nGuess = $("<p>");
            nGuess.text(userGuess);
            $("#iGuess").append(nGuess);
            console.log("r " + remain);

            if (remain === 0) {

                rShow.textContent = remain;
                alert("So close! The letter was " + answer + " !");
                losses++;
                lShow.textContent = losses;
                console.log("l " + losses);
                // reset
                compChoice = choices[Math.floor(Math.random() * choices.length)];
                remain = 10;
                rShow.textContent = remain;
                gShow.textcontent = "No Guesses Yet.";
            };
        };

    }

    else {
        alert("Invalid Input!");
    };

};
})