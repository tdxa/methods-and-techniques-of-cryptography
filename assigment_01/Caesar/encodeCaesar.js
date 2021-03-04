/**
 * A function encrypting the Caesar cipher
 *
 * @param {string} text The text to be encrypted
 * @param {number} shift Shift in the alphabet
 * @returns Encrypted text
 */

const encodeCaesarCipher = (text, shift) => {
    if (text.length > 0) {
        let encodedText = '';
        for (let letter of text) {
            // ASCII range from 32 to 126
            encodedText += String.fromCharCode((letter.charCodeAt(0) - 32 + shift) % 94 + 32 );
        }
        return encodedText;
    } else {
        return "Error: The text must be a minimum length of 1"
    }
}

module.exports = encodeCaesarCipher;
