   //  a. password length between 8-128 char
  //      user input will be a number
  //  b. lowercase
  //      user input will be a confirmation (yes/no to include)
  //  c. uppercase
  //      user input will be a confirmation (yes/no to include)
  //  d. numeric
  //      user input will be a confirmation (yes/no to include)
  //  e. special char
  //      user input will be a confirmation (yes/no to include)  
  //2. validate the input 
  //      a. number must be between 8-128, using if/then
  //      b. one character type must be included, using a check against confirmation answers?
  //2a.Create an object to store the answers from the user


// Assignment code here
userInput = {};

// Get references to the #generate element (button)
let generateBtn = document.querySelector("#generate");

//functions for passwordcritera

function userPasswordLength () {
  //1. prompt the user for the password criteria  
  let length = prompt("How many characters for your desired password?");
  console.log(length);

  length = Math.round(length);
  console.log(length);

  //2. validate the input valdiate answer (password length between 8-128 char)
  if (isNaN(length)) {
    alert("Please submit a number to represent the length of your password.")
    return userPasswordLength();
  }
  else if (length < 8) {
    alert("The password must between 8 and 128 characters.");
    return null;
  } 
  else if (length > 128) {
  alert("The password must between 8 and 128 characters.")
  return null;
  }

  let includeUppercase = confirm("Would you like to include upper case characters in your password?")
  console.log(includeUppercase);

  let includeLowercase = confirm("Would you like to include lower case characters in your password?")
  console.log(includeLowercase);

  let includeNumeric = confirm("Would you like to include numeric characters in your password?")
  console.log(includeNumeric);

  let includeSpecial = confirm("Would you like to include special characters in your password?")
  console.log(includeSpecial);
  //2. validate the input - valdiate answers (must select at least one type of character)

  if (includeUppercase === false && includeLowercase === false && includeNumeric === false && includeSpecial === false) {
    alert("You must include at least one character type for your password to be generated.")
    return null;
  };

  userInput = {
    length: length,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
    includeNumeric: includeNumeric 
  };

  console.log(userInput.length);
  console.log(userInput.includeNumeric);

};
     

function generatePassword() {
  console.log("Hey you clicked a button!")
  //3. generate password based on critera
  //    

  //4. display the generated password on the page
    return "Generated Password will go here!"
};


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  //a variable for the text element after the password is generated
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", userPasswordLength);

//functions called


