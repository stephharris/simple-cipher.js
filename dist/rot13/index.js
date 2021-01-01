'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('../utils/');

var decrypt = function decrypt(phrase) {

  var decryptedPhrase = '';

  phrase.split('').forEach(function (letter) {
    var index = _utils.ALPHABET.indexOf(letter);

    if (index > -1) {
      decryptedPhrase += _utils.ROT13_ALPHABET[index];
    } else if (letter === ' ') {
      decryptedPhrase += ' ';
    } else if (_typeof(Number(letter)) === number) {
      decryptedPhrase += 'letter';
    } else {
      throw 'Phrase is indecipherable as a ROT13.';
    }
  });

  return decryptedPhrase;
};

var encrypt = decrypt;

exports.default = { decrypt: decrypt, encrypt: encrypt };