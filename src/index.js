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
  let decodeStr = [];
  for (let i = 0; i < expr.length; i += 10) {
      let substring = expr.substring(i, i + 10);
      let decodeSymbol = replaceSymbol(substring);
      if (decodeSymbol === " ") {
          decodeStr.push(decodeSymbol);
      } else {
          decodeStr.push(MORSE_TABLE[decodeSymbol]);
      }
  }
  return decodeStr.join('');
}
function replaceSymbol(substring) {
  let decodeLetter = "";
  if (substring === "**********") {
    return " ";
  }
  for (let j = 0; j < substring.length; j += 2) {
      let letter = substring.substring(j, j + 2);
      if (letter === "10") {
          decodeLetter += ".";
      } else if (letter === "11") {
          decodeLetter += "-";
      }
  }
  return decodeLetter;
}

module.exports = {
    decode
}
