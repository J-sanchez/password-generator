// var characters
number = ["0","1","2","3","4","5","6","7","8","9"]
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function generatePass(){
    var confirmLength = "";
var confirmSpecialCharacter;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericalCharacters;
var evryChar = [];

window.onload = alert("Hello! Click 'Generate' for Your New Password!")

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

var confirmLength = prompt("How many characters would you like your password to be?");

if(confirmLength <8 || confirmLength > 128){
    alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
}

// Confirm the rest of character conditions

else{
    if(confirm("Would you like your password to contain upper case letters?")){
        Array.prototype.push.apply(evryChar, confirmUpperCase);
    }

    if(confirm("Would you like your password to contain lower case letters?")){
        Array.prototype.push.apply(evryChar, confirmLowerCase);
    }

    if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(evryChar, confirmNumericalCharacters);
    }

    if(confirm("Would you like your password to contain symbols?")){
        Array.prototype.push.apply(evryChar, confirmSpecialCharacter);
    }

    if(confirmSpecialCharacter.length===0){
        alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
    }

// Run for loop to use confirmed information and generate password as a result

    else{
        for(var i=0; i<confirmLength; i++){
            var random = Math.floor(Math.random()*confirmSpecialCharacter.length);
            resultPass += confirmSpecialCharacter[random];
        }
    }
    }

// Display the result

    document.getElementById("password").innerHTML = resultPass;
}

// Bonus! function to copy password to clipboard

function copyPass(){

document.querySelector("textarea").select();
document.execCommand("Copy");
alert("Password copied to clipboard!");
}

