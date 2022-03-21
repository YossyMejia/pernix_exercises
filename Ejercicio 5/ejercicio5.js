// Valor usado para estandarizar los valores de las letras de ascii, asi la secuencia 
// va a=1, b=2...
let ASCII_STANDARDIZATION_VALUE = 96;


// Calcular el valor ascii de una letra estandarizado
const get_ascii_value = (letter, standarization_value) => 
    letter.charCodeAt() - standarization_value; 


// Caclulca la posicion de una letra en el alfabeto
const getAlphabetPossition = (letter) => 
    get_ascii_value(letter.toLowerCase(), ASCII_STANDARDIZATION_VALUE);


// Verifica si un caracter es una letra
const isLetter = (letter) => letter.toLowerCase() != letter.toUpperCase();


// Recibe un string y devuelve la posicion de cada letra en el alfabeto separados
// por un espacio 
function alphabetPosition(text) {
    let text_array = text.split(''); //separar el string por cada letra 
    let final_array = [];
    text_array.forEach(letter => {
        if(isLetter(letter)){
            final_array.push(getAlphabetPossition(letter));
        }
    });
    return final_array.join(' ') 
}


//Test
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition(" z a b c d e f g"));
console.log(alphabetPosition("Hola! Esto deberia de dar un numero grande"));