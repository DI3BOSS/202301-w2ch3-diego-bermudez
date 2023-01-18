const errorMessage = `ERROR: 
    Introduce un valor numérico`;
const nullMessage = `ERROR:
    Has cancelado la introducción de, al menos, uno de los dos números.`;
const thirdDecRound = (num) => Math.floor(num *1000) / 1000;

let numOne = prompt(`BIENVENIDO AL PROYECTO CALCULADORA.
Por favor, introduce el primer número 
(Si incluyes decimales, usa '.' y no ',')`);
    if (isNaN(numOne *1) || numOne === "" || numOne === " ") {
        do {numOne = prompt(errorMessage);
        } while (isNaN(numOne *1) || numOne === "" || numOne === " ");
    };

let numTwo = prompt(`Ahora, por favor, introduce el segundo número.
(Si dejas este campo vacío, se calculará la raíz cuadrada del primer número).`);
    if (isNaN(numTwo *1) || numTwo === " ") {
        do {numTwo = prompt(errorMessage);
        } while (isNaN(numTwo *1) || numTwo === " ");
    };

if (numOne === null || numTwo === null) {
        alert(nullMessage);
    } else if (numTwo === "") {
    const numOneSqrt = thirdDecRound(Math.sqrt(numOne));
    alert(`la RAÍZ CUADRADA de ${numOne} es ${numOneSqrt}`);
    } else {
    const userResults = [];
    const userResAlert = (num) => userResults.push(thirdDecRound(num));
    userResAlert(+numOne + +numTwo);
    userResAlert(numOne - numTwo);
    userResAlert(numOne * numTwo);
    userResAlert(numOne / numTwo);

    alert(`NÚMEROS ${numOne} y ${numTwo} : 
    · SUMA = ${userResults[0]} 
    · RESTA = ${userResults[1]} 
    · MULTIPLICACIÓN = ${userResults[2]} 
    · DIVISIÓN = ${userResults[3]}`);
};