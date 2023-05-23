var errors = document.getElementById("err");
var errorMsg = "";

function validateForm() {
    errorMsg = "";
    var validFirstName = validateText("FirstName", 20);
    var validLastName = validateText("LastName", 50);
    var validEMail = false;
    var validUser = validateText("Username", 12);
    var validPassword = validateText("Password", 7);
    var validPhone = validateNums("Phone", 20);
    var validAddress = false;
    var validCountry = false;
    var validState = false;
    var validZipCode = validateNums("ZipCode", 10);






    showError(errorMsg);
    if (validFirstName && validLastName && validEMail && validUser && validPhone && validAddress && validCountry) {
        alert("Form validated!");
    }
}

function showError(errMsg) {
    errors.innerText = errMsg;
}

function validateText(field, max) {
    var curField = document.getElementById(field).value;
    if (curField == "null" || curFiled == "" | curField.length > max) {
        errorMsg += "The " + field + " field can't be empty but must be less than " + (max+1) + " characters long! ";
        return false;
    }
    return true;
}

function validateNums(field, max) {
    var curField = document.getElementById(field).value;
    var nums = "1234567890-_";
    if (curField == "null" || curFiled == "" | curField.length > max || !curField.match(nums)) {
        errorMsg += "The " + field + " field can't be empty but must be less than " + (max+1) + " characters long and can only contain numbers an _ or - characters!";
        return false;
    }
    return true;
}