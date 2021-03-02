const encodeCaesarCipher = require('./encodeCaesar');

const decodeCaesarCipher = (text, shift) => {
    shift = (94 - shift) % 94
    return encodeCaesarCipher(text, shift)
}

const bruteCaesarCipher = (text) =>{
    
}


module.exports = decodeCaesarCipher;