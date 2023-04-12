const nameError = document.getElementById("nameError"),
    lastNameError = document.getElementById("lastNameError"),
    emailError = document.getElementById("emailError"),
    phoneError = document.getElementById("phoneError"),
    passwordError = document.getElementById("passwordError"),
    confirmPasswordError = document.getElementById("confirmPasswordError"),
    submitBtn = document.getElementById("submit"),
    firstName = document.getElementById("firstName"),
    lastName = document.getElementById("lastName"),
    email = document.getElementById("email"),
    phone = document.getElementById("tel"),
    password = document.getElementById("password"),
    confirmPassword = document.getElementById("confirmPassword");
    inputArray = [firstName, lastName, email, phone, password, confirmPassword];
    spanArray = [nameError, lastNameError, emailError, phoneError, passwordError, confirmPasswordError];

    // function validateInput(array){
    //     for(i=0;i<array.length;i++){
    //         array[i].onkeyup = function(){
    //             console.log(this.value);
    //         }
    //     }
    // }

    // inputArray[0].onkeyup = function(){
    //     console.log(this.value);
    // }
    function checkPasswordMatch(){
        if(password.value != confirmPassword.value){
            //if they dont match then change the text content of their span to passwords don't match
            passwordError.classList.add("visible")
            passwordError.textContent = "Passwords do not match";
            confirmPasswordError.classList.add("visible");
            confirmPasswordError.textContent = "Passwords do not match"
        } else {
            passwordError.classList.remove("visible");
            passwordError.textContent = "*This field is required";
            confirmPasswordError.classList.remove("visible");
            confirmPasswordError.textContent = "*This field is required"
        }
        
    }

submitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    checkPasswordMatch();
})
// nameError.classList.add("visible");