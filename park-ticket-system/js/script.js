// Function to handle showing the Login/Sign-up Section
function showLogin(role) {
  // Hide the role selection section
  const roleSelection = document.getElementById('role-selection');
  roleSelection.classList.add('hidden');

  // Show the login and sign-up section
  const loginSignupSection = document.getElementById('login-signup');
  loginSignupSection.classList.remove('hidden');

  // Update the role title dynamically
  const roleTitle = document.getElementById('role-title');
  roleTitle.textContent = `${capitalize(role)} Login / Sign-up`;
}

// Helper function to capitalize the first letter of a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to handle login submission
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) {
    alert(`Logged in successfully as ${email}.`);
  } else {
    alert('Please enter valid login credentials.');
  }
}

// Function to handle sign-up submission
function handleSignUp(event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (name && email && password) {
    alert(`Sign-up successful! Welcome, ${name}.`);
  } else {
    alert('Please fill out all fields to sign up.');
  }
}
