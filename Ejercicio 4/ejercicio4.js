// Recibir string y retorna su inversa sin metodo reverse()
const reverse = (text) => {
    let text_array = text.split('');
    let reverse_text = '';
    let text_lenght = text_array.length;
    while (text_lenght > 0){
        reverse_text += text_array[text_lenght - 1];
        text_lenght -= 1;
    }
    return reverse_text;
}




// Recibir string y retorna su inversa con metodo reverse()
const reverse2 = (text) => {
    let text_array = text.split('');
    let reverse_array = text_array.reverse();
    let reverse_text = reverse_array.join("");
    return reverse_text;
}


//Test
console.log(reverse("world"));
console.log(reverse("word"));
console.log(reverse2("world"));
console.log(reverse2("word"));