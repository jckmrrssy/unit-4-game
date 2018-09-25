
// Initializer 
$(document).ready(function() {

var current = 0;  
// Target number randomizer (initial)
var targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
$('#target').html(targetNumber); 
// Current Value 

// Array containing four different crystal pictures
var picOptions = ['assets/images/blue.jpeg','assets/images/green.jpeg', 'assets/images/orange.jpeg', 'assets/images/purple.jpeg',];
// Looping through index 0-3 to append crystal pic and assign random value 1-12
for (i=0; i < picOptions.length; i++) {
    var imageCrystal = $('<img>');
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", picOptions[i]);
    imageCrystal.attr('data-crystalvalue', Math.floor(Math.random()* (12-1+1))+1);
    $("#notTaken").append(imageCrystal);
}


// Declaring win/loss variables
var wins = 0;
var losses = 0;

// When you click a crystal, it will add its value to your current score
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    current += crystalValue;
    $("#current").html(current);
    // Win - lose conditions
    if (current === targetNumber) {
        wins = wins + 1;
        $("#wins").text(wins);
        reset ();
    }
    else if (current > targetNumber) {
        losses = losses + 1;
        $("#losses").text(losses);
        reset (); 
    }


})
// Function reset - new random target, zeroes current, randomizes image values by replacing and appending new images
function reset () {
    targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
    current = 0;
    $("#current").html(current);
    $("#target").html(targetNumber);
    $("#notTaken").empty();
    for (i=0; i < picOptions.length; i++) {
        imageCrystal = $('<img>');
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", picOptions[i]);
        imageCrystal.attr('data-crystalvalue', Math.floor(Math.random()* (12-1+1))+1);
        $("#notTaken").append(imageCrystal);
    };
    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        current += crystalValue;
        $("#current").html(current);
        // Win - lose conditions
        if (current === targetNumber) {
            wins = wins + 1;
            $("#wins").text(wins);
            reset ();
        }
        else if (current > targetNumber) {
            losses = losses + 1;
            $("#losses").text(losses);
            reset (); 
        }
    
    
    })
}

});


