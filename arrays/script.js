// ------------ ##ejercicio 1 -  Obtener menor

// const obtenerMenor = (numeros) =>{
//     let min = Infinity; // --- infinity es decir que elegimos el mayor numero posible.
//     for (let i=0; i<numeros.length; i++){
//       if(numeros[i]<=min){
//         min = numeros[i]  // --- y aqui es decir que cada vez que un indice es menor que el ultimo, este se guarda en min. El primer numero siempre toma el lugar del infinity, luego el segundo numero, si es menor que el primer, toma su lugar en min, si es mayor pasamos la comparación para el próximo.
//       }
//     }
//    return(min);
    
//   }
// console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]))

// ------------ ##ejercicio 2 - Sumar

// const sumar = (numeros) => {
//     let final = ""; // --- una variable vacía para que vayamos poniendo cada indice del número.
//     for (let i=0; i<numeros.length; i++){
//        final= parseInt(final + numeros[i]); // --- pasamos para enteros ya que la variable final es un string. Empezamos con nada, el primer indice se suma a la varable final que esta vacía, es decir, es zero, el segundo se suma al primer, y así con cada índice. 

//     }
//     return final;
    
//   }
//   console.log(sumar([5, 7, 10, 12, 24]));

// ------------ ##ejercicio 3 - Contiene

// const contiene = (numero, numeros)=>{
//     for (let i=0; i<numeros.length; i++){
//       if (numeros[i] === numero){
//         return true
//     }
//   }
//     return false
//   } 
// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]));
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]));

// ------------ ##ejercicio 4 - Invertir Caso

// const invertirCaso = (string) => {
//     const arrayLetras = string.split('');
//     let letras = '';
//     for (let i=0; i<arrayLetras.length; i++){
//         if(arrayLetras[i] === arrayLetras[i].toUpperCase()){
//             letras = letras + arrayLetras[i].toLowerCase(); // --- si al percorrer el array de letras (que es la palabra (string) dividida en índices) se encuentra una letra que es mayuscula, la transforma en minuscula.
//         }
//         else{
//             letras = letras + arrayLetras[i].toUpperCase(); // --- cuando no encuentra mayuscula, o sea, que es minuscula, la pa pasa a mayuscula. 
//         }}
//         return letras; // --- envia todos los indícies del for para el string letras para formar la palabra una vez más. 
//     }

// console.log(invertirCaso('Ada Lovelace'));
// console.log(invertirCaso('feliz cumple'));
// console.log(invertirCaso('jAvAsCrIpT'));


// ------------ ##ejercicio 5 - Ganó

// const  gano = (tragamonedas) =>{
//     const jugada = tragamonedas.slice(0,5); // --- aqui criamos un array del valor indicado en tragamonedas, cortando y separando en índices cada uno de los simbolos.

//     for (let i=0; i<tragamonedas.length; i++){
//         return tragamonedas[0] === tragamonedas[1] && tragamonedas[0] === tragamonedas[2] && tragamonedas[0] === tragamonedas[3] && tragamonedas[0] === tragamonedas[4]; // --- aqui comparamos si es igual siempre al primer índce (0) para estarmos seguras de que el primer y cada uno de los otros son los mismos. 
//     }
// }
// console.log(gano(['⭐', '⭐️', '⭐️', '💫', '✨']));
// console.log(gano(['💫', '💫', '💫', '💫', '💫']));
// console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️']));

