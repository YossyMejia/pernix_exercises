// Valor usado para estandarizar los valores de las letras de ascii, asi la secuencia 
// va a=1, b=2...
let ASCII_STANDARDIZATION_VALUE = 96;


//calcular el valor ascii de una letra estandarizado
const get_ascii_value = (letter, standarization_value) => 
    letter.charCodeAt() - standarization_value; 


// Maximo color permitido por el momento, en caso de cambiar en un futuro se modifica
// este valor 
let MAX_COLOR = 'm';


// Valor del maximo color permitido por la impresora  
let MAX_COLOR_ASCII = get_ascii_value(MAX_COLOR, ASCII_STANDARDIZATION_VALUE);


// Verifica si un color es valido, es valido si su valor ascii es menor al color permitido
const check_valid_color = (color) => {
    let color_ascii = get_ascii_value(color, ASCII_STANDARDIZATION_VALUE);
     if(color_ascii > MAX_COLOR_ASCII){
         return false;
     }
     else{
          return true;
     }
}


// Toma el control output de la impresora y notifica cuantos colores fueron invalidos
// del total de colores imprimidos 
const printer_error = (control_output) => {
    let invalid_colors = 0; 
    for(color of control_output){
        color = color.toLowerCase();
        if(!check_valid_color(color)){
            invalid_colors += 1;
        }
    }
    return `${invalid_colors}/${control_output.length}`
}


//Test
console.log(printer_error("aaabbbbhaijjjm"))
console.log(printer_error("aaaxbbbbyyhwawiwjjjwwm"))
console.log(printer_error("abcdefghijklm"))
console.log(printer_error("abcdefghijklmnopqrstuvwzyz"))
console.log(printer_error("aaaamz"))