  // Let's start by grabbing a reference to the <span> below.
  var userChoice = document.getElementById("user-choice");
  var compChoice = document.getElementById("comp-choice");
  var showTies = document.getElementById("ties");
  var showWins = document.getElementById("wins");
  var showLosses = document.getElementById("losses");


  var ties = 0;
  var wins = 0;
  var losses = 0;
  // Next, we give JavaScript a function to execute when onkeyup event fires.
  document.onkeyup = function(event) {
    
    var userKey = event.key;
    var choices = ["r", "s", "p"];
    
    if (userKey === "r" || userKey === "s" || userKey === "p"){
      userChoice.textContent = event.key;
      var compResult = choices[parseInt(Math.random()*choices.length)];
      console.log(compResult);
      compChoice.textContent = compResult;

      if(userKey === compResult){
        ties++;
        showTies.textContent = ties;
      }
      else if (userKey === "r" && compResult === "p" || userKey === "s" && compResult === "r" || userKey === "p" && compResult === "s"){
        losses++;
        showLosses.textContent = losses;
      }
      else {
        wins++;
        showWins.textContent = wins;
      }
    }
  };