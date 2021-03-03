/**
 * A function that encrypts text using a key in the Vigenere cipher.
 *
 * @param text HTML element with text to be encrypted
 * @param encryptionKey HTML element with the encryption key
 * @param cipher HTML element which is displayed encrypted text
 */

function vigenereCipher(text, encryptionKey, cipher) {
    try {
        if (encryptionKey.value.length === 0) {
            throw error = "Error: Key is empty!";
        }
        let encodedText = '';
        if (text.value.length > 0) {
            const table = vigenereTable();
    
            for (let letter in text.value) {
                let index = letter;
    
                let rowPosition = table[0].indexOf(text.value[letter].charCodeAt(0));
    
                // If the key is shorter than the text to be encrypted, wrap it.
                if (index > encryptionKey.value.length - 1) {
                    index = index % encryptionKey.value.length;
                }
    
                let colPosition = table[0].indexOf(encryptionKey.value[index].charCodeAt(0));
    
                encodedText = encodedText.concat(String.fromCharCode(table[rowPosition][colPosition]))
            }
            cipher.innerHTML = encodedText;
        } else {
            throw error = "Error: The text must be a minimum length of 1!"
        }
    } catch (error) {
        cipher.innerHTML = error;
    }
    
}

/**
 * Converts an array of integers to corresponding chars in an ASCII array.
 * @param {number[]} numbers The array with integer values
 * @returns {string[]} The array with string values
 */
function intToChar(numbers) {
    var charArray = new Array();
    for (var i = 0; i < numbers.length; i++) {
        charArray.push(String.fromCharCode(numbers[i]));
    }
    console.log(typeof (numbers[0]))
    return charArray;
}


/**
 * Returns the Vigenere cipher table in the ASCII range from 32 to 126
 * @returns {number[]} Matrix with Vigenere cipher table
 */
function vigenereTable() {
    let vigenereTable = new Array();

    const min = 32;
    const max = 127;

    for (let i = 0; i + min < max; i++) {
        let row = new Array();
        for (let j = 0; j < max - min; j++) {
            if (j + i + min >= max) {
                row[row.length] = (j + i) - (max - min) + min
            } else {
                row[row.length] = j + i + min;
            }
        }
        vigenereTable[vigenereTable.length] = row;
    }
    return vigenereTable;
}



/**
 * Display the Vigener cipher table in the HTML document.
 */

function printTable() {
    const table = vigenereTable();
    document.getElementById("ascii").innerHTML = "";
    for (let i = 0; i < table.length; i++) {
        document.getElementById("ascii").innerHTML = document.getElementById("ascii").innerHTML + "<tr><td>" + intToChar(table[i]).join("</td><td>") + "</td></tr>";
    }
}