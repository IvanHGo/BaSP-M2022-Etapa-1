window.onload = function () {
	var fName = document.getElementById("nameId");
	var confirmFName = false;
	var lName = document.getElementById("lNameId");
	var confirmLName = false;
	var dni = document.getElementById("dniId");
	var confirmDni = false;
	var birthday = document.getElementById("birthdayId");
	var confirmBirthday = false;
	var phone = document.getElementById("phoneId");
	var confirmPhone = false;
	var address = document.getElementById("addressId");
	var confirmAddress = false;
	var location = document.getElementById("locationId");
	var confirmLocation = false;
	var postalCode = document.getElementById("postalCodeId");
	var confirmPostalCode = false;
	var email = document.getElementById("emailId");
	var confirmEmail = false;
	var pass = document.getElementById("passwordId");
	var confirmPass = false;
	var passR = document.getElementById("passwordRId");
	var confirmPassR = false;
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
	var submit = document.getElementById("submitId");
	var mailFormat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/;
	var mailValid = false;
	var passValid = false;

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
	address.addEventListener("focus", addressFocus);
	address.addEventListener("blur", addressBlur);
	location.addEventListener("focus", locationFocus);
	location.addEventListener("blur", locationBlur);
	postalCode.addEventListener("focus", postalCodeFocus);
	postalCode.addEventListener("blur", postalCodeBlur);
	email.addEventListener("focus", emailFocus);
	email.addEventListener("blur", emailBlur);
	pass.addEventListener("focus", passFocus);
	pass.addEventListener("blur", passBlur);
	passR.addEventListener("focus", passRFocus);
	passR.addEventListener("blur", passRBlur);
	submit.addEventListener("click", submitClick);

	///////////////////////////FIRST NAME
	function fNameBlur() {
		var valueFName = fName.value;
		if (valueFName.length < 4) {
			confirmFName = false;
			// console.log("error: Must contain more than 3 characters");
			spanFName.textContent = "Must contain more than 3 characters";
			spanFName.style.color = "red";
			fName.style.border = "2px solid red";
		} else {
			var validateName = false;
			for (var i = 0; i < valueFName.length; i++) {
				var letter = valueFName.substring(i, i + 1);
				if (letter === Number(letter).toString()) {
					validateName = true;
					// console.log("there is a number");
					spanFName.textContent = "Only letters allowed";
					spanFName.style.color = "red";
					fName.style.border = "2px solid red";
				}
			}
			if (validateName) {
				confirmFName = false;
				// console.log("error");
			} else {
				confirmFName = true;
				// console.log("correct");
				fName.style.border = "2px solid green";
			}
		}
	}
	function fNameFocus() {
		fName.style.border = "2px solid grey";
		spanFName.textContent = "";
	}
	/////////////////////LAST NAME
	function lNameBlur() {
		var valueLName = lName.value;
		if (valueLName.length < 4) {
			confirmLName = false;
			// console.log("error: Must contain more than 3 characters");
			spanLName.textContent = "Must contain more than 3 characters";
			spanLName.style.color = "red";
			lName.style.border = "2px solid red";
		} else {
			var validateName = false;
			for (var i = 0; i < valueLName.length; i++) {
				var letter = valueLName.substring(i, i + 1);
				if (letter === Number(letter).toString()) {
					validateName = true;
					// console.log("there is a number");
					spanLName.textContent = "Only letters allowed";
					spanLName.style.color = "red";
					lName.style.border = "2px solid red";
				}
			}
			if (validateName) {
				confirmLName = false;
				// console.log("error");
			} else {
				confirmLName = true;
				// console.log("correct");
				lName.style.border = "2px solid green";
			}
		}
	}
	function lNameFocus() {
		lName.style.border = "2px solid grey";
		spanLName.textContent = "";
	}
	///////////////////////////////////DNI
	function dniBlur() {
		var valueDni = dni.value;
		if (valueDni.length < 8) {
			confirmDni = false;
			// console.log("error: must contain more than 7 characters");
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
					// console.log("there is a letter");
					spanDni.textContent = "Only numbers allowed";
					spanDni.style.color = "red";
					dni.style.border = "2px solid red";
				}
			}
			if (validateDni) {
				confirmDni = false;
				// console.log("error");
			} else {
				confirmDni = true;
				// console.log("correct");
				dni.style.border = "2px solid green";
			}
		}
	}
	function dniFocus() {
		dni.style.border = "2px solid grey";
		spanDni.textContent = "";
	}
	////////////////////////////// BIRTHDAY
	function birthdayBlur() {
		var valueBirthday = birthday.value;
		// console.log(birthdayValue);
		var month = valueBirthday.substring(0, 2);
		var slash = valueBirthday.substring(2, 3);
		var day = valueBirthday.substring(3, 5);
		var slash2 = valueBirthday.substring(5, 6);
		var year = valueBirthday.substring(6, 10);
		if (day > 32 || day < 1) {
			// console.log("error");
			confirmBirthday = false;
			spanBirthday.textContent = "Format expected: MM/DD/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (month > 12 || month < 1) {
			// console.log("errorr");
			confirmBirthday = false;
			spanBirthday.textContent = "Format expected: MM/DD/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (year > 2023 || year < 1900) {
			// console.log("errorrr");
			confirmBirthday = false;
			spanBirthday.textContent = "Format expected: MM/DD/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (slash != "/" || slash2 != "/") {
			// console.log("errorrrr");
			confirmBirthday = false;
			spanBirthday.textContent = "Format expected: MM/DD/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else if (valueBirthday.length > 10) {
			// console.log("excess characters");
			confirmBirthday = false;
			spanBirthday.textContent = "Format expected: MM/DD/YYYY";
			spanBirthday.style.color = "red";
			birthday.style.border = "2px solid red";
		} else {
			confirmBirthday = true;
			birthday.style.border = "2px solid green";
		}
	}
	function birthdayFocus() {
		birthday.style.border = "2px solid grey";
		spanBirthday.textContent = "";
	}
	///////////////////CELLPHONE
	function phoneBlur() {
		var valuePhone = phone.value;
		if (valuePhone.length != 10) {
			confirmPhone = false;
			// console.log("error: must contain 10 characters");
			spanPhone.textContent = "Must contain 10 characters";
			spanPhone.style.color = "red";
			phone.style.border = "2px solid red";
		} else {
			var validatePhone = false;
			for (var i = 0; i < valuePhone.length; i++) {
				var num = valuePhone.substring(i, i + 1);
				if (num !== Number(num).toString()) {
					validatePhone = true;
					// console.log("there is a letter");
					confirmPhone = false;
					spanPhone.textContent = "Only numbers allowed";
					spanPhone.style.color = "red";
					phone.style.border = "2px solid red";
				}
			}
			if (validatePhone) {
				confirmPhone = false;
				// console.log("error");
			} else {
				// console.log("correct");
				confirmPhone = true;
				phone.style.border = "2px solid green";
			}
		}
	}
	function phoneFocus() {
		phone.style.border = "2px solid grey";
		spanPhone.textContent = "";
	}
	//////////////////////////////ADDRESS
	function addressFocus() {
		address.style.border = "2px solid grey";
		spanAddress.textContent = "";
	}
	function addressBlur() {
		var validos = " abcdefghijklmnopqrstuvwxyz";
		var valueAddress = address.value;
		if (valueAddress.length < 5) {
			confirmAddress = false;
			spanAddress.textContent =
				"The address should contain at least 5 characters";
			spanAddress.style.color = "red";
			address.style.border = "2px solid red";
		} else if (valueAddress.indexOf(" ") == -1) {
			confirmAddress = false;
			spanAddress.textContent = "The address should contain an space between";
			spanAddress.style.color = "red";
			address.style.border = "2px solid red";
		} else {
			var letterSum = 0;
			var numberSum = 0;
			var spaceSum = 0;
			for (var i = 0; i < valueAddress.length; i++) {
				var letter = valueAddress.substring(i, i + 1);
				letter.toLowerCase();
				var code = letter.charCodeAt();
				if (letter == Number(letter) && code != 32) {
					numberSum += 1;
				} else if (validos.indexOf(letter) != -1) {
					letterSum += 1;
				} else if (code == 32) {
					spaceSum += 1;
				}
			}
			if (letterSum == 0 || numberSum == 0) {
				confirmAddress = false;
				spanAddress.textContent = "Address should contain letters and numbers";
				spanAddress.style.color = "red";
				address.style.border = "2px solid red";
			} else if (letterSum + numberSum + spaceSum == valueAddress.length) {
				confirmAddress = true;
				address.style.border = "2px solid green";
			} else {
				confirmAddress = false;
				spanAddress.textContent = "Address contain invalid characters";
				spanAddress.style.color = "red";
				address.style.border = "2px solid red";
			}
		}
	}
	/////////////////////   LOCATION
	function locationFocus() {
		location.style.border = "2px solid grey";
		spanLocation.textContent = "";
	}
	function locationBlur() {
		var valueLocation = location.value;
		if (valueLocation.length < 4) {
			// console.log("more than 3 characters");
			confirmLocation = false;
			spanLocation.textContent = "Must contain more than 3 characters";
			spanLocation.style.color = "red";
			location.style.border = "2px solid red";
		} else {
			confirmLocation = true;
			location.style.border = "2px solid green";
		}
	}

	///////////////////////////// POSTAL CODE
	function postalCodeBlur() {
		var valuePostalCode = postalCode.value;
		if (valuePostalCode.length < 4 || valuePostalCode.length > 5) {
			confirmPostalCode = false;
			// console.log("must contain 4 or 5 characters");
			spanPostalCode.textContent = "Must contain 4 or 5 characters";
			spanPostalCode.style.color = "red";
			postalCode.style.border = "2px solid red";
		} else {
			var validatePostalCode = false;
			for (var i = 0; i < valuePostalCode.length; i++) {
				var num = valuePostalCode.substring(i, i + 1);
				if (num !== Number(num).toString()) {
					validatePostalCode = true;
					// console.log("there are letters");
					spanPostalCode.textContent = "Only numbers allowed";
					spanPostalCode.style.color = "red";
					postalCode.style.border = "2px solid red";
				}
			}
			if (validatePostalCode) {
				confirmPostalCode = false;
				// console.log("error");
			} else {
				// console.log("correct");
				confirmPostalCode = true;
				postalCode.style.border = "2px solid green";
			}
		}
	}
	function postalCodeFocus() {
		postalCode.style.border = "2px solid grey";
		spanPostalCode.textContent = "";
	}
	//////////////////////////// EMAIL
	function emailFocus() {
		email.style.border = "2px solid grey";
		spanEmail.textContent = "";
	}
	function emailBlur() {
		mailValid = mailFormat.test(email.value);
		if (!mailValid) {
			confirmEmail = false;
			spanEmail.textContent = "The email is invalid";
			spanEmail.style.color = "red";
			email.style.border = "2px solid red";
		} else {
			confirmEmail = true;
			email.style.border = "2px solid green";
		}
	}
	///////////////////////////// PASSWORD
	function passFocus() {
		pass.style.border = "2px solid grey";
		spanPass.textContent = "";
	}
	function passBlur() {
		passValid = validatePassword();
		if (!passValid) {
			confirmPass = false;
			spanPass.textContent = "At least 8 characters with letters and numbers";
			spanPass.style.color = "red";
			pass.style.border = "2px solid red";
		} else {
			confirmPass = true;
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
		return letterSum !== 0 && numberSum !== 0;
	}
	///////////////////////////// REPEAT PASSWORD
	function passRFocus() {
		passR.style.border = "2px solid grey";
		spanPassR.textContent = "";
	}
	function passRBlur() {
		if (passR.value !== pass.value) {
			// console.log("different password");
			confirmPassR = false;
			spanPassR.textContent = "The passwords are different";
			spanPassR.style.color = "red";
			passR.style.border = "2px solid red";
		} else if (passR.value == "") {
			confirmPassR = false;
			spanPassR.textContent = "At least 8 characters with letters and numbers";
			spanPassR.style.color = "red";
			passR.style.border = "2px solid red";
		} else {
			// console.log("same password");
			confirmPassR = true;
			passR.style.border = "2px solid green";
		}
	}
	// function submitClick(e) {
	// 	e.preventDefault();
	// if (confirmFName == 1 && confirmLName == 1 && confirmDni == 1 && confirmBirthday == 1 && confirmPhone == 1
	// 	&& confirmAddress == 1 && confirmLocation == 1 && confirmPostalCode == 1 && confirmEmail == 1
	// 	&& confirmPass == 1 && confirmPassR == 1) {
	// alert("The sign-up has been successful!\nFirst name: " + fName.value + "\nLast name: " + lName.value +
	// 	"\nDNI: " + dni.value + "\nBirthday: " + birthday.value + "\nCellphone: " + phone.value + "\nAddress: " +
	// 	address.value + "\nLocation: " + location.value + "\nPostal code: " + postalCode.value + "\nEmail: " +
	// 	email.value + "\nPassword: " + pass.value);
	// 	} else {
	// 		alert("ERROR\nPlese verify the information\nSome input must contain a mistake");
	// 	}
	// }
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	// var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";
	// url = url + "?name=" + fName.value + "&lastName=" + lName.value + "&dni=" + dni.value + "&dob=" + birthday.value
	// + "&phone=" + phone.value + "&address=" + address.value + "&city=" + location.value + "&zip=" + postalCode.value
	// + "&email=" + email.value + "&password=" + pass.value;
	// console.log(url);

	function submitClick(e) {                                            //template literales
		lStorage();
		var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";
		url =
			url +
			"?name=" +
			fName.value +
			"&lastName=" +
			lName.value +
			"&dni=" +
			dni.value +
			"&dob=" +
			birthday.value +
			"&phone=" +
			phone.value +
			"&address=" +
			address.value +
			"&city=" +
			location.value +
			"&zip=" +
			postalCode.value +
			"&email=" +
			email.value +
			"&password=" +
			pass.value;
		e.preventDefault();
		if (
			!confirmFName ||
			!confirmLName ||
			!confirmDni ||
			!confirmBirthday ||
			!confirmPhone ||
			!confirmAddress ||
			!confirmLocation ||
			!confirmPostalCode ||
			!confirmEmail ||
			!confirmPass ||
			!confirmPassR
		) {
			fetch(url)
				.then(function (response) {
					return response.json();
				})
				.then(function (responseJson) {
					alert(responseJson.errors[0].msg);
				});
		} else {
			fetch(url)
				.then(function (response) {
					return response.json();
				})
				.then(function (responseJson) {       //template literales
					alert(responseJson.msg + "\nFirst name: " + fName.value + "\nLast name: " + lName.value +
						"\nDNI: " + dni.value + "\nBirthday: " + birthday.value + "\nCellphone: " + phone.value + "\nAddress: " +
						address.value + "\nLocation: " + location.value + "\nPostal code: " + postalCode.value + "\nEmail: " +
						email.value + "\nPassword: " + pass.value);
				});
		}
	}

	function lStorage () {
		localStorage.setItem("name", fName.value);
		localStorage.setItem("lastName", lName.value);
		localStorage.setItem("dni", dni.value);
		localStorage.setItem("dob", birthday.value);
		localStorage.setItem("phone", phone.value);
		localStorage.setItem("address", address.value);
		localStorage.setItem("city", location.value);
		localStorage.setItem("zip", postalCode.value);
		localStorage.setItem("email", email.value);
		// localStorage.setItem("password", pass.value); //pasword?
		// localStorage.setItem("password", .value); //repeat pass??
	}
	
	if (
		localStorage.getItem("name") != null &&
		localStorage.getItem("lastName") != null &&
		localStorage.getItem("dni") != null &&
		localStorage.getItem("dob") != null &&
		localStorage.getItem("phone") != null &&
		localStorage.getItem("address") != null &&
		localStorage.getItem("city") != null &&
		localStorage.getItem("zip") != null &&
		localStorage.getItem("email") != null
	) {
		fName.value = localStorage.getItem("name");
		lName.value = localStorage.getItem("lastName");
		dni.value = localStorage.getItem("dni");
		birthday.value = localStorage.getItem("dob");
		phone.value = localStorage.getItem("phone");
		address.value = localStorage.getItem("address");
		location.value = localStorage.getItem("city");
		postalCode.value = localStorage.getItem("zip");
		email.value = localStorage.getItem("email");
	}





}