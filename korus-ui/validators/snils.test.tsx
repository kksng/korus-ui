import { validateSnils } from './snils';

describe('snils validator testing', () => {
  // тесты с пустым значением
  it('should be invalid with no value', () => {
    expect(validateSnils()).toBeFalsy();
    expect(validateSnils('')).toBeFalsy();
  });

  // тесты с номерами неправильной длины
  it('should be invalid by length', () => {
    expect(validateSnils('149-922-932 0')).toBeFalsy();
    expect(validateSnils('122-176-471 310')).toBeFalsy();
  });

  // тесты валидных номеров
  it('should be valid', () => {
    expect(validateSnils('149-922-932 09')).toBeTruthy();
    expect(validateSnils('122-176-471 30')).toBeTruthy();
  });

  // тесты валидных номеров со значение типа number
  it('should be valid with number type value', () => {
    expect(validateSnils(14992293209)).toBeTruthy();
    expect(validateSnils(12217647130)).toBeTruthy();
  });

  // тесты с неверной чексуммой
  it('should be invalid by checksumm', () => {
    expect(validateSnils('149-922-932 19')).toBeFalsy();
    expect(validateSnils('122-176-471 34')).toBeFalsy();
  });
});
