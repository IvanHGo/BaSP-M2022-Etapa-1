// 02. Strings

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase). */
var text = "hello my name is chaky";
console.log('\n-Exercise 2.a:');
console.log(text.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var exeStrB, resultStrB;
exeStrB = "this is a test string";
resultStrB = exeStrB.substring(0, 5);
console.log('\n-Exercise 2.b:');
console.log(resultStrB);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var exeStrC, resultStrC;
exeStrC = "lorem ipsum text";
resultStrC = exeStrC.substring(16, 13);
console.log('\n-Exercise 2.c:');
console.log(resultStrC);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +). */
var exeStrD, resultStrD;
exeStrD = "irrelevant text";
resultStrD = exeStrD.substring(0, 1).toUpperCase() + exeStrD.substring(1).toLowerCase();
console.log('\n-Exercise 2.d:');
console.log(resultStrD);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var exeStrE, resultStrE;
exeStrE = "irrelevant string";
resultStrE = exeStrE.indexOf(" ");
console.log('\n-Exercise 2.e:');
console.log(resultStrE);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +). */
var exeStrF, resultStrF;
exeStrF = "repúBlicA argentina"
resultStrF = exeStrF.substring(0, 1).toUpperCase() + exeStrF.substring(1, exeStrF.indexOf(" ")+1).toLowerCase() +
     exeStrF.substring(exeStrF.indexOf(" ")+1, exeStrF.indexOf(" ")+2).toUpperCase() +
     exeStrF.substring(exeStrF.indexOf(" ")+2).toLowerCase();
console.log('\n-Exercise 2.f:');
console.log(resultStrF);