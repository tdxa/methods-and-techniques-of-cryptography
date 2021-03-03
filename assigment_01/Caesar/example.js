const bruteCaesarCipher = require("./bruteCaesarCipher");
const encodeCaesarCipher = require("./encodeCaesar")
const manualCaesarCipher = require("./manualCaesar");

const example = encodeCaesarCipher('404 Not Found',5)

console.log(`--------------------ENCRYPTION--------------------\nText: 404 Not Found     Shift: 5\nCode: ${example}`)


console.log(`---------------MANUAL DECRYPTION------------------\nCode: ${example}     Shift: 5\nText: ${manualCaesarCipher(example,5)}`)

console.log(`----------------BRUTE DECRYPTION------------------`)
bruteCaesarCipher(example)


