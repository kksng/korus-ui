import { validateInn, validateInnCorp, validateInnPrivate } from './inn';

describe('invalidate by length', () => {
  // тесты с номерами неправильной длины

  // тесты универсального валидатора с ИНН длиной 9 символов
  it('should be invalid, universal, too short, 9 chars', () => {
    expect(validateInn('123456789')).toBeFalsy();
    expect(validateInn(123456789)).toBeFalsy();
  });

  // тесты валидатора юр. лица с ИНН длиной 9 символов
  it('should be invalid, corporative, too short, 9 chars', () => {
    expect(validateInnCorp('123456789')).toBeFalsy();
    expect(validateInnCorp(123456789)).toBeFalsy();
  });

  // тесты универсального валидатора с ИНН длиной 11 символов
  it('should be invalid, universal, wrong length, 11 chars', () => {
    expect(validateInn('12345678910')).toBeFalsy();
    expect(validateInn(12345678910)).toBeFalsy();
  });

  // тесты валидатора юр. лица с ИНН длиной 11 символов
  it('should be invalid, corporative, too long, 11 chars', () => {
    expect(validateInnCorp('12345678910')).toBeFalsy();
    expect(validateInnCorp(12345678910)).toBeFalsy();
  });

  // тесты валидатора физ. лица с ИНН длиной 11 символов
  it('should be invalid, private, too short, 11 chars', () => {
    expect(validateInnPrivate('12345678910')).toBeFalsy();
    expect(validateInnPrivate(12345678910)).toBeFalsy();
  });

  // тесты универсального валидатора с ИНН длиной 13 символов
  it('should be invalid, universal, too long, 13 chars', () => {
    expect(validateInn('1234567891011')).toBeFalsy();
    expect(validateInn(1234567891011)).toBeFalsy();
  });

  // тесты валидатора физ. лица с ИНН длиной 13 символов
  it('should be invalid, private, too long, 13 chars', () => {
    expect(validateInnPrivate('1234567891011')).toBeFalsy();
    expect(validateInnPrivate(1234567891011)).toBeFalsy();
  });
});

describe('invalidate by checksum', () => {
  // тесты с некорректными номерами

  // тесты универсального валидатора с ИНН длиной 10 символов
  it('should be invalid, universal, wrong checksum, 10 chars', () => {
    expect(validateInn('1234567890')).toBeFalsy();
    expect(validateInn('7801392272')).toBeFalsy();
    expect(validateInn(7801392272)).toBeFalsy();
  });

  // тесты валидатора юр. лица с ИНН длиной 10 символов
  it('should be invalid, corporative, wrong checksum, 10 chars', () => {
    expect(validateInnCorp('1234567890')).toBeFalsy();
    expect(validateInnCorp('7801392272')).toBeFalsy();
    expect(validateInnCorp(7801392272)).toBeFalsy();
  });

  // тесты универсального валидатора с ИНН длиной 12 символов
  it('should be invalid, universal, wrong checksum, 12 chars', () => {
    expect(validateInn('123456789010')).toBeFalsy();
    expect(validateInn('470707900931')).toBeFalsy();
    expect(validateInn(470707900931)).toBeFalsy();
  });

  // тесты валидатора физ. лица с ИНН длиной 12 символов
  it('should be invalid, private, wrong checksum, 12 chars', () => {
    expect(validateInnPrivate('123456789010')).toBeFalsy();
    expect(validateInnPrivate('470707900931')).toBeFalsy();
    expect(validateInnPrivate(470707900931)).toBeFalsy();
  });
});

describe('validateExternal', () => {
  // тесты с корректными номерами

  // тесты универсального валидатора с ИНН длиной 10 символов
  it('should be valid, universal, right checksum, 10 chars', () => {
    expect(validateInn('6933175218')).toBeTruthy();
    expect(validateInn('2031022801')).toBeTruthy();
    expect(validateInn('6838327904')).toBeTruthy();
    expect(validateInn('8372532480')).toBeTruthy();
    expect(validateInn('7801392271')).toBeTruthy();
    expect(validateInn(7801392271)).toBeTruthy();
  });

  // тесты валидатора юр. лица с ИНН длиной 10 символов
  it('should be valid, corporative, right checksum, 10 chars', () => {
    expect(validateInnCorp('6933175218')).toBeTruthy();
    expect(validateInnCorp('2031022801')).toBeTruthy();
    expect(validateInnCorp('6838327904')).toBeTruthy();
    expect(validateInnCorp('8372532480')).toBeTruthy();
    expect(validateInnCorp('7801392271')).toBeTruthy();
    expect(validateInnCorp(7801392271)).toBeTruthy();
  });

  // тесты универсального валидатора с ИНН длиной 12 символов
  it('should be valid, universal, right checksum, 12 chars', () => {
    expect(validateInn('733129225220')).toBeTruthy();
    expect(validateInn('956799155807')).toBeTruthy();
    expect(validateInn('702534244140')).toBeTruthy();
    expect(validateInn('974039181605')).toBeTruthy();
    expect(validateInn('470707900932')).toBeTruthy();
    expect(validateInn(470707900932)).toBeTruthy();
  });

  // тесты валидатора физ. лица с ИНН длиной 12 символов
  it('should be valid, private, right checksum, 12 chars', () => {
    expect(validateInnPrivate('733129225220')).toBeTruthy();
    expect(validateInnPrivate('956799155807')).toBeTruthy();
    expect(validateInnPrivate('702534244140')).toBeTruthy();
    expect(validateInnPrivate('974039181605')).toBeTruthy();
    expect(validateInnPrivate('470707900932')).toBeTruthy();
    expect(validateInnPrivate(470707900932)).toBeTruthy();
  });
});
