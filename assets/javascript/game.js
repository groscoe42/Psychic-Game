$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var remain = 10;
  var choices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var compChoice = choices[Math.floor(Math.random() * choices.length)];
  var answer = compChoice;
  var wShow = document.getElementById("w");
  var lShow = document.getElementById("l");
  var rShow = document.getElementById("r");
  var tries = [];

  console.log("C: " + compChoice);

  document.onkeyup = function(event) {
    var userGuess = event.key;
    tries.forEach(function(element){
        if (userGuess === element){
            alert("You already guessed that one!");
        }
    })
    //shortened using regular expression
    if (/^[A-Za-z]+$/.test(userGuess)) {
      console.log("g: " + userGuess);


      if (userGuess == compChoice) {
        alert("Correct! The letter was " + answer + " !");
        wins++;
        wShow.textContent = wins;
        console.log("w " + wins);
        // reset
        compChoice = choices[Math.floor(Math.random() * choices.length)];
        answer = compChoice;
        remain = 10;
        rShow.textContent = remain;
        $("#iGuess").empty();
        tries = [];
        console.log("C: " + compChoice);
        
      } else {
        // display guess
        remain--;
        rShow.textContent = remain;
        $("#iGuess").append(userGuess + ", ");
        console.log("r " + remain);
        tries.push(userGuess);
        console.log(tries)
        if (remain === 0) {
          rShow.textContent = remain;
          losses++;
          lShow.textContent = losses;
          window.requestAnimationFrame(() => {
            setTimeout(() => {
              alert("So close! The letter was " + answer + " !");
              console.log("l " + losses);
              // reset
              compChoice = choices[Math.floor(Math.random() * choices.length)];
              remain = 10;
              rShow.textContent = remain;
              $("#iGuess").empty();

              console.log("C: " + compChoice);
            });
          });
        }
      }
    } else {
      alert("Invalid Input!");
    }
  };
});
