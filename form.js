// ============================================================
// PICK THE ELEMENTS
// ============================================================

// Main form and submit button
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit-btn");

// Input fields
const nameField = document.querySelector(".full-name");
const emailField = document.querySelector(".ema-il");
const phoneField = document.querySelector(".number");
const passwordField = document.querySelector(".pass-word");

// Message shown after successful submission
const formFeedback = document.querySelector(".form-feedback");


// ============================================================
// ICON ELEMENTS
// ============================================================

// These display the ✓ or ✗ beside each input field
const nameIcon = document.querySelector(".name-icon");
const emailIcon = document.querySelector(".email-icon");
const phoneIcon = document.querySelector(".phone-icon");
const passwordIcon = document.querySelector(".password-icon");


// ============================================================
// ERROR MESSAGE ELEMENTS
// ============================================================

// These display specific validation messages underneath
// each corresponding input field
const nameFeedback = document.querySelector(".names");
const emailFeedback = document.querySelector(".email-address");
const phoneFeedback = document.querySelector(".phone-number");
const passwordFeedback = document.querySelector(".password-strength");


// ============================================================
// VALIDATION FUNCTIONS
// ============================================================

// ------------------------------------------------------------
// NAME VALIDATION
// ------------------------------------------------------------

function validateName(){

    const nameValue = nameField.value.trim();

    // If the field is empty, return it to its neutral state
    if(nameValue.length===0){

        nameField.classList.remove("error");
        nameField.classList.remove("valid");

        nameFeedback.textContent="";

        nameIcon.textContent="";
        nameIcon.classList.remove("error");
        nameIcon.classList.remove("valid");

        return false;

    // Name must contain at least 2 characters
    }else if(nameValue.length < 2){

        nameField.classList.add("error");
        nameField.classList.remove("valid");

        nameFeedback.textContent = "Name must be at least 2 characters";

        nameIcon.textContent="✗";
        nameIcon.classList.add("error");
        nameIcon.classList.remove("valid");

        return false;

    // If all requirements are satisfied, mark the field as valid
    }else{

        nameField.classList.remove("error");
        nameField.classList.add("valid");

        nameFeedback.textContent = "";

        nameIcon.textContent= "✓";
        nameIcon.classList.add("valid");
        nameIcon.classList.remove("error");

        return true;
    }
}


// ------------------------------------------------------------
// EMAIL VALIDATION
// ------------------------------------------------------------

function validateEmail(){

    const emailValue = emailField.value.trim();

    // Check whether the email contains an @ symbol
    const hasAt = /@/.test(emailValue);

    // Check whether there is a dot somewhere after the @
    const hasDotAfterAt = /@.*\..+/.test(emailValue);

    // Empty email = neutral state
    if(emailValue.length === 0){

        emailField.classList.remove("valid");
        emailField.classList.remove("error");

        emailFeedback.textContent = "";

        emailIcon.textContent = "";
        emailIcon.classList.remove("error");
        emailIcon.classList.remove("valid");

        return false;

    // Email must contain @
    }else if(!hasAt){

        emailField.classList.add("error");
        emailField.classList.remove("valid");

        emailFeedback.textContent = "Email must contain @";

        emailIcon.textContent = "✗";
        emailIcon.classList.add("error");
        emailIcon.classList.remove("valid");

        return false;

    // Email must contain a dot after the @
    }else if(!hasDotAfterAt){

        emailField.classList.add("error");
        emailField.classList.remove("valid");

        emailFeedback.textContent = "Email must contain a dot after @";

        emailIcon.textContent = "✗";
        emailIcon.classList.add("error");
        emailIcon.classList.remove("valid");

        return false;

    // If all requirements are satisfied, mark the email as valid
    }else{

        emailField.classList.add("valid");
        emailField.classList.remove("error");

        emailFeedback.textContent = "";

        emailIcon.textContent = "✓";
        emailIcon.classList.add("valid");
        emailIcon.classList.remove("error");

        return true;
    }
}


// ------------------------------------------------------------
// PHONE VALIDATION
// ------------------------------------------------------------

function validatePhone(){

    const phoneValue = phoneField.value.trim();

    // Check whether the phone number contains exactly 10 digits
    const isTenDigits = /^[0-9]{10}$/.test(phoneValue);

    // Check whether the number starts with 07 or 01
    const hasValidPrefix = /^(07|01)/.test(phoneValue);

    // Empty phone field = neutral state
    if(phoneValue.length === 0){

        phoneField.classList.remove("valid");
        phoneField.classList.remove("error");

        phoneFeedback.textContent = "";

        phoneIcon.textContent = "";
        phoneIcon.classList.remove("error");
        phoneIcon.classList.remove("valid");

        return false;

    // Phone number must contain exactly 10 digits
    }else if(!isTenDigits){

        phoneField.classList.add("error");
        phoneField.classList.remove("valid");

        phoneFeedback.textContent = "Phone number must be exactly 10 digits";

        phoneIcon.textContent = "✗";
        phoneIcon.classList.add("error");
        phoneIcon.classList.remove("valid");

        return false;

    // Phone number must start with 07 or 01
    }else if(!hasValidPrefix){

        phoneField.classList.add("error");
        phoneField.classList.remove("valid");

        phoneFeedback.textContent = "Phone number must start with 07 or 01";

        phoneIcon.textContent = "✗";
        phoneIcon.classList.add("error");
        phoneIcon.classList.remove("valid");

        return false;

    // If all requirements are satisfied, mark the phone as valid
    }else{

        phoneField.classList.add("valid");
        phoneField.classList.remove("error");

        phoneFeedback.textContent = "";

        phoneIcon.textContent = "✓";
        phoneIcon.classList.add("valid");
        phoneIcon.classList.remove("error");

        return true;
    }
}


