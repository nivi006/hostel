const ADMIN_USER_ID = "admin";
const ADMIN_PASSWORD = "admin123";

const adminLoginForm = document.getElementById("adminLoginForm");

adminLoginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userid = document.getElementById("userid").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (userid === ADMIN_USER_ID && password === ADMIN_PASSWORD) {
        sessionStorage.setItem("adminLoggedIn", "true");
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Invalid User ID or Password!";
    }
});