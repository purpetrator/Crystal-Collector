var totalScore = 0;
var wins = 0;
var losses = 0;
var targetNumber = 0;

// Here I'm creating a function that I will run each time the window loads and each time a win or loss happens

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

  // This is updating the HTML text of the score and goal number
  $("#goal-number").text(targetNumber);
  $("#score").text(totalScore);

  // This is assigning the random numbers generated in lines 15-18 to a new attribute (value) of each crystal
  $("#crystal1").attr("value", ranCrystal1);
  $("#crystal2").attr("value", ranCrystal2);
  $("#crystal3").attr("value", ranCrystal3);
  $("#crystal4").attr("value", ranCrystal4);
}

// I'm calling the randomizing function
randomizingFunction();

// I'm creating a function that will run when a win or loss occurs
function winCondition() {
  // Setting up a WIN: If total score matches the goal number, you are alerted of a win
  if (totalScore === targetNumber) {
    alert("You win!");
    // Wins increases by one and displays on the page
    wins += 1;
    $("#wins-text")
      .empty()
      .append(wins);
    // Numbers get reset and a new game starts
    randomizingFunction();
  } else if (totalScore >= targetNumber) {
    // Setting up a LOSS: Then they are alerted with a loss.
    alert("You lose!!");
    losses += 1;
    $("#losses-text")
      .empty()
      .append(losses);
    // Numbers get reset and a new game starts
    randomizingFunction();
  }
}

// Creating an on-click event that responds when user clicks a crystal
$(document).on("click", ".crystal-image", function() {
  // This is checking the value of the crystal that was clicked
  console.log($(this).attr("value"));

  // And increasing the total score by that value
  totalScore += parseInt($(this).attr("value"));

  console.log(totalScore);

  // Replace score span with updated total score
  $("#score").text(totalScore);

  winCondition();
});
