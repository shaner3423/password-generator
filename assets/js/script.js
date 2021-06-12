// Assignment Code
var generateBtn = document.getElementById("generate");

// alert('Welcome to the password generator!');
// alert("To keep your information safe, your password must contain the following criterias.");
// alert("At least 8 characters (and up to 128 characters).");
// alert("At least two of the following: uppercase, lowercase, numeric, or special characters.")
// alert("When you are ready, please click 'OK' to continue.");

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
                          //  "asdasd"  "ASADSDASD" "" "" 8
 
  var password = '';
  var passwordCharacterChoices = lower + upper + number + symbol; 
  console.log(passwordCharacterChoices);

  for (var i = 0; i < length; i++) {
    // generate random character from passwordChacaterChoices
    var randomCharacterPosition = Math.floor(Math.random() * passwordCharacterChoices.length);

    var randomCharacter = passwordCharacterChoices [
      randomCharacterPosition
    ]
    // add that character to the password
    console.log(password);
    console.log(randomCharacter);
    password = password + randomCharacter;

  }

  return password;

}


// Write password to the #password input
function writePassword() {

  var lower = "";
  var upper = "";
  var symbol = "";
  var number = "";


  var length = window.prompt('How long do you want your password to be?');
  if ( length < 8 || length > 128 ) {
    alert('Please choose a number between 8-128.');
    writePassword();
  } 
  if (window.confirm("Do you want numbers?")) {
    number = "0123456789";
    // number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  if (window.confirm("Do you want lowercase letters?")) {
    lower = "abcdefghijklmnopqrstuvwxyz"; 
    // lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  if (window.confirm("Do you want uppercase letters?")) {
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  if (window.confirm("Do you want sysmbols?")){
    symbol = "!@#$%^&*(){}[]=></";
    // stmbol = symbols[Math.floor(Math.random() * symbols.length)];
  }

  var password = generatePassword(lower, upper, number, symbol, length);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
