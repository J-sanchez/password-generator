// var characters
var number = ["0","1","2","3","4","5","6","7","8","9"]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumericalCharacters;

//Amount of Characters
function generatePassword() {
  alert("Press Generate for New Password")
}

while(confirmLength <= 7 || confirmLength >= 129 ) {
  alert("Password Must Be Between The Parameters of 8-128");
  var confirmLength = (prompt("How Many Characters Would You Like your Password to Be?"));
}

// Tell User How Many Characters the Password will have
alert(`Your Password Will Contain ${confirmLength} characters`);

// Password Character List
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var comfirmNumericalCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include confirmLowerCase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include confirmUpperCase characters");

var PassChar = []

 if (confirmSpecialCharacter && confirmNumericalCharacters && confirmLowerCase && confirmUpperCase) {

        PassChar = specialChar.concat(number, alphaUpper, alphaLower);
    }
    // Else if for 3 positive options
    else if (confirmSpecialCharacter && confirmNumericalCharacters && confirmLowerCase) {
        PassChar = specialChar.concat(number, alphaLower);
    }
    else if (confirmSpecialCharacter && confirmNumericalCharacters && confirmUpperCase) {
        PassChar = specialChar.concat(number, alphaUpper);
    }
    else if (confirmSpecialCharacter && confirmUpperCase && confirmUpperCase) {
        PassChar = specialChar.concat(alphaUpper, alphaLower);
    }
    else if (confirmNumericalCharacters && confirmUpperCase && confirmUpperCase) {
        PassChar = number.concat(alphaUpper, alphaLower);
    }
    // Else if for 2 positive options 
    else if (confirmSpecialCharacter && confirmNumericalCharacters) {
        PassChar = specialChar.concat(number);

    } else if (confirmSpecialCharacter && confirmUpperCase) {
        PassChar = specialChar.concat(alphaUpper);

    } else if (confirmSpecialCharacter && confirmUpperCase) {
        PassChar = specialChar.concat(alphaLower);
    }
    else if (confirmUpperCase && confirmNumericalCharacters) {
        PassChar = alpha.concat(number);

    } else if (confirmLowerCase && confirmUpperCase) {
        PassChar = alpha.concat(alphaLower);

    } else if (confirmNumericalCharacters && confirmUpperCase) {
        PassChar = number.concat(alphaLower);
    }
    // Else if for 1 positive option
    else if (confirmSpecialCharacter) {
        PassChar = specialChar;
    }
    else if (confirmNumericalCharacters) {
        PassChar = number;
    }
    else if (confirmUpperCase) {
        PassChar = alphaUpper;
    }
    // Created space variable to fill confirmUpperCase conversion
    else if (confirmLowerCase) {
        PassChar = space.concat(alphaLower);
    };

  