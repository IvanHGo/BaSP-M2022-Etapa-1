// Funciones

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
function suma (num1, num2) {
    return num1 + num2;
}
var resultFunA = suma(33, 77);
console.log('\n-Exercise 6.a:');
console.log(resultFunA);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
function sumaB (x, y) {
    var x = "diez";
    var y = 20;
    var addition = x + y;
    if (typeof x != "number" || typeof y != "number") {
        alert("Resultado:NaN. Uno de los parámetros no es un número.")
        console.log(NaN);
    } else {
        alert("El resultado de la suma es: " + addition)
        console.log(addition);
    }
    /* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
    probando que todo siga funcionando igual. */
    if (Number.isInteger(addition)) {
        alert(addition + ": el resultado es un número entero.")
    } else if 
        (addition = Math.round(addition)) {
            alert(addition + ": el resultado contenía decimales, ha sido redondeado.")
        }
}
console.log('\n-Exercise 6.b:');
sumaB();

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un
número entero. */
function funcC (decNum) {
    var decNum = 12;
    if (Number.isInteger(decNum)) {
        console.log(decNum + (": el resultado es un número entero"))
    } else {
        console.log(decNum + (": el resultado contiene decimales"))
    }
}
console.log('\n-Exercise 6.c:');
funcC();

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
function sumaD (x, y) {
    var x = (Math.random() * 100);
    var y = (Math.random() * 101);
    var addition = x + y;
    if (Number.isInteger(addition)) {
        alert(addition + ": el resultado es un número entero.")
        console.log(addition + ": el resultado es un número entero.")
    } else if 
        (addition = Math.round(addition)) {
            alert(addition + ": el resultado contenía decimales, ha sido redondeado.")
            console.log(addition + ": el resultado contenía decimales, ha sido redondeado.")
        }
}
console.log('\n-Exercise 6.d:');
sumaD();