// ------------------------------------------------------------
// PASSWORD VALIDATION
// ------------------------------------------------------------

function validatePassword(){

    const passValue = passwordField.value;

    // Empty password = neutral state
    if(passValue.length === 0){

        passwordField.classList.remove("error");
        passwordField.classList.remove("valid");

        passwordFeedback.textContent="";

        passwordIcon.textContent="";
        passwordIcon.classList.remove("error");
        passwordIcon.classList.remove("valid");

        return false;

    // Password must contain at least 8 characters
    }else if(passValue.length < 8){

        passwordField.classList.add("error");
        passwordField.classList.remove("valid");

        passwordFeedback.textContent = "Password must be minimum 8 characters.";

        passwordIcon.textContent="✗";
        passwordIcon.classList.add("error");
        passwordIcon.classList.remove("valid");

        return false;

    // Password must contain at least one uppercase letter
    }else if (!/[A-Z]/.test(passValue)){

        passwordField.classList.add("error");
        passwordField.classList.remove("valid");

        passwordFeedback.textContent = "Password must have at least 1 uppercase letter. ";

        passwordIcon.textContent="✗";
        passwordIcon.classList.add("error");
        passwordIcon.classList.remove("valid");

        return false;

    // Password must contain at least one number
    }else if (!/[0-9]/.test(passValue)){

        passwordField.classList.add("error");
        passwordField.classList.remove("valid");

        passwordFeedback.textContent = "Password must have at least 1 number.";

        passwordIcon.textContent="✗";
        passwordIcon.classList.add("error");
        passwordIcon.classList.remove("valid");

        return false;

    // If all requirements are satisfied, mark the password as valid
    }else{

        passwordField.classList.add("valid");
        passwordField.classList.remove("error");

        passwordFeedback.textContent="";

        passwordIcon.textContent= "✓";
        passwordIcon.classList.add("valid");
        passwordIcon.classList.remove("error");

        return true;
    }
}


// ============================================================
// VALIDITY STATE
// ============================================================

// Each variable stores whether its corresponding field
// is currently valid or invalid.
let nameValid = false;
let emailValid = false;
let phoneValid = false;
let passwordValid = false;


// ============================================================
// SUBMIT BUTTON STATE
// ============================================================

function updateSubmitButton(){

    // Keep the button disabled if ANY field is invalid
    if (!nameValid || !emailValid || !phoneValid || !passwordValid ){

        submitBtn.disabled = true;

    // Enable the button only when ALL fields are valid
    }else{

        submitBtn.disabled = false;
    }
}


// ============================================================
// INPUT EVENT LISTENERS
// ============================================================

// Validate the name every time the user types
nameField.addEventListener("input" ,function(){

    nameValid = validateName();
    updateSubmitButton();

    
});


// Validate the email every time the user types
emailField.addEventListener("input",function(){

    emailValid = validateEmail();
    updateSubmitButton();

    
});


// Validate the phone number every time the user types
phoneField.addEventListener("input" , function(){

    phoneValid = validatePhone();
    updateSubmitButton();

    
});


// Validate the password every time the user types
passwordField.addEventListener("input" , function(){

    passwordValid = validatePassword();
    updateSubmitButton();

    
});


// ============================================================
// FORM SUBMISSION
// ============================================================

form.addEventListener("submit" , function(event){

    // Prevent the browser from actually submitting/reloading
    // the page
    event.preventDefault();


    // Collect the current values from the form
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const phone = phoneField.value.trim();
    const password = passwordField.value;


    // Create an object containing the submitted information
    const submission = {

        name: name,
        email: email,
        phone: phone,
        password: password,

    };


    // Display the submitted object in the console
    console.log(submission);


    // Show a successful submission message
    formFeedback.textContent = "Submission Successful! ";


    // Remove the success message after 1 second
    setTimeout(function(){

        formFeedback.textContent = "";

    },1000);


    // Reset all form fields
    form.reset();


    // --------------------------------------------------------
    // Remove validation states from the input fields
    // --------------------------------------------------------

    nameField.classList.remove("valid");
    nameField.classList.remove("error");

    emailField.classList.remove("valid");
    emailField.classList.remove("error");

    phoneField.classList.remove("valid");
    phoneField.classList.remove("error");

    passwordField.classList.remove("valid");
    passwordField.classList.remove("error");


    // --------------------------------------------------------
    // Clear icons
    // --------------------------------------------------------

    nameIcon.classList.remove("valid");
    nameIcon.classList.remove("error");
    nameIcon.textContent="";

    emailIcon.classList.remove("valid");
    emailIcon.classList.remove("error");
    emailIcon.textContent="";

    phoneIcon.classList.remove("valid");
    phoneIcon.classList.remove("error");
    phoneIcon.textContent="";

    passwordIcon.classList.remove("valid");
    passwordIcon.classList.remove("error");
    passwordIcon.textContent="";

});

