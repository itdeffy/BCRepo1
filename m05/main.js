var table;             // Unit of table
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

//asks prompt on page load
table = prompt('type a number from 1 to 10');

//if number is outside of the bounds then it gats set to a max or min value
if (table < 1) {
    table = 1;
} else if (table > 10) {
    table = 10;
}
//does the method
multiply();
//removed the addition code block
function multiply() {
  // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;

    }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;