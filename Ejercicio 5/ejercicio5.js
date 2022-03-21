/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/


//B
function process_word(word){
    if(word.length > 1){
        const punctuation_regex = new RegExp("[^A-Za-z0-9]");
        if (punctuation_regex.test(word)) {
            console.log("es signo",word);
        }
        return word;
    }
    else{
        return word;
    }
}


//A
function pigIt(text) {
    let text_array = text.split(' '); //separar el string por cada espacio 
    let final_array = [];
    text_array.forEach(element => {
        final_array.push(process_word(element));
        //console.log(process_word(element));
    });
    return final_array.join(' ');   //unimos el array para 
}


//Test
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The sunset sets at twelve o' clock."));