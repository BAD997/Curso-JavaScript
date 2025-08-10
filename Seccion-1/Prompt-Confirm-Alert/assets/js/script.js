

alert('Hola Mundo'); // Esta instrucción es bloqueante, bloquea la ejecución del navegador web y no dejera ejecutar ninguna linea de codigo hasta que el usuario de el ok. 

//prompt('¿Cuál es tu nombre?')  Por defecto va a retornar por defecto lo que sea que el usuario escriba y puede ser asignado a una variable por ejemplo:

let nombre = prompt('¿Cuál es tu nombre?');

console.log('Bienvenido ',nombre);

//Confirm permite al usuario seleccionar una de dos opciones disponibles

let seleccion = confirm('¿Seguro que quieres eliminar este elemento?');

console.log(seleccion);