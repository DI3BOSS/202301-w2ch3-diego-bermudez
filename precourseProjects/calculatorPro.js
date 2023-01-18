const errorMessage = `ERROR: 
    Introduce un valor numérico`;

const nullMessage = `ERROR:
    Has cancelado la introducción del primer número.`;

const thirdDecRound = (num) => Math.floor(num *1000) / 1000;

let inputEnd = true;

do {
 
    let numNArray = [];

    let numOne = prompt(`BIENVENIDO A LA CALCULADORA PRO. 
    por favor, introduce un número y haz clic en ACEPTAR.
    (Si contiene decimales usa '.' en lugar de ',')`);
    if (isNaN(numOne *1) || numOne === "" || numOne === " ") {
        do {numOne = prompt(errorMessage);
        } while (isNaN(numOne *1) || numOne === "" || numOne === " ");
    } else if (numOne === null) {
    alert(nullMessage);
break;
    };

    if(numOne !== null) {
        let numTwo = prompt(`AHORA TIENES 2 OPCIONES:
    1· CANCELAR para calcular la raiz cuadrada del primer número introducido
    2· Introducir un nuevo número y ACEPTAR para operar con el anterior*
        *Si este nuevo número contiene decimales usa '.' en lugar de ','`);
        if (numTwo === null) {
        const numOneSqrt = thirdDecRound(Math.sqrt(numOne));
        alert(`la RAÍZ CUADRADA de ${numOne} es ${numOneSqrt}.`);
break;
        } else if (isNaN(numTwo *1) || numTwo === "" || numTwo === " ") {
            do { numTwo = prompt(errorMessage);
                do { numTwo = prompt(errorMessage);
                } while (numTwo === null);
            } while (isNaN(numTwo *1) || numTwo === "" || numTwo === " ");
        };

        let numN ="";

    do { numN = prompt(`¿Deseas añadir más números a las operaciones?
    · Introducir un nuevo número y haz clic en ACEPTAR para añadirlo*
    · CANCELAR para mostrar los resultados con de las operaciones con los números hasta ahora introducidos
            *Si este nuevo número contiene decimales usa '.' en lugar de ','`)
        if (isNaN(numN *1) || numN === "" || numN === " ") {
            do {numN = prompt(errorMessage);
        } while (isNaN(numN*1) || numN === "" || numN === " ");
        };

        numNArray.push(numN *1);

    } while (numN !== null);

        numNArray.unshift(+numOne, +numTwo);
        numNArray.pop();

    let totalSum = thirdDecRound(numNArray.reduce((a, b) => a + b));
    let totalRes = thirdDecRound(numNArray.reduce((a, b) => a - b));
    let totalMul = thirdDecRound(numNArray.reduce((a, b) => a * b));
    let totalDiv = thirdDecRound(numNArray.reduce((a, b) => a / b));

    inputEnd = confirm( `Estos son tus datos:
    · Números introducidos = ${numNArray.join(" | ")}
    · Su SUMA = ${totalSum}
    · Su RESTA = ${totalRes}
    · Su MULTIPLICACIÓN = ${totalMul}
    · Su DIVISIÓN = ${totalDiv}
    ¿Deseas realizar un nuevo calculo?`);
        if (inputEnd === false) {
break;
        };
    };
    
} while (inputEnd === true);