import { isNumber, isSpecialChar } from './index';

jest.disableAutomock();

test('isNumber', () => {
  expect(isNumber(6.5)).toBeTruthy();
  expect(isNumber('test')).toBeFalsy();
  expect(isNumber('3')).toBeTruthy();
  expect(isNumber(0)).toBeTruthy();
})

test('isSpecialChar', () => {
  expect(isSpecialChar('!')).toBeTruthy();
  expect(isSpecialChar('test')).toBeFalsy();
  expect(isSpecialChar('3')).toBeFalsy();
})