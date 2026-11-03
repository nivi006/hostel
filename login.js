document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email.trim() === "" || password.trim() === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Login form submitted successfully!";

});