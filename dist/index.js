!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.cipher=r():e.cipher=r()}(this,(function(){return(()=>{"use strict";var e={738:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=t(928),i=t(123);r.default={decrypt:function(e,r){if(13===r)return i.default.decrypt(e);var t="";return e.toLowerCase().split("").forEach((function(e){var i=n.ALPHABET.indexOf(e);if(" "===e||n.isNumber(e)||n.isSpecialChar(e))t+=e;else{var a=i-r;a>n.ALPHABET.length-1&&(a%=n.ALPHABET.length),a<0&&(a=n.ALPHABET.length-Math.abs(a%n.ALPHABET.length)),t+=n.ALPHABET[a]}})),t},encrypt:function(e,r){if(13===r)return i.default.encrypt(e);var t="";return e.toLowerCase().split("").forEach((function(e){var i=n.ALPHABET.indexOf(e);if(" "===e||n.isNumber(e)||n.isSpecialChar(e))t+=e;else{var a=i+r;a>n.ALPHABET.length-1&&(a%=n.ALPHABET.length),a<0&&(a=n.ALPHABET.length-Math.abs(r%n.ALPHABET.length)),t+=n.ALPHABET[a]}})),t}}},607:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.caesar=r.rot13=void 0;var n=t(123);r.rot13=n.default;var i=t(738);r.caesar=i.default},123:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=t(928),i=function(e){var r="";return e.toLowerCase().split("").forEach((function(e){var t=n.ALPHABET.indexOf(e);if(t>-1)r+=n.ROT13_ALPHABET[t];else{if(" "!==e&&!n.isNumber(e)&&!n.isSpecialChar(e))throw"Phrase is indecipherable as a ROT13.";r+=e}})),r},a=i;r.default={decrypt:i,encrypt:a}},928:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.isSpecialChar=r.isNumber=r.ROT13_ALPHABET=r.ALPHABET=void 0,r.ALPHABET=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],r.ROT13_ALPHABET=["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"],r.isNumber=function(e){return!!Number(e)},r.isSpecialChar=function(e){return e.match(/[^\w\s]/)}}},r={};return function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}(607)})()}));