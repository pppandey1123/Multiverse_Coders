
  document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.querySelector(".signup-btn");
    const signupForm = document.getElementById("signup-form");
  
    signupBtn.addEventListener("click", function() {
      signupForm.classList.remove("hidden");
    });
  });
    