//create reset function
//reset when player wins or loses games
//reset will generate a new random target number and new values for each of the crystals



function reset() {
    targetNumber= [Math.round(Math.random()*100 + 19)];
    totalScore = 0; 
    setimagevalues();
}

let totalScore = 0; 

//need to generate random target number between 19-120
let targetNumber = [Math.round(Math.random()*100 + 19)];

//need to generate random value for each crystal between 1-12

/*$(crystalValue).each(function(i) {
    crystalValue2=crystalValue[i];
})*/

function setimagevalues() {
$(".crystal-image").each(function (i) {
   let crystalValue=[Math.round(Math.random()*10 + 2)];  
    $(this).attr("data-crystalValue", crystalValue);   
})

}

setimagevalues();




$(".crystal-image").on("click", function() {
    console.log("clicked image");
    totalScore += ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(this);
    console.log(totalScore);    
});


//display target number on page
$("target-number").html("Target Number: " + targetNumber);
console.log(targetNumber);



//value is hidden from player until crystal clicked

//add value of crystal clicked to total score





//if total score == to target add point to wins
//if total score > than target number update losses

if (totalScore === targetNumber) {
    alert("you win!");
    wins++;
    reset();
} else if (totalScore >= targetNumber) {
    alert("You lose!");
    losses++;
    reset();
}




//Display wins on page
//Display losses
//Display target number
















