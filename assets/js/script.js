// Assignment Code
var generateBtn = document.querySelector("#generate");

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
