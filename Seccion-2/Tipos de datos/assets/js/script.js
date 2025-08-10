
/* 

 Existen 6 tipos de datos primitivos en JavaScript 

 • String - Una cadena de caracteres, ej: Palabras, nombre de personas
 • Boolean : true / false :: Verdadero y Falso
 • Number - integers,floats, etc... Todo dato númerico
 • Undefined - Una variable declarada que aún no se le asigna valor
 • Null - Sin valor en lo absoluto (No confundir con Undefined)
 • Symbol - Es un valor único que no es igual a ningún otro valor

*/

// •String

let nombre = 'Peter Parker';
console.log(nombre);

// Otras formas de asignar a una variable un string

nombre = "Tía May"; // Un error común es tratar de re-iniciarlizar nuestra variable de esta manera let nombre = "Tia May" lo cual esta mal incluso incurre en un error de consola ya que nuestra variable en este caso en la linea 17 ya fue inicializada.

nombre = `Tia May`;

// ¿Como saber el tipo de dato al que apunta una variable?

console.log(typeof nombre); // Utilizando typeof podemos saber que tipo de dato aloja la variable

// • Boleans 

let esMarvel = true;

console.log(typeof esMarvel);

// • Number 

let edad = 28;
console.log(typeof edad);

// • Undefined 

let superPoder;
console.log(typeof superPoder);

// • Null

let soyNull = null;
console.log(typeof soyNull);



// • Symbol

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);
console.log (symbol1 === symbol2);


