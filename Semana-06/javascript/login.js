window.onload = function () {
    var email = document.getElementById("emailId");
    var spanEmail = document.getElementById("spanEmail");
    var pass = document.getElementById("password")
    var spanPass = document.getElementById("spanPass");
    var submit = document.getElementById("submit");
    var mailFormat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/
    var mailValid = false;
    var passValid = false;

    email.addEventListener("focus", emailFocus);
    email.addEventListener("blur", emailBlur);
    pass.addEventListener("focus", passFocus);
    pass.addEventListener("blur", passBlur);
    submit.addEventListener("click", submitClick);
    
    function emailFocus() {
      email.style.border = "3px solid grey";
      spanEmail.textContent = "";
    }
    function emailBlur() {
      mailValid = mailFormat.test(email.value);
      if (!mailValid) {
        spanEmail.textContent = "The email is invalid";
        spanEmail.style.color = "red";
        email.style.border = "3px solid red";
      } else {
        email.style.border = "3px solid green";
      }
    }
    function passFocus() {
      pass.style.border = "3px solid grey";
      spanPass.textContent = "";
    }
    function passBlur() {
      passValid = validatePassword()
      if (!passValid) {
        spanPass.textContent = "The Password is invalid";
        spanPass.style.color = "red";
        pass.style.border = "3px solid red";
      } else {
        pass.style.border = "3px solid green";
      }
    }
    function validatePassword() {
      var letterSum = 0;
      var numberSum = 0;
      if (pass.value.length < 7) {
        return false;
      } else {
        for (i = 0; i < pass.value.length; i++) {
          if (isNaN(pass.value[i])) {
            letterSum += 1;
          } else {
            numberSum += 1;
          }
        }
      }
      return (letterSum !== 0 && numberSum !== 0)
    }
    function submitClick() {
      if (!mailValid) {
        alert(email.value + " Email incorrect");
      } else if (!passValid) {
        alert(pass.value + " Password incorrect");
      } else if (mailValid && passValid) {
        alert("successfull login - Email: " + email.value + "Password: " + pass.value);
      }
    }
  }