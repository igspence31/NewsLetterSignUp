const input = document.querySelector("input");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector(".submit-button");
const dismissButton = document.querySelector(".dismiss-button");

const signUpCard = document.querySelector(".sign-up-card");
const successCard = document.querySelector(".success-card");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value;
    // Make sure its a valid email
  if (email === "") {
    errorMessage.textContent = "This field is required";
    input.classList.add("error-style");
  } else {
    // Retrieve existing emails from local storage
    // or create an empty array to store emails

    const existingEmails = JSON.parse(localStorage.getItem("emails")) || [];

    // Add email to array   
    existingEmails.push(email);

    // Store updated array back in local storage
    localStorage.setItem("emails", JSON.stringify(existingEmails));

    signUpCard.classList.add("none");
    successCard.classList.remove("none");


  }
});



dismissButton.addEventListener("click", function () {
  input.value = "";
  successCard.classList.add("none");
  signUpCard.classList.remove("none");
});
