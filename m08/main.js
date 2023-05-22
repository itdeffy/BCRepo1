// Create a new element and store it in a variable.


function addItem() {
    //get the text input from the text box
    var item = document.getElementById("newItem").value
    //create list element
    var newEl = document.createElement('li');

    // set the text to be the text box input value
    var newText = document.createTextNode(item);

    // Attach the new text node to the new element.
    newEl.appendChild(newText);

    // Find the position where the new element should be added.
    var position = document.getElementsByTagName('ul')[0];

    // Insert the new element into its position.
    position.appendChild(newEl);
}