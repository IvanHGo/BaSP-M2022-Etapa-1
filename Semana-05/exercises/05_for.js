//05. For

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para
mostrar una alerta utilizando cada una de las palabras. */
var exeForA = ["chaco", "cordoba", "jujuy", "mendoza", "corrientes"];
console.log('\n-Exercise 5.a:');
for (var i = 0; i < exeForA.length; i++){
	alert(exeForA[i]);
	console.log(exeForA[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada
palabra modificada. */
var resultForB;
console.log('\n-Exercise 5.b:');
for (var y = 0; y < exeForA.length; y++){
	resultForB = exeForA[y].substring(0, 1).toUpperCase() + exeForA[y].substring(1).toLowerCase();
	alert(resultForB);
	console.log(resultForB);
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
cadena completa. */
var sentence = "";
console.log('\n-Exercise 5.c:');
for (var x = 0; x < exeForA.length; x++){
	sentence = sentence + " " + exeForA[x];
}
alert(sentence);
console.log(sentence);

/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el
número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */
var exeForD = [];
console.log('\n-Exercise 5.d:');
for (var z = 0; z < 10; z++){
	exeForD.push(z);
}
console.log(exeForD);