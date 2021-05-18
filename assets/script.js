


var pLength = prompt ("Password length? (Must be between 8 and 120 characters)", "");
if (pLength < 8 || ask > 120 ){
      alert("Length must be between 8-120 characters")
  };

if (pLength >= 8 || pLength <= 120){
var upperCase = confirm("Include uppercase letters?");
var lowerCase = confirm("Include lowercase letters?");
var numbers = confirm("Include numbers?");
var symbols = confirm("Include symbols?");
};

var generateBtn = document.querySelector(".generate");

var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

var passwordText = document.getElementById("password");
var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  var characters = alpha;
  
  passwordTxt.value = generatePassword(length.value, characters);
};

function generatePassword (length, characters); {
  var password = "";
  for (var i = 0; i < length; i++) {
    password = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};