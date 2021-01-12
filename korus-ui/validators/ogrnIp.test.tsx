import { validateOgrnIp } from './ogrn';

describe('invalidate by length', () => {
  // тесты с номерами неправильной длины

  // тесты универсального валидатора с ОГРНИП длиной 13 символов
  it('should be invalid, universal, wrong length, 13 chars', () => {
    expect(validateOgrnIp('1234567891011')).toBeFalsy();
    expect(validateOgrnIp(1234567891012)).toBeFalsy();
  });

  // тесты универсального валидатора с ОГРНИП длиной 14 символов
  it('should be invalid, universal, wrong length, 14 chars', () => {
    expect(validateOgrnIp('12345678910345')).toBeFalsy();
    expect(validateOgrnIp(12345678910345)).toBeFalsy();
  });

  // тесты универсального валидатора с ОГРНИП длиной 16 символов
  it('should be invalid, universal, too long, 16 chars', () => {
    expect(validateOgrnIp('12345678910111155')).toBeFalsy();
    expect(validateOgrnIp(12345678910111155)).toBeFalsy();
  });
});

describe('invalidate by checknumber', () => {
  // тесты с некорректными номерами

  // тесты универсального валидатора с ОГРНИП длиной 15 символов
  it('should be invalid, universal, wrong, 15 chars', () => {
    expect(validateOgrnIp('111111111111112')).toBeFalsy();
    expect(validateOgrnIp('123445567777734')).toBeFalsy();
    expect(validateOgrnIp(123442343777734)).toBeFalsy();
  });
});

describe('validateExternal', () => {
  // тесты с корректными номерами

  // тесты универсального валидатора с ОГРНИП длиной 15 символов
  it('should be valid, universal, right, 15 chars', () => {
    expect(validateOgrnIp('301867947343831')).toBeTruthy();
    expect(validateOgrnIp('317245810467192')).toBeTruthy();
    expect(validateOgrnIp('313131124467300')).toBeTruthy();
    expect(validateOgrnIp(318675849865482)).toBeTruthy();
  });
});
