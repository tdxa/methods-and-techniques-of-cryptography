const encodeCaesarCipher = require('./encodeCaesar');

const manualCaesarCipher = (text, shift) => {
    shift = (94 - shift) % 94
    return encodeCaesarCipher(text, shift)
}

module.exports = manualCaesarCipher;