//pick the elements

const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit-btn");
const nameField = document.querySelector(".full-name");
const emailField = document.querySelector(".ema-il");
const phoneField = document.querySelector(".number");
const passwordField = document.querySelector(".pass-word");

//error messages elements

const nameFeedback = document.querySelector(".names");
const emailFeedback = document.querySelector(".email-address");
const phoneFeedback = document.querySelector(".phone-number");
const passwordFeedback = document.querySelector(".password-strength");


function validateName(){
    const nameValue = nameField.value.trim();
    if (nameValue.length < 2){

        nameField.classList.add("error");
        nameField.classList.remove("valid");
        nameFeedback.textContent = "Name must be at least 2 characters";
        return false;

    }else{

        nameField.classList.remove("error");
        nameField.classList.add("valid");

        return true;
    }

}

function validateEmail(){

    const emailValue = emailField.value.trim();
    const emailTest = /@.*\..+/;

    if(emailTest.test(emailValue)){

        emailField.classList.add("valid");
        emailField.classList.remove("error");
        return true;

    }else {

        emailField.classList.add("error");
        emailField.classList.remove("valid");
        emailFeedback.textContent= "Email must contain @ and a dot after @";
        return false; 

    }

}

function validatePhone(){

    const phoneValue = phoneField.value.trim();
    const phoneTest = /^(07|01)[0-9]{8}$/;

    if(phoneTest.test(phoneValue)){

        phoneField.classList.add("valid");
        phoneField.classList.remove("error");
        return true;

    }else {

        phoneField.classList.add("error");
        phoneField.classList.remove("valid");
        phoneFeedback.textContent = "Phone Number must be exactly 10 digits, starting with 07 or 01";
        return false;

    }


}

function validatePassword(){

    const passValue = passwordField.value;

    if(passValue.length<8){
        passwordField.classList.add("error");
        passwordField.classList.remove("valid");
        passwordFeedback.textContent = "Password must be minimum 8 characters.";
        return false;

    }else if (!/[A-Z]/.test(passValue)){
        passwordField.classList.add("error");
        passwordField.classList.remove("valid");
        passwordFeedback.textContent = "Password must have at least 1 uppercase letter. ";
        return false;    

    }else if (!/[0-9]/.test(passValue)){
        passwordField.classList.add("error");
        passwordField.classList.remove("valid");
        passwordFeedback.textContent = "Password must have  at least 1 number.";
        return false;    

    }else{
        passwordField.classList.add("valid");
        passwordField.classList.remove("error");
        return true;

    }

}

