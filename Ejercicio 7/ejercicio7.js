// Para verificar si un numero es un cuadrado perfecto sacamos su raiz 
// y se comprueba si el resultado es un numero entero
const perfectSquare = (number) => 
    ((Math.sqrt(number)) % 1) === 0;


//Test
console.log(perfectSquare(-1));
console.log(perfectSquare(0));
console.log(perfectSquare(3));
console.log(perfectSquare(4));
console.log(perfectSquare(25));
console.log(perfectSquare(26));
