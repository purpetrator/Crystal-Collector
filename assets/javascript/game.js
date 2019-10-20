var totalScore = 0;
var wins = 0;
var losses = 0;
var targetNumber = 0;

function randomizingFunction() {
  // This will randomly choose targetNumber (between 19 and 120) and set it to our targetNumber
  var random = Math.floor(Math.random() * 120) + 19;
  console.log("Random number:" + random);
  targetNumber = random;

  // Assign random numbers to crystals
  var ranCrystal1 = Math.floor(Math.random() * 12) + 1;

  var ranCrystal2 = Math.floor(Math.random() * 12) + 1;

  var ranCrystal3 = Math.floor(Math.random() * 12) + 1;

  var ranCrystal4 = Math.floor(Math.random() * 12) + 1;

  totalScore = 0;

  // This is getting the span of the Goal Number and setting it to the text of the variable
  $("#goal-number").text(targetNumber);
  $("#score").text(totalScore);

  $("#crystal1").attr("value", ranCrystal1);
  $("#crystal2").attr("value", ranCrystal2);
  $("#crystal3").attr("value", ranCrystal3);
  $("#crystal4").attr("value", ranCrystal4);
}

randomizingFunction();

function winCondition() {
  // Setting up a WIN: If total score matches the goal number, you are alerted of a win
  if (totalScore === targetNumber) {
    ////
    alert("You win!");
    wins += 1;
    $("#wins-text")
      .empty()
      .append(wins);
    randomizingFunction();
  } else if (totalScore >= targetNumber) {
    // Then they are alerted with a loss.
    alert("You lose!!");
    losses += 1;
    $("#losses-text")
      .empty()
      .append(losses);
    randomizingFunction();
  }
}

// Creating an on-click event that responds when user clicks a crystal
$(document).on("click", ".crystal-image", function() {
  console.log($(this).attr("value"));
  totalScore += parseInt($(this).attr("value"));

  console.log(totalScore);

  // Replace score span with updated total score
  $("#score").text(totalScore);

  winCondition();
});
