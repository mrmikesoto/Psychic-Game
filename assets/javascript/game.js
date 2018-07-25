  // Let's start by grabbing a reference to the <span> below.

  var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var usedUp = [];
  var compResult = choices[parseInt(Math.random()*choices.length)];
  console.log(compResult);

  // var totalGuesses = 10;
  var guesses = 10;
  var wins = 0;
  var losses = 0;
  // Next, we give JavaScript a function to execute when onkeyup event fires.
  document.onkeyup = function(event) {
    var totalGuesses = document.getElementById("guesses");
    var userChoice = document.getElementById("user-guess");;
    var showWins = document.getElementById("wins");
    var showLosses = document.getElementById("losses");
    var alreadyUsed = document.getElementById("used");
    var winLose = document.getElementById("winLose");
    var userKey = event.key;
    
    
      if (choices.indexOf(userKey) >= 0 && usedUp.indexOf(userKey) < 0){      
        usedUp.push(userKey);
        alreadyUsed.textContent = "";
        guesses--;
        totalGuesses.textContent = guesses;
        if(winLose.textContent === "You Win! Try Again " || winLose.textContent === "You Lose, Try Again "){
          winLose.textContent = "";
          userChoice.textContent = "";
          userChoice.textContent += userKey + ", ";
        }
        else {
          userChoice.textContent += userKey + ", ";
        }
      
        if(userKey === compResult){
          wins++;
          showWins.textContent = wins;
          winLose.textContent = "You Win! Try Again ";
          compResult = choices[parseInt(Math.random()*choices.length)];
          console.log(compResult);
          guesses = 10;
          usedUp = [];
          return;
        }
                
        if(guesses <= 0) {
          losses++;
          showLosses.textContent = losses;
          winLose.textContent = "You Lose, Try Again ";
          compResult = choices[parseInt(Math.random()*choices.length)];
          console.log(compResult);
          guesses = 10;
          usedUp = [];
          return;
        }
      }
      else if(choices.indexOf(userKey) < 0){
        alreadyUsed.textContent = "That is not a valid character";
      }
      else {
        alreadyUsed.textContent = "Oops! You already used the letter: " + userKey;
      }
    
    
  };