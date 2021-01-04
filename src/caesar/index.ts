'use strict'

import { ALPHABET, isNumber, isSpecialChar } from '../utils/';
import rot13 from '../rot13/';


const encrypt = (phrase: string, shift: number) => {

  if(shift === 13) {
    return rot13.encrypt(phrase);
  }

  let encryptedPhrase = '';

  phrase.toLowerCase().split('').forEach((letter) => {
    const index = ALPHABET.indexOf(letter);
 
    if(letter === ' ' || isNumber(letter) || isSpecialChar(letter)) {
      encryptedPhrase += letter;
      return;
    }

    let shiftedIndex = index + shift;

    if(shiftedIndex > (ALPHABET.length - 1)) {
      shiftedIndex = shiftedIndex % ALPHABET.length;
    }

    if(shiftedIndex < 0) {
      shiftedIndex = ALPHABET.length - Math.abs(shift % ALPHABET.length)
    }  
      
    encryptedPhrase += ALPHABET[shiftedIndex];
    
  })  

  return encryptedPhrase;
}


const decrypt = (phrase: string, shift: number) => {

  if(shift === 13) {
    return rot13.decrypt(phrase);
  }

  let decryptedPhrase = '';

  phrase.toLowerCase().split('').forEach((letter) => {
    const index = ALPHABET.indexOf(letter);
 
    if(letter === ' ' || isNumber(letter) || isSpecialChar(letter)) {
      decryptedPhrase += letter;
      return;
    }

    let shiftedIndex = index - Math.abs(shift);

    if(shiftedIndex > (ALPHABET.length - 1)) {

      shiftedIndex = shiftedIndex % ALPHABET.length;
    }

    if(shiftedIndex < 0) {
      shiftedIndex = ALPHABET.length - Math.abs(shiftedIndex % ALPHABET.length)
    }  
      
    decryptedPhrase += ALPHABET[shiftedIndex];
    
  })  

  return decryptedPhrase;
}

export default { decrypt, encrypt };