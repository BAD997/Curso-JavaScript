/*
    ¿Que son las funciones en Javascript? 

    En JavaScript, una función es un bloque de código reutilizable que realiza una tarea específica y puede ser llamado o invocado desde diferentes partes del código. Funciona como un procedimiento que toma entradas (parámetros) y puede devolver una salida. Las funciones son objetos de primera clase en JavaScript, lo que significa que pueden ser tratadas como cualquier otro objeto, asignadas a variables, pasadas como argumentos a otras funciones y devueltas como valores. 
*/

// Ejemplo de una funcion básica:

function saludar(){
    console.log('Hola Mundo desde una funcion básica');
}

saludar();

// Funcion anónima

const saludoDos = function(){
    console.log('Hola Mundo desde una funcion anónima');
    
}

saludoDos();

// Argumentos de una funcion

function saludoInicial(UserName){
    console.log('Hola Bienvenido! ',UserName);
    
}

saludoInicial('Breiner Abello')


// Funciones de flechas

const MensajeDespedida = (UserName) => {
    console.log('Hasta pronto ',UserName);
    
}

MensajeDespedida('Breiner');

// Retorno de las funciones

// NOTA: Cuando se tiene una funcion y dicha funcion no tenga un return explicito lo que se retorna es undefined.

function funretor(){
    console.log('Mensaje 1');
    return 10 ;
    console.log('Soy un codigo que está despues de un return'); // Importante saber que todo el codigo que esté despues del return de la funcion no se ejecutará en nuestro programa. 
    
}

const retorno =  funretor();
console.log({retorno});

/*
    Se puede retornar cualquier cosa por ejemplo un arreglo:
*/

const mifuncion = () => {
    return [1,2,3,4,5];
}

const retor = mifuncion();

console.log({retor}); // imprime el retorno de nuestra funcion miFuncion 


// Ejercicios: 


// Nota: Cuando tenemos una funcion de flecha que solo contiene una linea y esa linea es  un return podemos resumirla de la siguiente manera. 

// const sumar = (a,b) => { 
//     return a + b; // Retorna la suma de los dos argumentos. 
// }

// #1 
const sumar = (a,b) =>  a + b; // Retorna la suma de los dos argumentos. 
console.log(sumar(8,2));

// #2
const getAleatorio = () => Math.random();
console.log(getAleatorio());


/*
    Protips para mejorar nuestra forma de codificar y estructurar funciones

    Funcion básica para crear una persona y retornar un objeto persona

    Cuando queremos retornar algo en un objeto y el nombre de la propiedad es  exactamente igual al nombre de la variable a la cual se quiere hacer la impresion no hace falta de la siguiente manera:
    nombre:nombre,
    apellido: apellido,
    
    Podemos hacer lo siguiente: 
*/

const crearPersona =  (nombre, apellido ) => ({nombre,apellido}); // Estos parentesis indican a JavaScript que lo que queremos regresar es todo lo que esta dentro de parentesis como objeto. 
 
const persona = crearPersona('Breiner', ' Abello');

console.log(persona);

// Uso del parametro Rest: La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array, consideraciones, #1 despues del parametro Rest no puede haber ningun otro argumento, #2 Si necesitas extraer una variable antes del parametro Rest entonces dicha variable tendra su propio valor independiente.

const imprimeArgumentos = (edad,...arguments) => { 
    // console.log({edad,arguments});
    return arguments;
}

/*
 Este es un ejemplo de desestructuración de arrays. El código toma el array que devuelve imprimeArgumentos() y asigna cada valor del array a una variable, siguiendo el orden.
*/

const [casado, vivo, nombre, saludo] = imprimeArgumentos(10,true,false, 'Breiner', 'Hola');

console.log({casado, vivo, nombre, saludo});

/*

    Este es un ejemplo de desestructuración de objetos. El código toma el objeto que devuelve crearPersona() y extrae solo la propiedad apellido, asignando su valor a una nueva variable llamada apellido.

*/

const {apellido} = crearPersona('Breiner', ' Abello');

console.log({apellido});

// En caso de querer cambiarle el nombre a la variable...

const {apellido:nuevoApellido} = crearPersona('Breiner', 'Dominguez');

console.log({nuevoApellido});

// Desestructuración de argumentos

const tony = {

    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
    
};

const imprimePropiedades = ({nombre,codeName,vivo,edad,trajes}) => { 
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);
