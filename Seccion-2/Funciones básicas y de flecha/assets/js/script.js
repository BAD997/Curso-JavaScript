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

function saludoInicial(nombreUsuario){
    console.log('Hola Bienvenido! ',nombreUsuario);
    
}

saludoInicial('Breiner Abello')




