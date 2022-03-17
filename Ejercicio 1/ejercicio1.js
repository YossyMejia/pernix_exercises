// Se utiliza un arreglo de objetos en caso de que a futuro se necesite agregar una letra 
// nueva a la restriccion y no tener la necesidad de hacer mayores cambios 
// (por ejemplo que sea X, O y Z)
function letters_to_check() {
    let letters_array = [
        {
            letter: 'x',
            ammount: 0,
        },
        {
            letter: 'o',
            ammount: 0,
        },
    ];
    return letters_array;
}


// Se comprueba si una letra esta en el arreglo de letras, en caso de estar aumenta en 1 
// su contador
function check_letter(letter, letters_array) {
    letter = letter.toLowerCase();
    objIndex = letters_array.findIndex((obj => obj.letter == letter));
    let letter_object = letters_array[objIndex];
    if(letter_object !== undefined){
        letter_object.ammount += 1;
    }
}


// Verificacion de que todos los objetos tengan el mismo valor 
// en el atributo "ammount" 
const check_letters_array = array => array.every( value => value.ammount === array[0].ammount );


// Se recorre la cadena de caracteres y se hace la comprobracion al final de si la cantidad de 
// letras era igual
function XO(text) {
    let letters_array = letters_to_check();
    for (const letter of text) {
        check_letter(letter, letters_array);
    }
    let result = check_letters_array(letters_array);
    return result;
}


//Test 
console.log(XO("XOXO"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));