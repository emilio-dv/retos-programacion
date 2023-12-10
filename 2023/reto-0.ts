/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let esMultiplo3 = i % 3 === 0;
        let esMultiplo5 = i % 5 === 0;

        if (esMultiplo3 && esMultiplo5) {
            console.log(`${i} - fizzbuzz`);
        } else if (esMultiplo3) {
            console.log(`${i} - fizz`);
        } else if (esMultiplo5) {
            console.log(`${i} - buzz`);
        } else {
            console.log(i);
        }
    }
}

fizzbuzz()