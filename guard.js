if (sessionStorage.getItem("adminLoggedIn") !== "true") {
    window.location.replace("admin-login.html");
}

function adminLogout() {
    sessionStorage.removeItem("adminLoggedIn");
    window.location.replace("admin-login.html");
}