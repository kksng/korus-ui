import * as helpers from './helpers';
import { defaultPasswordTheme as theme } from './theme';
import { PasswordStrength } from './constants';

describe('transformToCase tests', () => {
  it('Should return uppercase string', () => {
    const letter = 'hello';
    const letterCase = 'upper';
    const expected = 'HELLO';
    expect(helpers.transformToCase(letter, letterCase)).toBe(expected);
  });

  it('Should return lowercase string', () => {
    const letter = 'HELLO';
    const letterCase = 'lower';
    const expected = 'hello';
    expect(helpers.transformToCase(letter, letterCase)).toBe(expected);
  });
});

describe('getValue tests', () => {
  it('Should return valueProp if its a string', () => {
    const valueProp = 'Value';
    const valueState = 'Hello';
    const expected = 'Value';
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });

  it('Should return empty string if valueProp is null', () => {
    const valueProp = null;
    const valueState = 'Hello';
    const expected = '';
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });

  it('Should return valueState if valueProp undefined', () => {
    const valueProp = undefined;
    const valueState = 'Hello';
    const expected = 'Hello';
    expect(helpers.getValue(valueProp, valueState)).toBe(expected);
  });
});

describe('strengthLevelToCssClass tests', () => {
  it('Should return class password-message-strong', () => {
    const props = {
      strengthLevel: PasswordStrength.Strong,
      theme,
    };
    const expected = theme.messageStrong;
    expect(helpers.strengthLevelToCssClass(props)).toBe(expected);
  });

  it('Should return class password-message-mediun', () => {
    const props = {
      strengthLevel: PasswordStrength.Medium,
      theme,
    };
    const expected = theme.messageMedium;
    expect(helpers.strengthLevelToCssClass(props)).toBe(expected);
  });

  it('Should return class password-message-weak', () => {
    const props = {
      strengthLevel: PasswordStrength.Low,
      theme,
    };
    const expected = theme.messageWeak;
    expect(helpers.strengthLevelToCssClass(props)).toBe(expected);
  });
});

describe('getIsPasswordOk tests', () => {
  it('Should return true, if evaluator is function', () => {
    const value = 'Hello';
    const evaluator = (): boolean => true;
    expect(helpers.getIsPasswordOk(value, evaluator)).toBeTruthy();
  });

  it('Should return false if evaluator accept only symbols and value has letters', () => {
    const value = 'Hello';
    const evaluator = /[!@#$%*]/;
    expect(helpers.getIsPasswordOk(value, evaluator)).toBeFalsy();
  });

  it('Should return true if evaluator accept only symbols and value has symbols', () => {
    const value = '^&*(';
    const evaluator = /[!@#$%*]/;
    expect(helpers.getIsPasswordOk(value, evaluator)).toBeTruthy();
  });

  it('Should return true if evaluator accept only latin symbols and value has latin symbols', () => {
    const value = 'Hello';
    const evaluator = /([A-Za-z]|\s)/;
    expect(helpers.getIsPasswordOk(value, evaluator)).toBeTruthy();
  });

  it('Should return false if evaluator accept only latin symbols and value has cyrillic symbols', () => {
    const value = 'Привет';
    const evaluator = /([A-Za-z]|\s)/;
    expect(helpers.getIsPasswordOk(value, evaluator)).toBeFalsy();
  });

  it('Should return true if evaluator accept only cyrillic symbols and value has cyrillic symbols', () => {
    const value = 'Привет';
    const evaluator = /([А-Яа-я]|\s)/;
    expect(helpers.getIsPasswordOk(value, evaluator)).toBeTruthy();
  });
});

describe('getPasswordStrength tests', () => {
  it('Should return weak password message if value is empty string', () => {
    const value = '';
    const expected = {
      message: 'Слабый пароль',
      strengthLevel: PasswordStrength.Low,
    };
    expect(helpers.getPasswordStrength(value)).toEqual(expected);
  });

  it('Should return weak password message if value undefined', () => {
    const value = undefined;
    const expected = {
      message: 'Слабый пароль',
      strengthLevel: PasswordStrength.Low,
    };
    expect(helpers.getPasswordStrength(value)).toEqual(expected);
  });

  it('Should return weak password message', () => {
    const value = 'Admin';
    const expected = {
      message: 'Слабый пароль',
      strengthLevel: PasswordStrength.Low,
    };
    expect(helpers.getPasswordStrength(value)).toEqual(expected);
  });

  it('Should return a medium password message', () => {
    const value = 'Admin123';
    const expected = {
      message: 'Надёжный пароль',
      strengthLevel: PasswordStrength.Medium,
    };
    expect(helpers.getPasswordStrength(value)).toEqual(expected);
  });

  it('Should return evaluationMessage as password message', () => {
    const value = 'Admin12313';
    const passwordEvaluators = [{
      evaluationMessage: 'Так себе пароль',
      evaluator: /([A-Za-z]|\s)/,
      strengthLevel: PasswordStrength.Low,
    }];
    const expected = {
      message: 'Так себе пароль',
      strengthLevel: PasswordStrength.Low,
    };
    expect(helpers.getPasswordStrength(value, passwordEvaluators)).toEqual(expected);
  });

  it('Should return strengthLevel as password strengthLevel', () => {
    const value = 'Admin12313';
    const passwordEvaluators = [{
      evaluationMessage: 'Так себе пароль',
      evaluator: /([A-Za-z]|\s)/,
      strengthLevel: PasswordStrength.Strong,
    }];
    const expected = {
      message: 'Так себе пароль',
      strengthLevel: PasswordStrength.Strong,
    };
    expect(helpers.getPasswordStrength(value, passwordEvaluators)).toEqual(expected);
  });
});
