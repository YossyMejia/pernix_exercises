// Elimina el inicio y final de un string usando funcion slice
const delete_start_end = (text) => text.slice(1,-1);


// Elimina el inicio y final de un string sin funcion slice 
const delete_start_end2 = (text) => {
    let text_array = text.split('');
    let text_length = text.length; 
    text_array[0] = ''
    text_array[text_length - 1] = ''
    return text_array.join('');
}


//Test
console.log(delete_start_end("Hola"));
console.log(delete_start_end("12345"));
console.log(delete_start_end("iooooooi"));
console.log(delete_start_end2("Hola"));
console.log(delete_start_end2("12345"));
console.log(delete_start_end2("iooooooi"));