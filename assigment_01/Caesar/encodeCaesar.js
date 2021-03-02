const encodeCaesarCipher = (text, shift) => {
    if (text.length > 0) {
        let encodedText = '';
        for (let letter of text) {
            //console.log(letter.charCodeAt(0))
            // if (letter === ' ') {
            //     encodedText += ' ';
            // } else {
            //     encodedText += String.fromCharCode((letter.charCodeAt(0) - 32 + shift) % 94 + 32);
            // }
            encodedText += String.fromCharCode((letter.charCodeAt(0) - 32 + shift) % 94 + 32 );
        }
        return encodedText;
    } else {
        return "Error: The text must be a minimum length of 1"
    }
}


console.log(encodeCaesarCipher("~", 1))


module.exports = encodeCaesarCipher;
