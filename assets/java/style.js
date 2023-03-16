// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
generateBtn.addEventListener("click", function () {
    if (!document.querySelector("#password-length")) {
        var lengthDiv = document.createElement("div");
        var charTypeDiv = document.createElement("div");

        lengthDiv.innerHTML = "<label for='password-length'>Password Length:</label><input type='number' id='password-length' min='8' max='128' />";
        charTypeDiv.innerHTML = "<label for='password-characters'>Character Types:</label><input type='checkbox' id='password-characters-lowercase' value='lowercase' checked='checked'>Lowercase<input type='checkbox' id='password-characters-uppercase' value='uppercase' checked='checked'>Uppercase<input type='checkbox' id='password-characters-numbers' value='numbers' checked='checked'>Numbers<input type='checkbox' id='password-characters-special' value='special' checked='checked'>Special";

        var cardBody = document.querySelector(".card-body");
        cardBody.appendChild(lengthDiv);
        cardBody.appendChild(charTypeDiv);
    } else {
        writePassword();
    }
});
function generatePassword() {
    var length = document.querySelector("#password-length").value;
    var lowercase = document.querySelector("#password-characters-lowercase").checked;
    var uppercase = document.querySelector("#password-characters-uppercase").checked;
    var numbers = document.querySelector("#password-characters-numbers").checked;
    var special = document.querySelector("#password-characters-special").checked;

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    var charSet = "";
    if (lowercase) {
        charSet += lowercaseChars;
    }
    if (uppercase) {
        charSet += uppercaseChars;
    }
    if (numbers) {
        charSet += numberChars;
    }
    if (special) {
        charSet += specialChars;
    }

    var password = "";
    for (var i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return password;
}

// type 2
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to be? (Between 8-128 characters)");

    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Password length must be a number between 8-128 characters. Please try again.");
        return;
    }

    var lowercase = confirm("Would you like to include lowercase characters?");
    var uppercase = confirm("Would you like to include uppercase characters?");
    var numeric = confirm("Would you like to include numeric characters?");
    var special = confirm("Would you like to include special characters?");

    if (!lowercase && !uppercase && !numeric && !special) {
        alert("You must select at least one character type. Please try again.");
        return;
    }

    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericCharacters = "0123456789";
    var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    var characterList = "";

    if (lowercase) {
        characterList += lowercaseCharacters;
    }

    if (uppercase) {
        characterList += uppercaseCharacters;
    }

    if (numeric) {
        characterList += numericCharacters;
    }

    if (special) {
        characterList += specialCharacters;
    }

    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characterList.length);
        password += characterList[randomIndex];
    }

    return password;
}

generateBtn.addEventListener("click", writePassword);

// solution 3 

var generateBtn = document.querySelector("#generate");
//  stores the generate id  into the var generateBtn

generateBtn.addEventListener("click", writePassword);
// when the var generateBtn is click it needs to run the writePassword function

var choice = []
// an array that can be used as a substitute for the other arrays 
var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "(", ")",]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// different options from which my password can be created

function writePassword() {
  var Answer = Questions(); 
  // depending on whether true or false is returned we can put the stored value into 
  // another function to give us an output on each 
  var passwordText = document.querySelector("#password");
  // this is putting the password id into the varible passwordText so it can be referrenced later 
  if (Answer) {  
    // if the stored value is true then the below actions will run
  var password = generatePassword();
  // make the varible password equal to whatever the outcome of the generatePassword function is
  passwordText.value = password;
  // this replaces the value of the the passwordText with whatever the current value of the password is which comes from the generatePassword function
  }
  else {
    passwordText.value = "";
    // if my value from the questions fuction is false while the alert will pop up it will also clear the text on the screen 
  }
}

function generatePassword() {
  var InvisiblePassword = "";
  // makes the initial start of the password blank
  for (let i = 0; i < characterLength; i++) {
    // this will keep loooping until it reaches the desired number that was 
    // choosen by the user
    var x = Math.floor(Math.random() * choice.length)
    // varible x is going to be a the length of the choice array depending on 
    // what was choosen then it will be mutiplied by a random number from 0-1
    // that number will then be floored to the nearest interger that is smaller or equal to the decimaled number 
    InvisiblePassword = InvisiblePassword + choice[x];
    // this will choose add the random number choosen and add it to password and that 
    // new value will be stored into password
  
  }
  return InvisiblePassword;
  // will give back whatever the output from the function was back up to var password = generatePassword function
  
}

function Questions() {

  choice = [];
  // resets my choice to 0 so everytime it runs it doesnt keep add on top

  characterLength = parseInt(prompt("ranging from (8 - 128) how many characters do you want for your password?"));
  // It will attempt to turn what ever string you input into a number 

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length must be from (8-128). ");
    return false;
    // added to in the case that anything that isnt a number and within that range 
    // will give viewer an alert
  }

  if (confirm("Do you want any lowercase letters in your pasword? ")) {
    choice = choice.concat(lowercase);
    // if thats previous is true then it asks the next question but instead of a prompt 
    // its confirm as a yes and no instead of a response which is repeated for the later ones.
    // this one then ends by joining the lowercase array to the choice array

  }

  if (confirm("Do you want any uppercase letters in your pasword? ")) {
    choice = choice.concat(uppercase);
    // regardless of whether or not you chose to confirm the previous array 
    // this yes or no question will pop up 
    // this will add the upper case array to the choice array (which depending on your answer may or may not conatin the the lowercase array )
  }

  if (confirm("Do you want any special characters in your pasword? ")) {
    choice = choice.concat(specialchar);
    // regardless of whether or not you chose to confirm the previous array 
    // this yes or no question will pop up 
    // this will join the special character to the choice array
  }

  if (confirm("Do you want any numbers in your pasword? ")) {
    choice = choice.concat(numbers);
    // regardless of whether or not you chose to confirm the previous array 
    // this yes or no question will pop up 
    // this will join the numbers to the choice array and depending ont he previous answers will
    // create a final array with all you provided choices 
  }
  return true;
}
