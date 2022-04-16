/* 01. Variables y Operadores
a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length). */

// 01_a.
var num1 = 42;
var num2 = 24;
var addition = num1 + num2;
console.log('\n-Exercise 1.a:');
console.log(addition);

// 01_b.
var firstName = "Iván ";
var lastName = "Gobbi";
var fullName = firstName + lastName;
console.log('\n-Exercise 1.b:');
console.log(fullName);

// 01_c.
var colour1 = "Yellow";
var colour2 = "Blue";
var result = colour1.length + colour2.length;
console.log('\n-Exercise 1.c:');
console.log(result);