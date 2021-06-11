// Assignment Code
var generateBtn = document.querySelector("#generate");

window.alert('Welcome to the password generator!');
window.alert("To keep your information safe, your password must contain the following criterias.");
window.alert("At least 8 characters (and up to 128 characters).");
window.alert("At least one of the following: uppercase, lowercase, numeric, or special characters.")
window.alert("When you are ready, please click 'OK' to continue.");


function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getLower());

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getUpper());

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getNumber());

function getSymbol() {
  symbols = '!@#$%^&*(){}[]=></'
  return symbols [Math.floor(Math.random() * symbols.length)];
}
console.log(getSymbol());



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  password = generatePassword

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
