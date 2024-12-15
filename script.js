document.addEventListener("DOMContentLoaded", () => {
    //input fields focus effects
    const textInputs = document.querySelectorAll("input");

    textInputs.forEach((textInput) => {
        textInput.addEventListener("focus", () => {
            let parent = textInput.parentNode;
            parent.classList.add("active");
        });

        textInput.addEventListener("blur", () => {
            let parent = textInput.parentNode;
            parent.classList.remove("active");
        });
    });

    // Password show/hide buttons
    const passwordInputs = document.querySelectorAll(".password-input");
    const eyeButtons = document.querySelectorAll(".eye-btn");

    eyeButtons.forEach((eyeBtn, index) => {
        eyeBtn.addEventListener("click", () => {
            const passwordInput = passwordInputs[index];
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeBtn.innerHTML = "<i class='uil uil-eye'></i>";
            } else {
                passwordInput.type = "password";
                eyeBtn.innerHTML = "<i class='uil uil-eye-slash'></i>";
            }
        });
    });

    //sliding between sign-in form and sign-up form
    const signUpBtn = document.querySelector(".sign-up-btn");
    const signInBtn = document.querySelector(".sign-in-btn");
    const signUpForm = document.querySelector(".sign-up-form");
    const signInForm = document.querySelector(".sign-in-form");

    signUpBtn.addEventListener("click", () => {
        signInForm.classList.add("hide");
        signUpForm.classList.add("show");
        signInForm.classList.remove("show");
    });

    signInBtn.addEventListener("click", () => {
        signInForm.classList.remove("hide");
        signUpForm.classList.remove("show");
        signInForm.classList.add("show");
    });

    // Password match validation
    const signUpFormElement = document.querySelector(".sign-up-box form");
    const passwordField = signUpFormElement.querySelector(
        "input[type='password']"
    );
    const confirmPasswordField = document.getElementById("confirm-password");
    const passwordError = document.getElementById("password-error");

    signUpFormElement.addEventListener("submit", (event) => {
        if (passwordField.value !== confirmPasswordField.value) {
            event.preventDefault();
            passwordError.textContent = "Passwords do not match";
            passwordError.style.display = "block";
            setTimeout(() => {
                passwordError.style.display = "none";
            }, 5000); // Hide after 5 seconds
        } else {
            passwordError.style.display = "none";
        }
    });
});
