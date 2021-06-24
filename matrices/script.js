// --------------- Ejercicio 1: Obtener número mayor
// const obtenerNumeroMayor = (matriz) => {
//     let mayor = 0;
//     for (let i=0; i<matriz.length; i++){
//         for (let j=0; j<matriz[i].length; j++){
//             if (matriz[i][j]>mayor){
//                 mayor = matriz[i][j];
//             }
//         }
//     }
//     return mayor;
// }

//  console.log(obtenerNumeroMayor([[2, 7, 12, 1],[8, 23], [9, 45, 7],[22, 3, 24, 4],]));

// --------------- Ejercicio 2: Sumar

// const sumar = (matriz) => {
//     let suma = 0;
//     for (let i=0; i<matriz.length; i++){
//         for (let j=0; j<matriz[i].length; j++){
//             suma = suma + matriz[i][j];
//         }
//     }
//     return suma;
// }

//  console.log(sumar([[4, 5],[2, 7, 1],[8, 10],]));

// --------------- Ejercicio 3: Es matriz cuadrada
    // --- para cada "arrays" de matriz, el for entra y descubre cuantos indices hay. Luego de eso compara el tamaño de la matriz (cuantos arrays tiene) con el tamaño de los arrays (cuantos índices tiene). Si esa comparación es equivalente, devuelve true.

// const esMatrizCuadrada = (matriz) => {
//     for (let arrays of matriz){
//       for (let i=0; i<arrays.length; i++){
//         return arrays.length === matriz.length;
//       }
//     }
//   }

//  console.log(esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],]) );
//  console.log(esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],]));

// --------------- Ejercicio 4: Generar grilla
    // --- creamos los 3 parámetros. Luego declaramos un array vacío (grilla) que va recibir la cantidad de filas que el primer for encuentre. Para cada fila, el segundo for creará índices (columna), y en el array columna vacío vá poniendo los ítems de manera aleatória. En el array grilla, subimos lo que se encuentre en columna. Más graficamente: llego a la linea 1, entro en la columna uno, hago el push de los items aleatórios, salgo de la columna uno, hago el push de esa columna para la grilla. Voy para la línea dos y así por delante. 


// const generarGrilla = (filas, columnas, items) => {
//     let grilla = [];
//     for (let i=0; i<filas; i++){
//         let columna = []
//         for (let j=0; j<columnas; j++){
//             columna.push(items[Math.floor(Math.random()*items.length)])
//         }
//         grilla.push(columna);
//     }
//     return grilla;
// }

// console.log(generarGrilla(2, 3, [1, 2]));
// console.log(generarGrilla(3, 3, ['a', 'b', 'c']));


// --------------- Ejercicio 5:  Generar matriz escalonada
    // --- el array de matriz está vacío para al final recibir las filas. El for de indice j entra en cada indice i, filas no necesita length porque ya es numero entero. Así que en el indice [0] de filas, el j hace push de 0 + 1, entonces la primera fila tiene apenas un elemento. En la segunda volta es el i=[1], entonces 1+1. Suben dos zeros para la fila. Y asi por delante. Al final, hacemos el push de todas las filas para la matriz.

// const generarMatrizEscalonada = (filas) => {
//     let matriz = [];
//     for (let i=0; i<filas; i++){
//         let fila = [];
//         for (let j=0; j<i+1; j++){
//             fila.push(0);
//         }
//         matriz.push(fila);
//     }
//     return matriz;
// }
//  console.log(generarMatrizEscalonada(3));
//  console.log(generarMatrizEscalonada(25));