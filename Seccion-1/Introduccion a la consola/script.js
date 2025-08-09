// Depuracion y tipos de mensajes en consola

console.log('Mensaje Normal');
console.warn('Mensaje de Advertencia');
console.info('Mensaje de Información');
console.error('Mensaje de Error');

// Identificar variables dentro de un console 

let a = 10,
    b = 20,
    c = 30,
    x = 'Hola '
    y = 'Spiderman '
    abc = a + b + c;

console.log({a});
console.log('b ',b);
console.log(`c ${c}`);

// Uso del console.table(), recibe un arreglo o como un objeto

console.table({a,b,c,x,y});

// 

const saludo = x + y ;

console.log(saludo);