// ---------- ejercicio 1 - Obtener Indice
// const obtenerIndice = (valor, array) => {
//     return array.indexOf(valor); // --- el index of devuelve por defecto el -1 cuando no encuentra el valor y la posicion si lo encuentra 
//   }
// console.log(obtenerIndice(5, [5, 7, 12, 34, 54, 2, 12]));
// console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]));

// ---------- ejercicio 2 - Repetir
// const repetir = (valor, num) => {
//     let print = []; //el array vacío para que en cada vuelta haga el push del valor.
//     for (let i=0; i<num; i++){
//         print.push(valor);
//     }
//     return print;
// }
// console.log(repetir('Grasi', 7));

// ---------- ejercicio 3 - Sumar impares hasta
// const sumarImparesHasta = (numero) => {
//     let total = "";    
//     for (let i=0; i<=numero; i++){
//         if (i%2 !== 0){
//             total = parseInt(total+i);
//         }     // --- decimos que a partir del indice 0 el for de cuantas vueltas indiquemos en numero. Cuando en la vuelta 0, no se cumple la condición, entonces avanza para la 1. La vuelta uno si que cumple. el 1 entra en total. La 2 no cumple, la 3 si, entonces el valor 3 se suma a uno, actualizando el valor del total, y asi por delante.
// }
// return total;
// }     
// console.log(sumarImparesHasta(5));


// ---------- Ejercicio 4: Crear cuenta regresiva
    // --- en ese ejercicio, el array vacío recibe las vueltas del for, que va percorriendo de manera decrescente. Empezamos dando al índice el valor del numero inicial y decimos que hasta que llegue a zero, debe hacer el i--, o sea, bajar un numero.
// const crearCuentaRegresiva = (numeroInicial) => {
//     let array = [];
//     for (let i=numeroInicial; i>=0; i--){
//         array.push(i);
//     }
//     return array;
// }
// console.log(crearCuentaRegresiva(5));
// console.log(crearCuentaRegresiva(25));
// console.log(crearCuentaRegresiva(100));

// ---------- Ejercicio 5: Invertir
    // --- la función reverse hace el trabajo sola.
// const invertir =(array) =>{
//     array.reverse();
//   return array;
// }

// console.log(invertir([1, 2, 3]))
// console.log(invertir([5, 7, 99, 34, 54, 2, 12]));

// ---------- Ejercicio 6: Remover duplicados
    // --- he creado un array vacío como cuna para los numeros. Entonces cuando el for visita cada indice de array (for (let i of array)), el pregunta se ese indice NO existe en el array valoresUnicos (!valoresUnicos). Si realmente no está, lo agrega, si está no hace nada. 
// const removerDuplicados = (array) => {
//     let valoresUnicos = [];
//     for (let i of array) {
//       if (!valoresUnicos.includes(i)){
//         valoresUnicos.push(i);
//       }
//     }
//      return valoresUnicos;
//   }
// console.log(removerDuplicados([1, 1, 1]));
// console.log(removerDuplicados([1, 2, 1, 7, 6, 7]));
// console.log(removerDuplicados([12, 15, 10]));



// ---------- Ejercicio 7:  Repetir letras
    // --- un array vazio para recibir las letras. la palabra que si recibe como parámetro dividida por letras. Luego para cada letra de palabra, entramos en otro for que es para cada cuantidade que vino como segundo parámetro. O sea, para cada letra, hago el push para el array nuevaPalabra la cantidade de veces del parámetro. Luego uso el join para hacer del array un string. 

// const repetirLetras = (string, qty) => {
//     let nuevaPalabra = [];
//     let palabra = string.split("");
//     for (let letra of palabra){
//       for (let i=0; i<qty; i++){
//           nuevaPalabra.push(letra);
//         }
//       }
//     return nuevaPalabra.join("");
//   }

// console.log(repetirLetras('hola', 2));
// console.log(repetirLetras('ah!', 5));

// ---------- Ejercicio 8:  Capitalizar Palabras
    //--- string vacio, split y join tienen la misma función del anterior, la diferencia es que entre las comillas hay espacios pues separamos y juntamos por palabras, no más por letras. en el for decimos que cada palabra del string debe ser agragada al array vacío, pero el indice 0 de cada palabra, o sea, la primera letra debe ser reemplazada con toUpperCase. En replace palabra[0] si repite pues el primer parámetro dice o que debe ser reemplazado y el segundo dice de que manera.
// const capitalizarPalabras = (string) => {
//     let palabrasCapitalizadas = [];
//     let stringSplit = string.split(" ");
//     for (let palabra of stringSplit){
//       palabrasCapitalizadas.push(palabra.replace(palabra[0],palabra[0].toUpperCase()));
  
//     } return palabrasCapitalizadas.join(" ");
  
//   }

//   console.log( capitalizarPalabras('Esto es un título'));
//   console.log( capitalizarPalabras('hola, soy grasiela rosa.'));