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
    var submit = document.getElementById("submitId");

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
    pass.addEventListener("focus", passlFocus);
    pass.addEventListener("blur", passBlur);
    passR.addEventListener("focus", passRFocus);
    passR.addEventListener("blur", passRBlur);








}