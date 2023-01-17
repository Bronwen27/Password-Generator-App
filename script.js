

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
 // Asks user for input 
  let length = parseInt(
  prompt("How many Characters would you like in your password? Please choose between 10 and 64")
 )
 // Incase user uses any other characters other than numbers  
 if(isNaN(length) === true){
  alert(`Please provide password length between 10 and 64 as a number`);
  return;
 }

 // Incase user does not pick correct number of characters.
 if (length < 10) {
  alert(`Password must be at least 10 characters`);
  return;
 }

 if (length > 64){
  alert(`Password must be less than 65`);
  return;
 }

 let hasSpecialCharacters = confirm(
  "Click OK to confirm that the password must contain special characters"
 )

 let hasNumericCharacters = confirm(
  "Click OK to confirm that the password must contain numeric characters"
 )

 let hasLowerCaseCharacters = confirm(
  "Click OK to confirm that the password must contain lowercase characters"
 )

 let hasUpperCaseCharacters = confirm(
  "Click OK to confirm that the password must contain uppercase characters"
 )
 
 //Run boolean on characters

if(hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCaseCharacters === false &&
  hasUpperCaseCharacters === false){
    alert(`Must select at least one character type`);
    return;
  }

  let getPasswordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  }

return getPasswordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
 let randomIndex = Math.floor(Math.random() * arr.length)
 let randomElement = arr[randomIndex];
 return randomElement;

}

// Function to generate password with user input
function generatePassword() {
 let options = getPasswordOptions();
 console.log(options);

 let result = []

 let possibleCharacters = []
 
 let guaranteedCharacters = []

 if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters))
 }
 if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters))
 }
 if(options.hasLowerCaseCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters))
 }
 if (options.hasUpperCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters))
 }

 console.log(possibleCharacters);

 for(let i = 0; i < options.length; i++) {
  var generatedNumbers = getRandom(possibleCharacters);
  console.log(generatedNumbers);
  result.push(generatedNumbers);
 }

 for(let i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
 }

console.log(result);
return result.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

