const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


/*
  ¿A que nos referimos con lógica Booleana? 
 
  Lógica Booleana es una rama de las matemáticas que se encarga de estudiar los     valores de verdad (true y false) y las operaciones lógicas que se pueden realizar con ellos.


 */

  // Operadores Not o Negación (!)
  console.warn('Not o Negación');
  console.log(true); // true
  console.log(!true); // false
  console.log(!false); // true
  console.log(!regresaFalse()); // true explicación: primero se ejecuta la función regresaFalse() que retorna false, luego el operador ! niega ese valor y lo convierte en true.

  // operadores And (&&)
  console.warn('And');
  console.log(true && true); // true explicación: ambos valores son true, por lo tanto el resultado es true.
  console.log(true && false); // false explicación: uno de los valores es false, por lo tanto el resultado es false.
  console.log(false && true); // false
  console.log(false && false); // false 

    console.log('===================');     

    console.log(regresaTrue() && regresaFalse()); // false explicación: primero se ejecuta la función regresaTrue() que retorna true, luego se ejecuta la función regresaFalse() que retorna false, por lo tanto el resultado es false.
    console.log(regresaFalse() && regresaTrue()); // false explicación: primero se ejecuta la función regresaFalse() que retorna false, teniendo en cuenta que el operador && es un operador cortocircuito, no se ejecuta la función regresaTrue() y el resultado es false.

    // operadores Or (||)
    console.warn('Or');
    console.log(true || true); // true explicación: ambos valores son true, por lo tanto el resultado es true.
    console.log(true || false); // true explicación: uno de los valores es true, por lo tanto el resultado es true.
    console.log(false || true); // true
    console.log(false || false); // false   explicación: ambos valores son false, por lo tanto el resultado es false.
    console.log('===================');

    console.log(regresaTrue() || regresaFalse()); // true explicación: primero se ejecuta la función regresaTrue() que retorna true, teniendo en cuenta que el operador || es un operador cortocircuito, no se ejecuta la función regresaFalse() y el resultado es true.

    console.warn('Asignaciones');

    const soyUndefined = undefined;
    const soyNull = null;
    const soyFalse = false;
 



    const a1 = true && 'Hola Mundo' && 150; // 150 explicación: el operador && evalúa cada uno de los valores y retorna el último valor si todos son true.
    const a2 = 'Hola' && 'Mundo' && soyFalse && true; // false explicación: el operador && evalúa cada uno de los valores y retorna el primer valor que sea false.
    const a3 = soyFalse || 'yaNosoyfalso';
    const a4 = soyFalse || soyUndefined|| soyNull || 'yaNosoyfalso'; // yaNosoyfalso explicación: el operador || evalúa cada uno de los valores y retorna el primer valor que sea true.
    const a5 = soyFalse || soyUndefined|| regresaTrue() || 'yaNosoyfalso'; // true explicación: el operador || evalúa cada uno de los valores y retorna el primer valor que sea true.
    console.log({a1, a2, a3, a4, a5});  

    if (regresaFalse() && regresaTrue() && (true || false || true) ) {
        console.log('Hacer algo');
    } else {
        console.log('Hacer otra cosa');
    }   

    