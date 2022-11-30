const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "1234") {
        alert("You have successfully logged in.");
        window.location.href = "Admin.html";
    }
    if (username === "user" && password === "1111") {
        alert("You have successfully logged in.");
        window.location.href = "User.html";
    }
    else {
        alert("Fail to Login");
    }
})