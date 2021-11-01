
const form = document.getElementById("form");
const FirstName = document.getElementById("Fname");
const Lastname = document.getElementById("Lname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const submit = document.getElementById("submit-btn");
const error = document.getElementById('error-message');
const formControl = document.getElementsByClassName('field-container');


  // Email validation function
function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )

    return emailRegexp.test(email);
  }

  //  Password vailidation

  function isPasswordValid(password) {
      const passwordRegexp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);

      return passwordRegexp.test(password);
  }

let Testname  = "name"


form.addEventListener('submit', (e) => {

    e.preventDefault();
 
        for(var i = 0; i < formControl.length; i++){

            if(FirstName.value === ""){
   // If there is an error, we add error class to parent element
   formControl[0].classList.add('error');
        
} else {
  // If the email is valid we display nothing or we remove the error message
  formControl[0].classList.add('success');
    }


    if(Lastname.value === ""){
        // If there is an error, we add error class to parent element
        formControl[1].classList.add('error');
             
     } else {
       // If the email is valid we display nothing or we remove the error message
       formControl[1].classList.add('success');
         }

            if (!isEmailValid(email.value)) {
               // If there is an error, we add error class to parent element
        formControl[2].classList.add('error');
        
    } else {
      // If the email is valid we display nothing or we remove the error message
      formControl[2].classList.add('success');
        }

        if (!isPasswordValid(password.value)) {
            // If there is an error, we add error class to parent element
     formControl[3].classList.add('error');
     
 } else {
   // If the email is valid we display nothing or we remove the error message
   formControl[3].classList.add('success');
     }

     
      }
});




/*
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
})
function checkInputs() {
    //get values from input 
   const firstNameValue = FirstName.value.trim();
   const lastNameValue = Lastname.value.trim();
   const passwordValue = password.value.trim();
   const emailValue = email.value.trim();


if (firstNameValue === ""){
    //show error
    //add error class
    setErrorFor(FirstName, 'FirstName cannot be blank')
} else{
    //add success class
   setSuccessFor(FirstName)
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .field-container
    const small = formControl.querySelector('.error-message');

    // ADD ERROR MESSAGE
     small.innetText = message;

     // ADD ERROR CLASS 
     formControl.classname = 'field-container error';
}
}
*/