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
