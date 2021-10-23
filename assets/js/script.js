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


// Get references to the #generate element (button)
let generateBtn = document.querySelector("#generate");

//function for passwordcritera

function userPasswordCriteria() {

  //1. prompt the user for the password criteria  
  let length = prompt("How many characters for your desired password?");
  console.log(length);
  //2. validate the input valdiate answer (password length between 8-128 char)

  let includeUppercase = confirm("Would you like to include upper case characters in your password?")
  console.log(includeUppercase);

  let includeLowercase = confirm("Would you like to include lower case characters in your password?")
  console.log(includeLowercase);

  let includeNumeric = confirm("Would you like to include numeric characters in your password?")
  console.log(includeNumeric);

  let includeSpecial = confirm("Would you like to include special characters in your password?")
  console.log(includeSpecial);
  //2. validate the input - valdiate answers (must select at least one type of character)

   

};


function generatePassword() {
  console.log("Hey you clicked a button!")
  //3. generate password based on critera
  //    

  //4. display the generated password on the page
    return "Generated Password will go here!"
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  //a variable for the text element after the password is generated
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", userPasswordCriteria);

//functions called
