'use strict'

import { ALPHABET, ROT13_ALPHABET, isNumber, isSpecialChar } from '../utils/';

const decrypt = (phrase: string) => {

  let decryptedPhrase = '';

  phrase.toLowerCase().split('').forEach((letter) => {
  	const index = ALPHABET.indexOf(letter);

  	if(index > -1) {
  		decryptedPhrase += ROT13_ALPHABET[index]
  	} else if(letter === ' ' || isNumber(letter) || isSpecialChar(letter)) {
      decryptedPhrase += letter;
  	} else {
  		throw 'Phrase is indecipherable as a ROT13.'
  	}

  })

  return decryptedPhrase;
}

// because rot13's rotational value is 13 & the english alphabet contains 26 letters (26/2 = 13)
// => encrypt will equal decrypt
const encrypt = decrypt;

export default { decrypt, encrypt };