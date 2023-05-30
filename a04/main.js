var errors = document.getElementById("err");
var errorMsg = "";

function validateForm() {
    errorMsg = "";
    var validFirstName = validateText("FirstName", 20);
    var validLastName = validateText("LastName", 50);
    var validEMail = validateEmail();
    var validUser = validateText("Username", 12);
    var validPassword = validateText("Password", 7);
    var validPhone = validateNums("Phone", 20);
    var validAddress = validateText("Address", 200);
    var validCountry = validateDropdowns("Country");
    var validState = (validateDropdowns("State"));
    var validZipCode = (validateNums("ZipCode", 5));





    showError(errorMsg);
    if (validFirstName && validLastName && validEMail && validUser && validPhone && validAddress && validCountry && validState && validZipCode) {
        alert("Form validated!");
        window.location.replace("https://itdeffy.github.io/BCRepo1/a04/thanks.html")
    }
}

function showError(errMsg) {
    errors.innerText = errMsg;
}

function validateText(field, max) {
    var curField = document.getElementById(field).value;
    if (curField === null || curField === "" | curField.length > max) {
        errorMsg += "The " + field + " field can't be empty but must be less than " + (max+1) + " characters long! ";
        return false;
    }
    return true;
}

function validateNums(field, max) {
    var curField = document.getElementById(field).value;
    var numbers=/^[0-9]+$/;
    if (field === "ZipCode" && document.getElementById("Country").value != "USA") {
        if (curField.length != 0) {
            errorMsg += "dont add a zip code since you didn't select USA as the country! ";
            return false;
        }
        return true;
    } else if (curField === null || curField === "" | curField.length > max || !curField.match(numbers)) {
        errorMsg += "The " + field + " field can't be empty but must be less than " + (max+1) + " characters long and can only contain numbers an _ or - characters! ";
        return false;
    }
    return true;
}

//checks the dropdowns and only asks for the state if USA was chosen for the country
function validateDropdowns(field) {
    var curField = document.getElementById(field).value;
    if (field === "State") {
        if (document.getElementById("Country").value === "USA") {
            if (curField === "000") {
                errorMsg += "You need to pick a choice for the " + field + " field! ";
                return false;
            }
        } else if (curField != "000") {
            errorMsg += "Don't select a state since you didn't choose USA as the country";
            return false;
        }
    }
    else if (curField === "000") {
        errorMsg += "You need to pick a choice for the " + field + " field! ";
        return false;
    }
    return true;
}

function validateEmail() {
    var curField = document.getElementById("EMail").value;
    var atpos = curField.indexOf("@");
    var dotpos = curField.lastIndexOf(".");
    //makes sure the @ and . are in the email and there is text between them meaning they arent at the ends or beginnings of the email
    if (atpos < 1 || dotpos < atpos+2 || dotpos+2>=curField.length) {
        errorMsg += "The email is invald! Check to make sure you enetered it correctly! ";
        return false;
    }
    return true;
}