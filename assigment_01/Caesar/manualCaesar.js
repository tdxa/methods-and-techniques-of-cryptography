const encodeCaesarCipher = require('./encodeCaesar');

/**
 * A function decrypting the Caesar cipher manually
 *
 * @param {string} text Text containing the cipher
 * @param {number} shift Shift in the alphabet
 * @returns Decrypted text
 */

const manualCaesarCipher = (text, shift) => {
    shift = (94 - shift) % 94
    return encodeCaesarCipher(text, shift)
}

module.exports = manualCaesarCipher;