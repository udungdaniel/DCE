document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    function showError(input, message) {
        const formGroup = input.parentElement;
        let error = formGroup.querySelector(".error-message");

        if (!error) {
            error = document.createElement("small");
            error.className = "error-message";
            formGroup.appendChild(error);
        }

        error.textContent = message;
        input.classList.add("error");
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector(".error-message");

        if (error) error.remove();
        input.classList.remove("error");
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        // Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Full name is required.");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Email
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required.");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Subject
        if (subjectInput.value.trim() === "") {
            showError(subjectInput, "Subject is required.");
            isValid = false;
        } else {
            clearError(subjectInput);
        }

        // Message
        if (messageInput.value.trim().length < 10) {
            showError(messageInput, "Message must be at least 10 characters.");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        if (isValid) {
            form.reset();

            const successMsg = document.createElement("div");
            successMsg.className = "success-message";
            successMsg.textContent = "Your message has been sent successfully!";

            form.prepend(successMsg);

            setTimeout(() => {
                successMsg.remove();
            }, 4000);
        }
    });
});