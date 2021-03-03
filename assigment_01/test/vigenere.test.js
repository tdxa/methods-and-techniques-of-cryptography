const assert = require('assert');
const vigenereCipher = require('../Vigenere/vigenere')

describe('Correct convert int to char', () => {
    it('Should return [T,d,x,a] with input', () => {
        let input = [84, 100, 120, 97];
        assert.deepStrictEqual(vigenereCipher.intToChar(input), ['T', 'd', 'x', 'a'])
    });
});


describe('Correct create a vigenere table with ascii code', () => {
    it('Should return [ [ 65, 66, 67 ], [ 66, 67, 65 ], [ 67, 65, 66 ] ] with input', () => {
        assert.deepStrictEqual(vigenereCipher.vigenereTable(65, 68), [[65, 66, 67], [66, 67, 65], [67, 65, 66]])
    });
});

