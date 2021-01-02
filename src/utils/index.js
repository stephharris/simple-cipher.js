const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w' ,'x', 'y', 'z'];

const ROT13_ALPHABET = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

const isNumber = (text) => {
  return Boolean(Number(text))
}

const isSpecialChar = (text) => {
  const regex = /[^\w\s]/;
  return text.match(regex)
}

module.exports = {
  ALPHABET,
  ROT13_ALPHABET,
  isNumber,
  isSpecialChar
};