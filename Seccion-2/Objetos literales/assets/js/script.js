// /*
 
//     ¿Que son los objetos literales?

//     En JavaScript, un objeto literal es una forma concisa de definir un objeto directamente en el código utilizando la sintaxis de llaves {}. Este objeto se compone de pares clave-valor, donde cada clave (o propiedad) está asociada a un valor. Los objetos literales son una manera rápida y sencilla de crear objetos con datos específicos. 

// */

// const personaje = {

//     nombre: 'Tony Stark',
//     codeName: 'Ironman',
//     vivo: false,
//     edad:40,
//     coords: {
//         lat:34.034,
//         lng: -118.70
//     },
//     trajes: [
//         'Mark I',
//         'Mark V',
//         'Hulkbuster'
//     ],
//     direccion: {
//         zip: '1080, 90265',
//         ubicacion: 'Malibu, California'
//     },
//     'Ultima-Pelicula': 'Infinity War',
// };

// console.log(personaje);


// // Formas de  acceder a las propiedades del objeto

// console.log('Nombre: ',personaje.nombre);
// console.log('Code name: ',personaje['codeName']);
// console.log('Edad: ',personaje.edad);


// // Forma de acceder a las propiedades anidadas de un objeto

// console.log('Coors: ',personaje.coords);
// console.log('Lat: ',personaje.coords.lat);

// console.log('No. Trajes', personaje.trajes.length);

// console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1]);

// const x = 'vivo';

// console.log('Vivo:', personaje[x]);

// console.log('Ultima Pelicula: ',personaje["Ultima-Pelicula"] );

// // Más detalles

// //Eliminar una propiedad de un  objeto : 


// delete personaje.edad;

// console.log(personaje); // Imprime nuestr objeto y podemos revisar que la propiedad edad no existe, fue borrada.


// // Crear una nueva propiedad en el objeto:
// personaje.casado = true;

// // Trabajar nuestro objeto como si fuera un arreglo: 
// const entriesPares = Object.entries(personaje);
// console.log(entriesPares);

// // Para hacer un bloqueo de las propiedades o modificaciones utilamos la siguiente instrucción.

// Object.freeze(personaje);

// personaje.dinero = 100000000000;
// personaje.casado = false;

// console.log(personaje);


// // Nota : El metodo freeze bloquea la modificacion de propiedades directas del objeto pero no a los objetos que estan dentro del objeto principal 


// personaje.direccion.ubicacion = 'Costa Rica';
// console.log(personaje);


// // Listar las propiedades y valores de un objeto: 

// const propiedades = Object.getOwnPropertyNames(personaje);
// const valores     = Object.values(personaje);
// console.log({propiedades, valores});


// Valor, referencia y romper la referencia

 let a = 10;

 let b = a;

 console.log({a,b}); // Imprime en consola a = 10 y b = 10

 a = 30;

 console.log({a,b}); // Imprime en consola a=30 y b = 10 
 

/*

    ¿A que se debe este comportamiento?

    Cuando trabajamos con primitivos cualquier tipo de asignacion o copia de una variable a otra se hace por valor, es decir, se crea una copia del valor y se asigna a la nueva variable. Por lo tanto, cualquier cambio en la variable original no afecta a la copia.


*/ 

// Ahora veamos por referencia

    let juan = {nombre: 'Juan'};
    let ana  = juan;
    ana.nombre = 'Ana';
    console.log({juan, ana}); // Imprime en consola juan = {nombre: 'Juan'} y ana = {nombre: 'Juan'}

    /*
        ¿A que se debe este comportamiento?

        En este caso, cuando asignamos el objeto juan a la variable ana, no se crea una copia del objeto, sino que ambas variables apuntan al mismo objeto en memoria. Por lo tanto, cualquier cambio realizado a través de una de las variables afectará al objeto original y a la otra variable.

        NOTA: Recurden que todos los primitivos se asignan por valor y los objetos por referencia.
     */

        
