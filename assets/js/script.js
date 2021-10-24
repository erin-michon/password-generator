// Variables

// arrays for each character type
let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];

let special = ['!','@','#','$','%','&','~','-','_','+','=','<','>']

let numeric = ['1','2','3','4','5','6','7','8','9','0']

//"master" array that will contain all available characters for the password
let availCharArray = [];


// Get references to the #generate element (button)
let generateBtn = document.querySelector("#generate");

//functions for passwordcritera

function userPasswordLength () {
  //prompt the user for the password criteria  
  let length = prompt("How many characters for your desired password?");
  console.log(length);

  length = Math.round(length);
  console.log(length);

  //validate the input valdiate answer (password length between 8-128 char)
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
  
  //prompt user for character types (yes/no via confirm())
  let includeUppercase = confirm("Would you like to include upper case characters in your password?")
  console.log(includeUppercase);

  let includeLowercase = confirm("Would you like to include lower case characters in your password?")
  console.log(includeLowercase);

  let includeNumeric = confirm("Would you like to include numeric characters in your password?")
  console.log(includeNumeric);

  let includeSpecial = confirm("Would you like to include special characters in your password?")
  console.log(includeSpecial);
  //validate the input - valdiate answers (must select at least one type of character)

  if (includeUppercase === false && includeLowercase === false && includeNumeric === false && includeSpecial === false) {
    alert("You must include at least one character type for your password to be generated.");
    return null;
  };

  //store user answers in this object (objec)
  userInput = {
    length: length,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
    includeNumeric: includeNumeric, 
    includeSpecial: includeSpecial
  };

  console.log(userInput);
  //For each character type, create an array
  //For each confirmed character type array - add together to create main array to pull characters from
  //if the player confirmed the char type, add it to the availCharArray
  if (includeUppercase) {
    availCharArray = availCharArray.concat(uppercase);
  }

  if (includeLowercase) {
    availCharArray=availCharArray.concat(lowercase);
  }

  if (includeNumeric) {
    availCharArray=availCharArray.concat(numeric);
  }

  if (includeSpecial) {
    availCharArray=availCharArray.concat(special);
  }

  console.log(availCharArray);

  //generate password based on critera 
  //Determine length of password from userInput.length
  //from availCharArray, pull that number of random characters to create the password

  let password = [];

  let randomChar = availCharArray[Math.floor(Math.random()*availCharArray.length)]
  console.log(randomChar);
  
  password.push(randomChar);
  console.log(password);

  randomChar = availCharArray[Math.floor(Math.random()*availCharArray.length)]
  console.log(randomChar);
  
  password.push(randomChar);
  console.log(password);


  //when this function is ran, below is the output
  // return availCharArray
};



function generatePassword() {




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

// Add event listener to generate button - when the button is clicked on the fxn launches
generateBtn.addEventListener("click", userPasswordLength);

//functions called


