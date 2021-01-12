import { validateEmail } from './email';

describe('email validator', () => {
  it('should validate correct email with letters', () => {
    expect(validateEmail('abc@mail.ru')).toBeTruthy();
  });

  it('should validate correct short email', () => {
    expect(validateEmail('a@m.ru')).toBeTruthy();
  });

  it('should validate correct email with letters and digits', () => {
    expect(validateEmail('abc2@mail2.ru')).toBeTruthy();
  });
  it('should validate correct email with letters and digits and _', () => {
    expect(validateEmail('abc_2@mail2.ru')).toBeTruthy();
  });
  it('should validate correct email with letters and digits and _ and -', () => {
    expect(validateEmail('ab_c-2@mail2.ru')).toBeTruthy();
  });

  it('should validate correct email domain with letters and digits', () => {
    expect(validateEmail('abc@mail2.ru')).toBeTruthy();
  });
  it('should validate correct email domain with letters and digits and _', () => {
    expect(validateEmail('abc@mail_2.ru')).toBeTruthy();
  });
  it('should validate correct email domain with letters and digits and _ and -', () => {
    expect(validateEmail('abc@mail_z-2.ru')).toBeTruthy();
  });

  it('should validate correct email with several level domains', () => {
    expect(validateEmail('abc@mail2.domain.ru')).toBeTruthy();
  });

  it('should not validate an email without @', () => {
    expect(validateEmail('abc.mail.ru')).toBeFalsy();
  });
  it('should not validate an email without high level domain', () => {
    expect(validateEmail('abc@mail.')).toBeFalsy();
  });
  it('should not validate an email without address', () => {
    expect(validateEmail('@mail.ru')).toBeFalsy();
  });
  it('should not validate an email without domain', () => {
    expect(validateEmail('abc@.ru')).toBeFalsy();
  });
  it('should not validate an email with forbidden symbol !', () => {
    expect(validateEmail('abc!@mail.ru')).toBeFalsy();
  });
  it('should not validate an email with forbidden symbol ,', () => {
    expect(validateEmail('abc,@mail.ru')).toBeFalsy();
  });
  it('should not validate an email with forbidden symbol #', () => {
    expect(validateEmail('abc#@mail.ru')).toBeFalsy();
  });
  it('should not validate an email with forbidden symbol /', () => {
    expect(validateEmail('abc/@mail.ru')).toBeFalsy();
  });
  it('should not validate an email with forbidden symbol \\', () => {
    expect(validateEmail('abc\\@mail.ru')).toBeFalsy();
  });

  it('should not validate an email with two dots in a row', () => {
    expect(validateEmail('abc@mail..ru')).toBeFalsy();
  });

  it('should not validate an email with backspace', () => {
    expect(validateEmail('abc @mail.ru')).toBeFalsy();
  });
});
