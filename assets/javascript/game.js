// Initializer
$(document).ready(function() {
// Target number randomizer (initial)
let targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
$('#target').html(targetNumber); 
// might need to come back to this but we sees 

// Array containing four different crystal pictures
let picOptions = ['assets/images/blue.jpeg','assets/images/green.jpeg','assets/images/orange.jpg','assets/images/purple.jpeg',];
// Looping through index 0-3 to append crystal pic and assign attributes
for (i=0; i < picOptions.length; i++) {
    var imageCrystal = $('<img>');
    imageCrystal.addClass(".crystal-image");
    imageCrystal.attr("src", picOptions[i]);
    imageCrystal.attr('data-crystalvalue', Math.floor(Math.random()* (12-1+1))+1);
    $('#empty').append(imageCrystal);
}
});
