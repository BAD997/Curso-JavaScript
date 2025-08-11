/*
    ¿Que son los arreglos?

    Son un objeto muy parecido a una lista de información, que contiene un grupo de elementos.
    Usualmente, esa información dentro del arreglo es del mismo tipo de dato. 

    Ejemplo : 

    let videoJuegos = ['Mario 3', 'Megaman','Chrono Trigger'];

    Nota: Los arreglos en JavaScript empiezan desde el indice o posición 'cero' '0'.

    Si quisieramos hacer referencia al primer juego dentro de nuestro arreglo tendriamos que hacer de la siguiente manera videoJuegos[1]
    
*/


// Formas de crear un arreglo 

const arr1 = new Array(10); // Esta forma no es muy común pero vale la pena saber que existe.
console.log(arr1);

const arr2 = []; // Esta es la forma mas común de crear un arreglo en la actualidad.
console.log(arr2);

let videoJuegos = ['Mario 3', 'Megaman','Chrono Trigger'];

// De esta forma imprimimos en consola el arreglo
console.log({videoJuegos});

// Si quisieramos imprimir solo un elemento dentro del arreglo lo hacemos de la siguiente forma: 

console.log(videoJuegos[0]); // El elemento en la posicion cero es Mario 3 esto es lo que se imprime en consola. 

// En JavaScript un arreglo puede estar constituido por elementos de diferentes tipos como podemos observar en el siguiente ejemplo.

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){}, // Un arreglo puede contener funciones
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr. Light']
];

console.log(arregloCosas[7][3]); // Imprime el elemento en la posición 7 del arreglo ya que ese elemento es un arreglo podemos ubicar elementos dentro de ese arreglo contenido usando otro corchete en este caso hacemos referencia al ultimo elemento que se encuentra en la posición 3 Dr. Light.

/*
   - Propiedades y metodos de los arreglos

   En JavaScript, los arreglos (arrays) tienen varias propiedades importantes que permiten manipular y obtener información sobre ellos. La propiedad más común es length, que indica la cantidad de elementos en el arreglo. Además, los arreglos son objetos y tienen acceso a propiedades y métodos definidos en su prototipo, como push, pop, map, entre otros. 

   los métodos de los arreglos son funciones predefinidas que se pueden utilizar para manipular y trabajar con arreglos. Estos métodos ofrecen diversas funcionalidades para agregar, eliminar, transformar y buscar elementos dentro de un arreglo de manera eficiente. 


*/



let juegos = ['Free fire', 'Warzone','Roblox', 'Call of Duty'];

// La propiedad length nos permite  saber cuantos elementos componen el arreglo:

console.log('Largo:',juegos.length); // En este caso imprime 4 

// De esta manera podemos saber cual es el primer y  ultimo elemento de nuestro arreglo: 

let primero = juegos[2-2]; // Este calculo matematico nos indica la posicion del elemento en este caso 2-2 = 0 o sea hace referencia a el elemento en la posicion 0 de nuestro arreglo por consiguiente imprime 'Free fire'. 

let ultimo = juegos[juegos.length - 1]; 

console.log({primero, ultimo});

// El metodo forEach() nos permite barrer cada uno de los elementos que componen nuestro arreglo:

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento,indice,arr});
});

// El metodo Push() nos permite añadir un elemento al final de nuestro arreglo:

let nuevaLongitud = juegos.push('F-Zero');

console.log({nuevaLongitud,juegos});

// El metodo unshift() nos permite añadir un nuevo elemento al inicio de nuestro arreglo: 

nuevaLongitud = juegos.unshift('Candy Crush');

console.log({nuevaLongitud,juegos});

// El metodo pop() nos permite eliminar un elemento de nuestro arreglo: 

let juegoBorrado = juegos.pop();

console.log({juegoBorrado , juegos});

// El metodo splice() nos permite borrar un elemento de nuestro arreglo segun su posicion dentro del mismo.

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});








