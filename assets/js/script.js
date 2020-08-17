// var characters
number = ["0","1","2","3","4","5","6","7","8","9"]
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var Options;

window.onload = alert("Hello! Click 'Generate password' to Begin!");

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    Passwrd = generatePassword();
    document.getElementById("password").placeholder = Passwrd;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("Password Must Be Within The Parameters of 8-128"));
    // First if statement for user validation 
    if (!enter) {
        alert("Please Give A Value Within the Parameters");
    } else if (enter < 7 || enter > 129) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Would You Like the Password to Contain Numbers?");
    specialChar= confirm("Would You Like The Password to Contain Special Characters?");
        confirmUppercase = confirm("Would You Like The Password to Contain Upper-Case Letters?");
        confirmLowercase = confirm("Would You Like The Password to Contain Lower-Case Letters?");
    };

    // Else if for 4 negative options
    if (confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        Options = alert("You must choose a criteria!");

    }
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        Options = specialChar.concat(number, alphaLower, alphaUpper);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        Options = specialChar.concat(number, alphaUpper);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        Options = specialChar.concat(number, alphaLower);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        Options = specialChar.concat(alphaLower, alphaUpper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        Options = number.concat(alphaLower, alphaUpper);
    }
    else if (confirmCharacter && confirmNumber) {
        Options = specialChar.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        Options = specialChar.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        Options = specialChar.concat(alphaUpper);
    }
    else if (confirmLowercase && confirmNumber) {
        Options = alphaLower.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        Options = alphaLower.concat(alphaUpper);

    } else if (confirmNumber && confirmUppercase) {
        Options = number.concat(alphaUpper);
    }
    else if (confirmCharacter) {
        Options = specialChar;
    }
    else if (confirmNumber) {
        Options = number;
    }
    else if (confirmLowercase) {
        Options = alphaLower;
    }
    else if (confirmUppercase) {
        Options = alphaUpper;
    };

    var password = [];
 
    for (var i = 0; i < enter; i++) {
        var pickOptions = Options[Math.floor(Math.random() * Options.length)];
        password.push(pickOptions);
    }

    var Passwrd = password.join("");
    UserInput(Passwrd);
    return Passwrd;
}
function UserInput(Passwrd) {
    document.getElementById("password").textContent = Passwrd;

}
