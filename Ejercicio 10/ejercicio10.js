// Separa un numero por digito y los ingresa a un arreglo 12 -> [1,2]
const splitToDigit = (number) => Array.from(String(number), Number)


// Toma cada digito de una cifra numerica y obtiene el valor al elevar al cuadrado
// luego toma el resultado de cada digito y forma una sola cifra numerica
function squareEveryDigit(number){
    let array_digits = splitToDigit(number); // 12 -> [1,2]
    let final_array = [];     
    array_digits.forEach(element => {
        final_array.push(Math.pow(element, 2))
    });
    let final_number = parseInt(final_array.join('')); // convertimos la lista de numeros en un numero
    return final_number;
}


//Test
console.log(squareEveryDigit(9119));
console.log(squareEveryDigit(898));
console.log(squareEveryDigit(345));