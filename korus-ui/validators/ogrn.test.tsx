import { validateOgrn } from './ogrn';

describe('invalidate by length', () => {
  // тесты с номерами неправильной длины

  // тесты универсального валидатора с ОГРН длиной 11 символов
  it('should be invalid, universal, wrong length, 11 chars', () => {
    expect(validateOgrn('12345678910')).toBeFalsy();
    expect(validateOgrn(12345678910)).toBeFalsy();
  });

  // тесты универсального валидатора с ОГРН длиной 12 символов
  it('should be invalid, universal, wrong length, 12 chars', () => {
    expect(validateOgrn('12345678910111')).toBeFalsy();
    expect(validateOgrn(12345678910111)).toBeFalsy();
  });

  // тесты универсального валидатора с ОГРН длиной 14 символов
  it('should be invalid, universal, too long, 14 chars', () => {
    expect(validateOgrn('123456789101111')).toBeFalsy();
    expect(validateOgrn(123456789101111)).toBeFalsy();
  });
});

describe('invalidate by checknumber', () => {
  // тесты с некорректными номерами

  // тесты универсального валидатора с ОГРН длиной 13 символов
  it('should be invalid, universal, wrong, 13 chars', () => {
    expect(validateOgrn('1111111111111')).toBeFalsy();
    expect(validateOgrn('1234455677777')).toBeFalsy();
    expect(validateOgrn(7801392272112)).toBeFalsy();
  });
});

describe('validateExternal', () => {
  // тесты с корректными номерами

  // тесты универсального валидатора с ОГРН длиной 13 символов
  it('should be valid, universal, right, 13 chars', () => {
    expect(validateOgrn('1037739169335')).toBeTruthy();
    expect(validateOgrn('1116658026132')).toBeTruthy();
    expect(validateOgrn('1027802761282')).toBeTruthy();
    expect(validateOgrn(1116658026132)).toBeTruthy();
  });
});
