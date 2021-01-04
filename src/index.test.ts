import { rot13, caesar } from './index';

jest.disableAutomock();

test('caesar: decrypt', () => {
  expect(caesar.decrypt('fcrpvny cnffjbeq', 13)).toBe('special password');
  expect(caesar.decrypt('ix xy fvyxi', -4)).toBe('et tu brute');
})

test('caesar: encrypt', () => {
  expect(caesar.encrypt('special password!', 13)).toBe('fcrpvny cnffjbeq!');
  expect(caesar.encrypt('password', 23)).toBe('mxpptloa');
})


test('rot13: decrypt', () => {
  expect(rot13.decrypt('fcrpvny cnffjbeq')).toBe('special password');
  expect(rot13.decrypt('fvzcyr pvcuref ner sha!')).toBe('simple ciphers are fun!')
})

test('rot13: encrypt', () => {
  expect(rot13.encrypt('special password')).toBe('fcrpvny cnffjbeq');
  expect(rot13.encrypt('fvzcyr pvcuref ner sha!')).toBe('simple ciphers are fun!')
})