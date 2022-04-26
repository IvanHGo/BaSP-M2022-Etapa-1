window.onload = function () {

	var fName = document.getElementById("nameId");
	var lName = document.getElementById("lNameId");
	var dni = document.getElementById("dniId");
	var birthday = document.getElementById("birthdayId");
	var phone = document.getElementById("phoneId");
	var address = document.getElementById("addressId");
	var location = document.getElementById("locationId");
	var postalCode = document.getElementById("postalCodeId");
	var email = document.getElementById("emailId");
	var pass = document.getElementById("passwordId");
	var passR = document.getElementById("passwordRId");
	var spanFName = document.getElementById("spanNameId");
	var spanLName = document.getElementById("spanLNameId");
	var spanDni = document.getElementById("spanDniId");
	var spanBirthday = document.getElementById("spanBirthdayId");
	var spanPhone = document.getElementById("spanPhoneId");
	var spanAddress = document.getElementById("spanAddressId");
	var spanLocation = document.getElementById("spanLocationId");
	var spanPostalCode = document.getElementById("spanPostalCodeId");
	var spanEmail = document.getElementById("spanEmailId");
	var spanPass = document.getElementById("spanPassId");
	var spanPassR = document.getElementById("spanPassRId");
	// var addressValid = false;
	var mailFormat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/
	var mailValid = false;
	var passValid = false;
	var passRValid = false;
	// var submit = document.getElementById("submitId");
	// var message = document.getElementsByClassName("messageDiv");

	fName.addEventListener("focus", fNameFocus);
	fName.addEventListener("blur", fNameBlur);
	lName.addEventListener("focus", lNameFocus);
	lName.addEventListener("blur", lNameBlur);
	dni.addEventListener("focus", dniFocus);
	dni.addEventListener("blur", dniBlur);
	birthday.addEventListener("focus", birthdayFocus);
	birthday.addEventListener("blur", birthdayBlur);
	phone.addEventListener("focus", phoneFocus);
	phone.addEventListener("blur", phoneBlur);
	// address.addEventListener("focus", addressFocus);
	// address.addEventListener("blur", addressBlur);
	// location.addEventListener("focus", locationFocus);
	// location.addEventListener("blur", locationBlur);
	postalCode.addEventListener("focus", postalCodeFocus);
	postalCode.addEventListener("blur", postalCodeBlur);
	email.addEventListener("focus", emailFocus);
	email.addEventListener("blur", emailBlur);
	pass.addEventListener("focus", passFocus);
	pass.addEventListener("blur", passBlur);
	passR.addEventListener("focus", passRFocus);
	passR.addEventListener("blur", passRBlur);


	///////////////////////////////////////////////FIRST NAME
	function fNameBlur() {
		var valueFName = fName.value;
		if (valueFName.length < 4) {
			// console.log("error: debe tener mas de 3 caracteres");
			spanFName.textContent = "Must contain more than 3 characters";
			spanFName.style.color = "red";
			fName.style.border = "2px solid red";
		} else {
			var validateName = false;
			for (var i = 0; i < valueFName.length; i++) {
				var letter = valueFName.substring(i, i + 1);
				if (letter === Number(letter).toString()) {   //revisar
					validateName = true;
					// console.log("es un numero");
					spanFName.textContent = "Only letters allowed";
					spanFName.style.color = "red";
					fName.style.border = "2px solid red";
				}
			}
			if (validateName) {
				// console.log("ingrese solo caracteres");
			} else {
				// console.log("es correcto");
				fName.style.border = "2px solid green";
			}
		}
	}
	function fNameFocus() {
		fName.style.border = "2px solid grey";
		spanFName.textContent = "";
	}
	////////////////////////////////////////LAST NAME
	function lNameBlur() {
		var valueLName = lName.value;
		if (valueLName.length < 4) {
			// console.log("error: debe tener mas de 3 caracteres");
			spanLName.textContent = "Must contain more than 3 characters";
			spanLName.style.color = "red";
			lName.style.border = "2px solid red";
		} else {
			var validateName = false;
			for (var i = 0; i < valueLName.length; i++) {
				var letter = valueLName.substring(i, i + 1);
				if (letter === Number(letter).toString()) {
					validateName = true;
					// console.log("es un numero");
					spanLName.textContent = "Only letters allowed";
					spanLName.style.color = "red";
					lName.style.border = "2px solid red";
				}
			}
			if (validateName) {
				// console.log("ingrese solo caracteres");
			} else {
				// console.log("es correcto");
				lName.style.border = "2px solid green";
			}
		}
	}
	function lNameFocus() {
		lName.style.border = "2px solid grey";
		spanLName.textContent = "";
	}
	//////////////////////////////////////DNI
	function dniBlur() {
		var valueDni = dni.value;
		if (valueDni.length < 8) {
			// console.log("error: debe tener mas de 7 caracteres");
			spanDni.textContent = "Must contain more than 7 characters";
			spanDni.style.color = "red";
			dni.style.border = "2px solid red";
		} else {
			var validateDni = false;
			for (var i = 0; i < valueDni.length; i++) {
				var num = valueDni.substring(i, i + 1);
				// console.log(num);
				if (num !== Number(num).toString()) {
					validateDni = true;
					// console.log("es un letra");
					spanDni.textContent = "Only numbers allowed";
					spanDni.style.color = "red";
					dni.style.border = "2px solid red";
				}
			}
			if (validateDni) {
				// console.log("ingrese solo numeros");
			} else {
				// console.log("es correcto");
				dni.style.border = "2px solid green";
			}
		}
	}
	function dniFocus() {
		dni.style.border = "2px solid grey";
		spanDni.textContent = "";
	}

	////////////////////BIRTHDAY                            cambiar para que no acepte letras!
	function birthdayBlur() {
		var valueBirthday = birthday.value;
		// console.log(birthdayValue);
		var day = valueBirthday.substring(0, 2);
		var slash = valueBirthday.substring(2, 3);
		var month = valueBirthday.substring(3, 5);
		var slash2 = valueBirthday.substring(5, 6);
		var year = valueBirthday.substring(6, 10);
		if (day > 32 || day < 1) {
			// console.log("error");
			spanBirthday.textContent = "Format expected: DD/MM/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (month > 12 || month < 1) {
			// console.log("errorr");
			spanBirthday.textContent = "Format expected: DD/MM/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (year > 2023 || year < 1900) {
			// console.log("errorrr");
			spanBirthday.textContent = "Format expected: DD/MM/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (slash != "/" || slash2 != "/") {
			// console.log("errorrrr");
			spanBirthday.textContent = "Format expected: DD/MM/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (valueBirthday.length > 10) {
			// console.log("muchotexto");
			spanBirthday.textContent = "Format expected: DD/MM/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else {
			birthday.style.border = "2px solid green";
		}
	}
	function birthdayFocus() {
		birthday.style.border = "2px solid grey";
		spanBirthday.textContent = "";
	}

	///////////////////CELLPHONE                 ver por que solo me hace la comprobacion de letras en 10 caracteres
	function phoneBlur() {
		var valuePhone = phone.value;
		if (valuePhone.length != 10) {
			// console.log("error: debe tener 10 caracteres");
			spanPhone.textContent = "Must contain 10 characters";
			spanPhone.style.color = "red";
			phone.style.border = "2px solid red";
		} else {
			var validatePhone = false;
			for (var i = 0; i < valuePhone.length; i++) {
				var num = valuePhone.substring(i, i + 1);
				if (num !== Number(num).toString()) {
					validatePhone = true;
					// console.log("es un letra");
					spanPhone.textContent = "Only numbers allowed";
					spanPhone.style.color = "red";
					phone.style.border = "2px solid red";
				}
			}
			if (validatePhone) {
				// console.log("ingrese solo numeros");
			} else {
				// console.log("es correcto");
				phone.style.border = "2px solid green";
			}
		}
	}
	function phoneFocus() {
		phone.style.border = "2px solid grey";
		spanPhone.textContent = "";
	}

	//////////////////////////////////////ADDRESS

	// function addressBlur() {
	//     addressValid = validateAddress()
	//     if (!addressValid) {
	//       spanAddress.textContent = "The address is invalid";
	//       spanAddress.style.color = "red";
	//       address.style.border = "2px solid red";
	//     } else {
	//       address.style.border = "2px solid green";
	//     }
	// }
	// function addressFocus() {
	//     address.style.border = "2px solid grey";
	//     spanAddress.textContent = "";
	// }
	// function validateAddress() {
	//     var letterSum = 0;
	//     var numberSum = 0;
	//     var valueAddress = address.value;
	//     if (valueAddress.length < 5) {
	//       return false;
	//     } else {
	//       for (i = 0; i < address.value.length; i++) {
	//         if (isNaN(address.value[i])) {
	//           letterSum += 1;
	//         } else {
	//           numberSum += 1;
	//         }
	//       }
	//     }
	//     return (letterSum !== 0 && numberSum !== 0)
	// }

	////////////////////////////////   LOCATION


	///////////////////////////// POSTAL CODE
	function postalCodeBlur() {
		var valuePostalCode = postalCode.value;
		if (valuePostalCode.length < 4 || valuePostalCode.length > 5) {
			// console.log("error: debe tener 4/5 caracteres");
			spanPostalCode.textContent = "Must contain 4 or 5 characters";
			spanPostalCode.style.color = "red";
			postalCode.style.border = "2px solid red";
		} else {
			var validatePostalCode = false;
			for (var i = 0; i < valuePostalCode.length; i++) {
				var num = valuePostalCode.substring(i, i + 1);
				if (num !== Number(num).toString()) {
					validatePostalCode = true;
					// console.log("es un letra");
					spanPostalCode.textContent = "Only numbers allowed";
					spanPostalCode.style.color = "red";
					postalCode.style.border = "2px solid red";
				}
			}
			if (validatePostalCode) {
				// console.log("ingrese solo numeros");
			} else {
				// console.log("es correcto");
				postalCode.style.border = "2px solid green";
			}
		}
	}
	function postalCodeFocus() {
		postalCode.style.border = "2px solid grey";
		spanPostalCode.textContent = "";
	}
	/////////////////////////////// EMAIL
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
	///////////////////////////// PASSWORD
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
	///////////////////////////// REPEAT PASSWORD
	function passRFocus() {
		passR.style.border = "2px solid grey";
		spanPassR.textContent = "";
	}
	function passRBlur() {
		if (passR.value !== pass.value) {// || (passR.value == "")) {
			// console.log("no es igual");
			spanPassR.textContent = "The passwords are different";
			spanPassR.style.color = "red";
			passR.style.border = "2px solid red";
		} else if (passR.value == "") {
			spanPassR.textContent = "At least 8 characters with letters and numbers";
			spanPassR.style.color = "red";
			passR.style.border = "2px solid red";
		} else {
			// console.log("es igual");
			passR.style.border = "2px solid green";
		}
	}


}