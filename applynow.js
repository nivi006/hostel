document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.getElementById("gender").value;
    let hostelType = document.getElementById("hostelType").value;
    let dob = document.getElementById("dob").value;
    let joiningDate = document.getElementById("joiningDate").value;
    let message = document.getElementById("message");

    if (!fullname || !email || !mobile || !gender || !dob || !joiningDate || !hostelType) {
        message.style.color = "red";
        message.textContent = "Please fill all required fields.";
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid 10-digit mobile number.";
        return;
    }

    if (password.length < 8) {
        message.style.color = "red";
        message.textContent = "Password must contain at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match.";
        return;
    }

    if (new Date(dob) >= new Date()) {
        message.style.color = "red";
        message.textContent = "Please enter a valid date of birth.";
        return;
    }

    if (new Date(joiningDate) < new Date(new Date().toDateString())) {
        message.style.color = "red";
        message.textContent = "Joining date cannot be in the past.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("hostelUsers")) || [];

    if (users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
        message.style.color = "red";
        message.textContent = "This email is already registered.";
        return;
    }

    let newUser = {
        fullname: fullname,
        dob: dob,
        gender: gender,
        mobile: mobile,
        email: email,
        address: document.getElementById("address").value,
        college: document.getElementById("college").value,
        course: document.getElementById("course").value,
        year: document.getElementById("year").value,
        parent: document.getElementById("parent").value,
        hostelType: hostelType,
        roomType: document.getElementById("roomType").value,
        joiningDate: joiningDate,
        password: password
    };

    users.push(newUser);

    localStorage.setItem("hostelUsers", JSON.stringify(users));

    message.style.color = "green";
    message.textContent = "Registration successful! You can now login.";

    document.getElementById("registrationForm").reset();

});