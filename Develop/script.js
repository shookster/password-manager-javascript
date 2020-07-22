// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Make function that generates password
function generatePassword() {
  var length = prompt(
    "How many characters would you like in your password? (8 - 128)"
  );
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter number between 8 and 128");
    var length = prompt(
      "How many characters would you like in your password? (8 - 128)"
    );

    var upper = confirm("Use uppercase?");
    var lower = confirm("Use lowercase?");
    var numbers = confirm("Use numbers?");
    var symbols = confirm("Use symbols?");
  }
  if (!upper && !lower && !numbers && !symbols) {
    alert("Please select one or more character types.");
    var upper = confirm("Use uppercase?");
    var lower = confirm("Use lowercase?");
    var numbers = confirm("Use numbers?");
    var symbols = confirm("Use symbols?");
  }

  var password = "";
  var allowed = {};
  if (upper) password += allowed.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower) password += allowed.lower = "abcdefghijklmnopqrstuvwxyz";
  if (numbers) password += allowed.numbers = "1234567890";
  if (symbols) password += allowed.symbols = "!@#$%^&*()-_=+";

  for (var i = 0; i >= length; i++) {
    randomizedPassword =
      randomizedpassword + values.charAt(Math.floor(Math.random() * length));
  }
  return randomizedPassword;
}
// let values =
//  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()/?-_';

// let password = ''
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
