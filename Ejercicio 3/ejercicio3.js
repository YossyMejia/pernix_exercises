// Elimina el inicio y final de un string usando funcion slice
const delete_start_end = (text) => text.slice(1,-1);


// Verifica si el indice recibido es valido 
const check_valid_possition = (index, string_length) => 
    index === 0 ? false : index === string_length-1 ? false : true;


// Elimina el inicio y final de un string sin funcion slice 
const delete_start_end2 = (text) => {
    let text_array = text.split('');
    let text_length = text.length; 
    let final_string = '';

    text_array.forEach((value, index) => {
        if(check_valid_possition(index, text_length)){
            final_string += value;
        }
    });

    return final_string;
}


//Test
console.log(delete_start_end("Hola"));
console.log(delete_start_end("12345"));
console.log(delete_start_end("iooooooi"));
console.log(delete_start_end2("Hola"));
console.log(delete_start_end2("12345"));
console.log(delete_start_end2("iooooooi"));