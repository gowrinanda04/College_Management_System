const loginForm = document.getElementById("loginForm");
const errorText = document.getElementById("error");

// Set your admin username and password here
const adminUsername = "admin";
const adminPassword = "1234";

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
    // Save login state and redirect
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    errorText.textContent = "Invalid username or password!";
  }
});
