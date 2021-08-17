const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let code = '';
    for (let i = 0; i < expr.length; i += 10){
        if (expr[i] === '*'){
            code += ' ';
        }else {
            let char = '';
            let length = i + 10;
            for (let a = i; a < length; a += 2){
                if (expr[a] === '1' && expr[a + 1] === '1'){
                    char += '-';
                }else if (expr[a] === '1' && expr[a + 1] === '0'){
                    char += '.';
                }else if (a === ' '){
                    code += ' ';
                }
            }
            code += MORSE_TABLE[char];
        }
    }
    return code;
}

module.exports = {
    decode
}