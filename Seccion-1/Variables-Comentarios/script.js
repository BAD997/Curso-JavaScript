// Comentarios: Son lineas de codigo que el interprete de Javascript va a ignorar a la hora de ejecutarse 
// Usos : Describir funcionamiento de funciones o lineas de codigo o en si marcar pendientes durante el desarrollo


console.log('Variables y comentarios en JavaScript');

// Variables : Es un contenedor de informacián que apunta a un lugar en memoria
// Formas de declarar una variable:

let a = 10; // Toda variable inicializada con let se puede modificar su valor sin ningun tipo de problema.
var b = 10; // En la actualidad no se utiliza esta forma de declarar variables porque puede comprometer el desarrollo que estemos realizando, causando bug o fallos. 
const c = 10; // 'const' hace referencia a una variable cuyo valor no puede ser modificado

a = 350;// Esta es la forma correcta de asignar un nuevo valor a una variable que lo permita, 

b = 100; //

// En el caso de querer asignar un nuevo valor a 'c', como veremos a continuacion (c = 20;) nos arrojará un error en consola

// Las variables puedes ser utilizadas para realizar calculos:

console.log(`Variables 'a'= ${a} y 'b'= ${b}`);
console.log('Calculos con variables: ');
console.log(`El resultado de ${a} - ${b} es ${a-b}`);


// Mas ejemplos formas de inicializar variables : 

let x = 15;
let y = 25;
let z = 32;

let xyz = x + y + z;

console.log(`El resultado es ${xyz}`)

// Forma corta para inicializar variables : 

let t = 10,
    g = 52,
    u = 25;
    tgu = t*g-u;
console.log(`El resultado es ${tgu}`);