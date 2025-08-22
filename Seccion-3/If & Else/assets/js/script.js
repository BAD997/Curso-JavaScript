//Estructuras de control

let edad = 18;


if( edad >= 18 ){
    console.log("Eres mayor de edad");      

}else{
    console.log("Eres menor de edad");
}

console.log('Fin del programa');


const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if (dia === 0){
    console.log("Domingo");

}else if(dia === 1){
    console.log("Lunes");               
}else if(dia === 2){
    console.log("Martes");
}else if(dia === 3){
    console.log("Miércoles");
}else if(dia === 4){
    console.log("Jueves");
}else if(dia === 5){
    console.log("Viernes");
}else if(dia === 6){
    console.log("Sábado");
}else{
    console.log("No es un día de la semana válido");
}       


const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
console.log({diaLetras});
console.log(diaLetras[dia] || 'Día no válido');   

const diasdelaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}   

console.log(diasdelaSemana[dia] || 'Día no válido');

