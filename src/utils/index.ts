export const ALPHABET:Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w' ,'x', 'y', 'z'];

export const ROT13_ALPHABET:Array<string> = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

export const isNumber = (text: any): boolean => {
  const num = Number(text)
  if(num === 0) return true 
  return Boolean(num)
}

export const isSpecialChar = (text: any): boolean => {
  if(typeof text !== 'string') return false
  const regex = /[^\w\s]/;
  return Boolean(text.match(regex));
}