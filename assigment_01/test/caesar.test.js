const assert = require('assert');
const encodeCaesarCipher = require('../Caesar/encodeCaesar');
const decodeCaesarCipher = require('../Caesar/manualCaesar')

describe('Correct text encryption with Caesar', () => {
    it('Should return myyux?44lnymzg3htr4yi}f with input', () => {
        let input = 'https://github.com/tdxa';
        let shift = 5;
        assert.strictEqual(encodeCaesarCipher(input, shift), 'myyux?44lnymzg3htr4yi}f')
    });
});

describe('Correct decoding of the Caesar cipher with a known shift', () => {
    it('Should return "Oh, you crazy moon, what did you do?" with input', () =>{
        let input = 'Wp4(#w}(kzi$#(uwwv4(!pi|(lql(#w}(lwG';
        let shift = 8;
        assert.strictEqual(decodeCaesarCipher(input, shift), 'Oh, you crazy moon, what did you do?')
    });
});