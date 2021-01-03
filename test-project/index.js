//const cipher = require('simple-cipher-js');

// console.log('####', cipher.rot13.encrypt('uryyb jbeyq'))
// console.log('####', cipher.caesar.decrypt('uryyb jbeyq', 13))
// console.log('####', cipher.caesar.encrypt('aaa', 2))

const { caesar, rot13 } = require('simple-cipher-js');


console.log('###', caesar.encrypt('ix xy fvyxi', -4));