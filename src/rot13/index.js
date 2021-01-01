'use strict'

import { ALPHABET, ROT13_ALPHABET } from '../utils/';

const decrypt = (phrase) => {

  let decryptedPhrase = '';

  phrase.split('').forEach((letter) => {
  	const index = ALPHABET.indexOf(letter);

  	if(index > -1) {
  		decryptedPhrase += ROT13_ALPHABET[index]
  	} else if(letter === ' ') {
  		decryptedPhrase += ' ';
  	} else if(typeof Number(letter) === number) {
  		decryptedPhrase += 'letter'
  	} else {
  		throw 'Phrase is indecipherable as a ROT13.'
  	}

  })

  return decryptedPhrase;
}

const encrypt = (phrase) => {
  console.log('phrase', phrase)
}

export default { decrypt, encrypt };