// Get references to the form elements
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmInput = document.getElementById("password-confirm-input");
const errorMessage = document.getElementById("error-message");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form input values
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  // validate the input fields
  if (name.trim() === "") {
    errorMessage.textContent = "Please enter your name";
    return;
  }
  if (email.trim() === "") {
    errorMessage.textContent = "Please enter your email";
    return;
  }
  if (password.trim() === "") {
    errorMessage.textContent = "Please enter a password";
    return;
  }
  if (passwordConfirm.trim() === "") {
    errorMessage.textContent = "Please confirm your password";
    return;
  }
  if (password !== passwordConfirm) {
    errorMessage.textContent = "Passwords do not match";
    return;
  }

  // Clear the error message
  errorMessage.textContent = "";

  // Send a request to the server to create a new user
  // You will need to replace this with your own server-side code
  // for creating a new user in your database
  axios.post('/api/users', { name, email, password})
    .then(res => {
        console.log(res)
        //redirect to login page
        window.location.href = '/login'
    })
    .catch(err => {
        console.log(err)
        errorMessage.textContent = err.response.data.error
    })
});
