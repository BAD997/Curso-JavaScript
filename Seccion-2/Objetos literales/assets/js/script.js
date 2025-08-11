/*
 
    ¿Que son los objetos literales?

    En JavaScript, un objeto literal es una forma concisa de definir un objeto directamente en el código utilizando la sintaxis de llaves {}. Este objeto se compone de pares clave-valor, donde cada clave (o propiedad) está asociada a un valor. Los objetos literales son una manera rápida y sencilla de crear objetos con datos específicos. 

*/

let personaje = {

    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    coords: {
        lat:34.034,
        lng: -118.70
    },
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster'
    ],
    direccion: {
        zip: '1080, 90265',
        ubicacion: 'Malibu, California'
    },
    'Ultima-Pelicula': 'Infinity War',
};

console.log(personaje);


// Formas de  acceder a las propiedades del objeto

console.log('Nombre: ',personaje.nombre);
console.log('Code name: ',personaje['codeName']);
console.log('Edad: ',personaje.edad);


// Forma de acceder a las propiedades anidadas de un objeto

console.log('Coors: ',personaje.coords);
console.log('Lat: ',personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);

console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo:', personaje[x]);

console.log('Ultima Pelicula: ',personaje["Ultima-Pelicula"] );










