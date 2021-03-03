# Ceasar & Vigenere

### Table of Contents
1. [ Ceasar Cipher ](#cc)
   - [ Description ](#dcc)
   - [ Preview ](#pcc)
2. [ Vigenere Cipher ](#vc)
   - [ Description ](#dcc)
   - [ Preview ](#pvc)
3. [ Usage ](#usage)


<a name="cc"></a>
## Ceasar Cipher
<a name="dcc"></a>
### Description
A console application written in JavaScript that creates a Caesar cipher. The alphabets range is ASCII from 32 to 126, so include a space, punctuation, uppercase and lowercase letters.
The user encrypts his text by entering the shift value of the alphabet. Two methods are implemented for decryption:
- a manual method that takes a cipher and shift
- a brute force method that performs decryption for every possible key (94 iterations)

### App built with:
- [nodeJS](https://nodejs.org/en/)
- [Mocha](https://mochajs.org) **for testing**

<a name="pcc"></a>
### Preview

In the folder there is a file `example.js` which contains calls to Caesar cipher functions for the given data.

For **`text='404 Not Found'`** and **`shift=5`** output looks:
```
--------------------ENCRYPTION--------------------
Text: 404 Not Found     Shift: 5
Code: 959%Sty%Ktzsi
```
For the manual decryption method with parameters **`text='959%Sty%Ktzsi'`** and **`shift=5`** output looks:
```
---------------MANUAL DECRYPTION------------------
Code: 959%Sty%Ktzsi     Shift: 5
Text: 404 Not Found
```
For brute force decryption method with parameter **`text='959%Sty%Ktzsi'`** output looks:
```
----------------BRUTE DECRYPTION------------------
Key 0: 959%Sty%Ktzsi
Key 1: 848$Rsx$Jsyrh
Key 2: 737#Qrw#Irxqg
Key 3: 626"Pqv"Hqwpf
Key 4: 515!Opu!Gpvoe
Key 5: 404 Not Found
Key 6: 3/3}Mns}Entmc
Key 7: 2.2|Lmr|Dmslb
Key 8: 1-1{Klq{Clrka
Key 9: 0,0zJkpzBkqj`
Key 10: /+/yIjoyAjpi_
...
Key 93: :6:&Tuz&Lu{tj
Key 94: 959%Sty%Ktzsi
```
I didn't paste the entire result because it contains the keys from 0 to 94 which makes it very long. 😋
<a name="vc"></a>
## Vigenere Cipher
<a name="dvc"></a>
### Description
It's an application written with NodeJS that allows the user to encrypt text using the Vigenere cipher. The alphabets range is ASCII from 32 to 126, so include a space, punctuation, uppercase and lowercase letters.

The user enters the text and the encryption key in the appropriate inputs and the application returns the encrypted text below.
Additionally, the user can display the Vegener cipher table by pressing the button.

### App built with:
- [bootswatch](https://bootswatch.com/sketchy/)
- [nodeJS](https://nodejs.org/en/)
- [Mocha](https://mochajs.org) **for testing**

<a name="pvc"></a>
### Preview
<p align="center">
<img src="https://user-images.githubusercontent.com/51888438/109837629-a94e4a00-7c45-11eb-85a0-95e9e2741a95.gif" alt="gif" >
</p>

<a name="usage"></a> 
## Usage
To install all dependencies:
```
npm install
```
To run tests:
```
npm test
```
