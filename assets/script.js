document.addEventListener("DOMContentLoaded", () => {
    // Initialize all functions
    initInputFocusEffects();
    initPasswordToggle();
    initFormToggle();
    initPasswordMatchValidation();
    initPasswordStrengthValidation();
});

// Function to handle focus effects on input fields
function initInputFocusEffects() {
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
}

// Function to handle password show/hide toggle

function initPasswordToggle() {
    const passwordInputs = document.querySelectorAll(".password-input");
    const eyeButtons = document.querySelectorAll(".eye-btn");

    eyeButtons.forEach((eyeBtn, index) => {
        eyeBtn.addEventListener("click", () => {
            const passwordInput = passwordInputs[index];
            togglePasswordVisibility(passwordInput, eyeBtn);
        });
    });
}

// Helper function to toggle password visibility
function togglePasswordVisibility(passwordInput, eyeBtn) {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeBtn.innerHTML = "<i class='uil uil-eye'></i>";
    } else {
        passwordInput.type = "password";
        eyeBtn.innerHTML = "<i class='uil uil-eye-slash'></i>";
    }
}

// Function to toggle between sign-in and sign-up forms
function initFormToggle() {
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
}

// Function for password match validation on sign-up
function initPasswordMatchValidation() {
    const signUpFormElement = document.querySelector(".sign-up-box form");
    const passwordField = signUpFormElement.querySelector("input[type='password']");
    const confirmPasswordField = document.getElementById("confirm-password");
    const passwordError = document.getElementById("password-error");

    signUpFormElement.addEventListener("submit", (event) => {
        if (passwordField.value !== confirmPasswordField.value) {
            event.preventDefault();
            passwordError.textContent = "Passwords do not match";
            passwordError.style.display = "block";
            setTimeout(() => {
                passwordError.style.display = "none";
            }, 5000);
        } else {
            passwordError.style.display = "none";
        }
    });
}

// Function for password strength validation
function initPasswordStrengthValidation() {
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('password-strength');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const passwordError = document.getElementById('password-error');

    passwordInput.addEventListener('input', function () {
        checkPasswordStrength(passwordInput.value, passwordStrength);  // Update password strength meter
        checkPasswordMatch(passwordInput, confirmPasswordInput, passwordError);  // Check if passwords match
    });

    confirmPasswordInput.addEventListener('input', () => checkPasswordMatch(passwordInput, confirmPasswordInput, passwordError));  // Check password match
}

// Helper function to check password strength
function checkPasswordStrength(password, strengthMeter) {
    const strength = {
        weak: /^(?=.*[a-z]).{6,}$/,
        medium: /^(?=.*[a-z])(?=.*[0-9]).{6,}$/,
        strong: /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{8,}$/
    };

    if (password === "") {
        strengthMeter.className = 'password-strength'; // Reset to default empty state
        return;
    }

    if (strength.strong.test(password)) {
        strengthMeter.className = 'password-strength strong';
    } else if (strength.medium.test(password)) {
        strengthMeter.className = 'password-strength medium';
    } else {
        strengthMeter.className = 'password-strength weak';
    }
}

// Helper function to check if passwords match
function checkPasswordMatch(passwordInput, confirmPasswordInput, passwordError) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.textContent = "Passwords do not match!";
        passwordError.style.display = 'block';
    } else {
        passwordError.textContent = "";
        passwordError.style.display = 'none';
    }
}
// JavaScript for password match text feedback
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("new-password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const statusText = document.getElementById("status-text");

    function updateStatus() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === "" && confirmPassword === "") {
            statusText.textContent = ""; // Clear text if fields are empty
        } else if (password === confirmPassword) {
            statusText.textContent = "Passwords match!";
            statusText.className = "status-text match";
        } else {
            statusText.textContent = "Passwords do not match.";
            statusText.className = "status-text no-match";
        }
    }

    // Add event listeners to both fields
    passwordInput.addEventListener("input", updateStatus);
    confirmPasswordInput.addEventListener("input", updateStatus);
});