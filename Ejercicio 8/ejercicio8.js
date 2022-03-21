// Separa un numero por digito y los ingresa a un arreglo 12 -> [1,2]
const splitToDigit = (number) => Array.from(String(number), Number)


// Toma un numero de varios digitos y retorna el resultado de la suma de sus digitos
// 12 -> 1 + 2 = 3
function numberSplitResult(number){
    let array_digits = splitToDigit(number); // 12 -> [1,2]
    let result = 0;
    array_digits.forEach(digit => {
        result += digit;
    });
    return result;
}


// Recibe un numero si tiene mas de dos digitos realiza una operacion de suma 
// con sus digitos por separado, si el resultado tiene mas de 1 digito continua 
// con el proceso de forma recursiva hasta que el resultado tenga un solo digito
function digitalRoot(number){
    if(number < 10){
        return number
    }
    else{
        let number_result = numberSplitResult(number)
        return digitalRoot(number_result);
    }
}


//Test
console.log(digitalRoot(16))
console.log(digitalRoot(942))
console.log(digitalRoot(132189))
console.log(digitalRoot(493193))

