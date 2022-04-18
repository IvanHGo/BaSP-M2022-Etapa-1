// 04. if Else

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que
0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. */
var randomNum = Math.random();
console.log('\n-Exercise 4.a:');
if (randomNum >= 0.5) {
	window.alert(randomNum + " is greater than 0,5");
	console.log(randomNum + " is greater than 0,5");
} else {
	window.alert(randomNum + " is lower than 0,5");
	console.log(randomNum + " is lower than 0,5");
}

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes
de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;(creo que aca debería ser entre 61 y 74 años)
“Anciano” si es mayor a 75 años. */
var Age = Math.random() * 100;
console.log('\n-Exercise 4.b:');
if (Age < 2) {
	window.alert(Age + " de edad corresponde a un bebe");
	console.log(Age + " de edad corresponde a un bebe");
} else if ((Age >= 2) && (Age < 13)) {
	window.alert(Age + " de edad corresponde a un niño");
	console.log(Age + " de edad corresponde a un niño");
} else if ((Age >= 13) && (Age < 20)) {
	window.alert(Age + " de edad corresponde a un adolescente");
	console.log(Age + " de edad corresponde a un adolescente");
} else if ((Age >= 20) && (Age < 31)) {
	window.alert(Age + " de edad corresponde a un joven");
	console.log(Age + " de edad corresponde a un joven");
} else if ((Age >= 31) && (Age < 61)) {
	window.alert(Age + " de edad corresponde a un adulto");
	console.log(Age + " de edad corresponde a un adulto");
} else if ((Age >= 61) && (Age < 75)) {
	window.alert(Age + " de edad corresponde a un adulto mayor");
	console.log(Age + " de edad corresponde a un adulto mayor");
} else {
	window.alert(Age + " de edad corresponde a un anciano");
	console.log(Age + " de edad corresponde a un anciano");
}