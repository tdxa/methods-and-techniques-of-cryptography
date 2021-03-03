const bruteCaesarCipher = (text) => {
    const alphabet = [...Array(95).keys()].map(i => i + 32);
    for (let key of alphabet) {
        let result = '';

        for (let letter of text) {
            if (alphabet.includes(letter.charCodeAt(0))) {
                let original = letter.charCodeAt(0) - (key - 32);

                if (original < 32) {
                    original += 94;
                }
                result = result.concat(String.fromCharCode(original));
            }
        }
        console.log(`Key ${key - 32}: ${result}`);
    }
};

module.exports = bruteCaesarCipher;