// Toggle between login and signup form
function toggleForm() {
  const login = document.getElementById("loginContainer");
  const signup = document.getElementById("signupContainer");

  login.style.display = login.style.display === "none" ? "block" : "none";
  signup.style.display = signup.style.display === "none" ? "block" : "none";
}

// Show signup success message
function showSuccessMessage() {
  const message = document.getElementById("successMessage");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}

// Signup logic
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  if (!username || !email || !password) {
    alert("All fields are required.");
    return;
  }

  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  showSuccessMessage();
  setTimeout(toggleForm, 2000);
});

// Login logic
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredUsername = document.getElementById("loginUsername").value.trim();
  const enteredPassword = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.username === enteredUsername &&
    storedUser.password === enteredPassword
  ) {
    alert("Login successful! Redirecting...");
    window.location.href = "page1.html"; // Make sure this file exists
  } else {
    alert("Invalid username or password!");
  }
});
