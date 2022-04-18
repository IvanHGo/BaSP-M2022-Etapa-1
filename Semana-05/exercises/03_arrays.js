// Arrays

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

/*************************************************************************************************
*nota: la consigna no me deja claro si pide los meses nº5 y 11 del calendario(mayo y noviembre) o si pide los de 
*posicion 5 y 11; de ser así la respuesta sería console.log(arraysA[5], arraysA[11]);
**************************************************************************************************/
var arraysA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
console.log('\n-Exercise 3.a:');
console.log(arraysA[4], arraysA[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
arraysA.sort();
console.log('\n-Exercise 3.b:');
console.log(arraysA);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
arraysA.unshift("verano");
arraysA.push("invierno");
console.log('\n-Exercise 3.c:');
console.log(arraysA);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */
arraysA.shift();
arraysA.pop();
console.log('\n-Exercise 3.d:');
console.log(arraysA);

/* e. Invertir el orden del array (utilizar reverse). */
arraysA.reverse();
console.log('\n-Exercise 3.e:');
console.log(arraysA);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar
join). */
var resultArrF = arraysA.join("-");
console.log('\n-Exercise 3.f:');
console.log(resultArrF);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
arraysA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
"Noviembre", "Diciembre"];
var resultArrG = arraysA.slice(4, 11);
console.log('\n-Exercise 3.g:');
console.log(resultArrG);