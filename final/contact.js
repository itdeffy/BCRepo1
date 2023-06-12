var valid = false;
var errorMsg = "";

function validateForm() {
    errorMsg = "";
    var validName = validateText("name", 1000);
    var validEmail = validateEmail();
    var validMessage = validateText("message", 2500)

    if (validName & validEmail & validMessage) {
        window.location.replace("thankyou.html")
    } else {
        alert(errorMsg);
    }
}



function validateEmail() {
    var curField = document.getElementById("email").value;
    var atpos = curField.indexOf("@");
    var dotpos = curField.lastIndexOf(".");
    //makes sure the @ and . are in the email and there is text between them meaning they arent at the ends or beginnings of the email
    if (atpos < 1 || dotpos < atpos+2 || dotpos+2>=curField.length) {
        errorMsg += "The email is invald! Check to make sure you enetered it correctly! ";
        return false;
    }
    return true;
}

function validateText(field, max) {
    var curField = document.getElementById(field).value;
    if (curField === null || curField === "" | curField.length > max) {
        errorMsg += "The " + field + " field can't be empty but must be less than " + (max+1) + " characters long! ";
        return false;
    }
    return true;
}