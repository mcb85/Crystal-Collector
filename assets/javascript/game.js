//create reset function
//reset when player wins or loses games
//reset will generate a new random target number and new values for each of the crystals
//total score will reset

function reset() {
    targetNumber = Math.round(Math.random() * 100 + 19);
    totalScore = 0;
    $("#total-score").html("<h2>Your Total Score is: " + totalScore + "<h2>")
    setimagevalues();
    //display target number on page
    $("#target-number").html("<h2>Target Number: " + targetNumber + "<h2>");
}

let totalScore = 0;
let wins = 0;
let losses = 0;


//need to generate random target number between 19-120
let targetNumber = Math.round(Math.random() * 100 + 19);

//need to generate random value for each crystal between 1-12
function setimagevalues() {
    $(".crystal-image").each(function (i) {
        let crystalValue = Math.round(Math.random() * 10 + 2);
        $(this).attr("data-crystalValue", crystalValue);
    })
}

setimagevalues();


//value is hidden from player until crystal clicked

$(".crystal-image").on("click", function () {
    //add value of crystal clicked to total score
    totalScore += parseInt(($(this).attr("data-crystalValue")));

    //display total score on page
    $("#total-score").html("<h2>Your Total Score is: " + totalScore + "<h2>");
    //if total score === to target, add point to wins
    if (totalScore === targetNumber) {
        wins++;
        //Display wins on page
        $("#wins").html("<strong><p>Wins: " + wins + "</p></strong>");
        function win() {
            alert("You win!");
            reset();
        }
        setTimeout(win, 500);
        //if total score > than target number update losses
    } else if (totalScore >= targetNumber) {
        losses++;
        //Display losses
        $("#losses").html("<strong><p>Losses: " + losses + "</p></strong>");
        function lose() {
            alert("You lose!");
            reset();
        }
        setTimeout(lose, 500);
    }
});

$("#target-number").html("<h2>Target Number: " + targetNumber + "<h2>");
$("#total-score").html("<h2>Your Total Score is: " + totalScore + "<h2>");
$("#wins").html("<strong><p>Wins: " + wins + "</p></strong>");
$("#losses").html("<strong><p>Losses: " + losses + "</p></strong>");































