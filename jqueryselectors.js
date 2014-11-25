// Write a single line of jQuery that selects the div with Item 2
$('.item active')


// Write a single line of jQuery that selects the form element's second text box.
$('.new-item').last()

// // In the browser's JavaScript console, write one line of jQuery that grabs the value of
// the input box that's prefilled with Mitch Thomson. It should return the string "Mitch Thomson"

$('.name').val();

// In the browser's JavaScript console, write one line of jQuery
// // that grabs the value of the input box that's prefilled with Mitch is $19.
// // It should return the string "Mitch is $19"

$('.price').val();



// Write one line of jQuery that listens for the submit event on the form and responds by
// console logging the value of the input box that's prefilled with "Mitch is $19".
// The browser's JavaScript console should log "Mitch is $19" every time the submit button is pressed.

$('form.new-item').on('submit', function (e) {
  e.preventDefault();

  var newItemName = $('.price', this).val();
  console.log('You entered:', newItemName);
});


// Write one line of jQuery that adds "Buy one, Get one!!" to the end of the second item div.
$('.item.active').append('<p>Buy One, Get One!!</p>');


// Write one line of jQuery that removes the price from Item 3 (The div with class price should
//   be removed from Item 3)

$('.price:last').remove();


// Write one line of jQuery that appends the div below to Item 3:
// <div class="price">$121</div>

$('.item:last').append('$121');


// Write one line of jQuery that changes the width of the first item div to 60px,
// then changes the font size of its item price to 25px.

$('.item:first').css("width", "60px").css("font-size", "25px");

// Write one line of jQuery that changes the font size of the input box prefilled with Mitch
// to 30px, then changes its parent container's background color to lime.

$('.name').css("font-size", "30px").css("background-color","lime")

// Write one line of jQuery that changes the background color of the body tag to teal,
// then font-size of all Item text (e.g. Item 1, Item 2, etc) to 15px, then height
// of all their parent containers to 60px.

$('body').css("background-color", "teal")
$('.item').css("font-size", "15px")



