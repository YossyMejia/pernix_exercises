// Recibe un string y si tiene un numero lo extrae con expresion regular para ser retornado
function getDigitFromString(str){
    let matches = str.match(/(\d+)/); // Expresion regular para digitos numericos
    if(matches){
        return matches[0];
    }
    else{
        return null;
    }
}


// Ordena palabras segun el numero que tengan entre sus letras, segun el enunciado
// cada palabra tiene si o si un numero y tiene unicamente numeros consecutivos entonces
// ya sabemos cual es tamanno maximo del arreglo final por lo tanto cuando se extrae el 
// numero de orden se puede hacer un insert inmediato en el array final 
function orderWords(text){
    let text_array = text.split(' '); // Separar el string por espacio 
    let final_array = Array(text_array.length).fill('');   // Crea un arreglo vacio de N elementos      
    text_array.forEach(element => {
        let wordDigit = getDigitFromString(element);
        final_array[ wordDigit-1 ] = element;
    });
    return final_array.join(' ');
}


//Test
console.log(orderWords("is2 Thi1s T4est 3a"));
console.log(orderWords("4of Fo1r pe6ople g3ood th5e the2"));
console.log(orderWords(""));
console.log(orderWords("4of Fo8r pe6ople g3ood th5e the2"));