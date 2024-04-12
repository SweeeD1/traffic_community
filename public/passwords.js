document.addEventListener("DOMContentLoaded", function() {
  var passwordInput = document.getElementById("YourPasswordReg");
  var confirmPasswordInput = document.querySelector(".registration__container-forms--passwordAgain-input");
  var createButton = document.querySelector(".registration__container-forms--button");
  var errorSpan = document.createElement("span");
  errorSpan.style.color = "red";

  confirmPasswordInput.parentNode.insertBefore(errorSpan, confirmPasswordInput.nextSibling);

  function checkPasswords() {
      var password = passwordInput.value;
      var confirmPassword = confirmPasswordInput.value;

      if (password !== confirmPassword) {
          errorSpan.textContent = "Паролі не співпадають!";
      } else {
          errorSpan.textContent = "";
      }
  }

  createButton.addEventListener("click", checkPasswords);
});