window.onload = function () {
  var email = document.getElementById("emailId");
  var spanEmail = document.getElementById("spanEmail");
  var pass = document.getElementById("password")
  var spanPass = document.getElementById("spanPass");
  var submit = document.getElementById("submit");
  var mailFormat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/
  var mailValid = false;
  var passValid = false;
  var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var modalP = document.getElementById("modalP");

  email.addEventListener("focus", emailFocus);
  email.addEventListener("blur", emailBlur);
  pass.addEventListener("focus", passFocus);
  pass.addEventListener("blur", passBlur);
  submit.addEventListener("click", submitClick);
  
  function emailFocus() {
    email.style.border = "2px solid grey";
    spanEmail.textContent = "";
  }
  function emailBlur() {
    mailValid = mailFormat.test(email.value);
    if (!mailValid) {
      spanEmail.textContent = "The email is invalid";
      spanEmail.style.color = "red";
      email.style.border = "2px solid red";
    } else {
      email.style.border = "2px solid green";
    }
  }
  function passFocus() {
    pass.style.border = "2px solid grey";
    spanPass.textContent = "";
  }
  function passBlur() {
    passValid = validatePassword()
    if (!passValid) {
      spanPass.textContent = "At least 8 characters with letters and numbers";
      spanPass.style.color = "red";
      pass.style.border = "2px solid red";
    } else {
      pass.style.border = "2px solid green";
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

  // function submitClick(e) {
  //   e.preventDefault();
  //   if (!mailValid && !passValid) {
  //     alert("There are errors with email and password! \nEmail: " + email.value + "\nPassword: " + pass.value);
  //   } else if (!mailValid) {
  //     alert("There is an error with this email: " + email.value);
  //   } else if (!passValid) {
  //     alert("There is an error with this password: " + pass.value);
  //   } else if (mailValid && passValid) {
  //     alert("The log-in has been successful! \nEmail: " + email.value + "\nPassword: " + pass.value);
  //   }
  // }
  
  function submitClick(e) {
    e.preventDefault();
    var url = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${pass.value}`;
    if (!mailValid && !passValid) {
      // alert("There are errors with email and password! \nEmail: " + email.value + "\nPassword: " + pass.value);
      modal.style.display = "block";
      modalP.innerHTML = `<h2>There are errors with email and password!</h2><h3>Email: ${email.value}</h3>
      <h3>Password: ${pass.value}</h3>`;
    } else if (!mailValid) {
      // alert("There is an error with this email: " + email.value);
      modal.style.display = "block";
      modalP.innerHTML = `<h2>There is an error with this email: ${email.value}</h2>`;
    } else if (!passValid) {
      // alert("There is an error with this password: " + pass.value);
      modal.style.display = "block";
      modalP.innerHTML = `<h2>There is an error with this password: ${pass.value}</h2>`;
    } else if (mailValid && passValid) {
      fetch (url)
      .then (function (response) {
        return response.json()
      })
      .then(function (json) {
        // alert(json.msg)
        modal.style.display = "block";
        modalP.innerHTML = json.msg;
      })
      .catch (function (error) {
        // alert(error.errors[0].msg);
        modal.style.display = "block";
        modalP.innerHTML = "<h2>ERROR</h2>Impossible to connect to the server";
      })
    }
  }
	submit.onclick = function () {
		modal.style.display = "block";
		// modalP.innerHTML = responseJson.msg;
	}
	span.onclick = function () {
		modal.style.display = "none";
	}
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}