// Initializer
var current = 0;
$(document).ready(function() {
// Target number randomizer (initial)
let targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
$('#target').html(targetNumber); 
// Current Value 

// Array containing four different crystal pictures
let picOptions = ['assets/images/blue.jpeg','assets/images/green.jpeg', 'assets/images/orange.jpeg', 'assets/images/purple.jpeg',];
// Looping through index 0-3 to append crystal pic and assign random value 1-12
for (i=0; i < picOptions.length; i++) {
    var imageCrystal = $('<img>');
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", picOptions[i]);
    imageCrystal.attr('data-crystalvalue', Math.floor(Math.random()* (12-1+1))+1);
    $("#notTaken").append(imageCrystal);
}
// When you click a crystal, it will add its value to your current score
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    current += crystalValue;
    $("#current").html(current);
})

});
