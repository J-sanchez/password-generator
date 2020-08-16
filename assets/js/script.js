// Passwrod Generator 8-128 Characters

//Variables
var Length = "";
var SpecialCharacter;
var LowerCase;
var UpperCase;
var NumericalCharacters;

// var characters
var number = ["0","1","2","3","4","5","6","7","8","9"]
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Amount of Characters
function generatePassword() {
  alert("Password Must Be Between The Parameters of 8-128")
  var Length = (prompt("How Many Characters Would You like Your Password to Be?"));
}

while(Length <= 7 || Length >= 129 );{
  var Length = (prompt("How Many Characters Would You Like your Password to Be?"));
}

// Tell User How Many Characters the Password will have
alert('Your New Password WILL Contain $(Length) Characters');

// Password Character List
var SpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var NumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var LowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var UpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  // Loop If Answers 
  while(UpperCase === false && LowerCase === false && SpecialCharacter === false && NumericCharacter === false) {
    alert("You must choose at least one parameter");
    var SpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var NumericCharacter = confirm("Click OK to confirm if you would like to include numerbers");    
    var LowerCase = confirm("Click OK to confirm if you would like to include lowercase letters");
    var UpperCase = confirm("Click OK to confirm if you would like to include uppercase letters");   
} 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
