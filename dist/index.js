!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.cipher=r():e.cipher=r()}(this,(function(){return(()=>{"use strict";var e={738:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=t(928),a=t(123);r.default={decrypt:function(e,r){if(13===r)return a.default.decrypt(e);var t="";return e.toLowerCase().split("").forEach((function(e){var a=n.ALPHABET.indexOf(e);if(" "===e||n.isNumber(e)||n.isSpecialChar(e))t+=e;else{var i=a-Math.abs(r);i>n.ALPHABET.length-1&&(i%=n.ALPHABET.length),i<0&&(i=n.ALPHABET.length-Math.abs(i%n.ALPHABET.length)),t+=n.ALPHABET[i]}})),t},encrypt:function(e,r){if(13===r)return a.default.encrypt(e);var t="";return e.toLowerCase().split("").forEach((function(e){var a=n.ALPHABET.indexOf(e);if(" "===e||n.isNumber(e)||n.isSpecialChar(e))t+=e;else{var i=a+r;i>n.ALPHABET.length-1&&(i%=n.ALPHABET.length),i<0&&(i=n.ALPHABET.length-Math.abs(r%n.ALPHABET.length)),t+=n.ALPHABET[i]}})),t}}},607:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.caesar=r.rot13=void 0;var n=t(123);r.rot13=n.default;var a=t(738);r.caesar=a.default},123:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=t(928),a=function(e){var r="";return e.toLowerCase().split("").forEach((function(e){var t=n.ALPHABET.indexOf(e);if(t>-1)r+=n.ROT13_ALPHABET[t];else{if(" "!==e&&!n.isNumber(e)&&!n.isSpecialChar(e))throw"Phrase is indecipherable as a ROT13.";r+=e}})),r},i=a;r.default={decrypt:a,encrypt:i}},928:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isSpecialChar=r.isNumber=r.ROT13_ALPHABET=r.ALPHABET=void 0,r.ALPHABET=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],r.ROT13_ALPHABET=["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"],r.isNumber=function(e){var r=Number(e);return 0===r||Boolean(r)},r.isSpecialChar=function(e){return"string"==typeof e&&Boolean(e.match(/[^\w\s]/))}}},r={};return function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}(607)})()}));