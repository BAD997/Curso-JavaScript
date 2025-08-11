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












