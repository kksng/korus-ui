import { PasswordStrength } from './constants';
import { PasswordProps, PasswordEvaluator, StrengthLevelToCssClassProps } from './types';
import { validate } from '../../validators';

export const transformToCase = (letter: string, letterCase: PasswordProps['letterCase']): string | never => {
  if (letterCase === 'lower') return letter.toLowerCase();

  if (letterCase === 'upper') return letter.toUpperCase();

  throw new Error('L.Password: letterCase prop must be \'lower\' or \'upper\'!');
};

export const getValue = (valueProp: string | null | undefined, valueState: string): string => {
  if (valueProp === undefined) return valueState;

  if (valueProp === null) {
    return '';
  }

  return valueProp;
};

export const strengthLevelToCssClass = (props: StrengthLevelToCssClassProps): string => {
  const { strengthLevel, theme } = props;
  if (strengthLevel === PasswordStrength.Strong) return theme.messageStrong;
  if (strengthLevel === PasswordStrength.Medium) return theme.messageMedium;
  if (strengthLevel === PasswordStrength.Low) return theme.messageWeak;
  throw new Error('L.Password: strengthLevelToCssClass didn\'t find a suitable strength level');
};

export const getIsPasswordOk = (value: string, evaluator: PasswordEvaluator['evaluator']): boolean => {
  if (evaluator instanceof RegExp) {
    return evaluator.test(value);
  }
  return evaluator(value);
};

export const getPasswordStrength = (value = '', passwordEvaluators?: PasswordEvaluator[]): { strengthLevel: PasswordStrength, message: string } => {
  if (passwordEvaluators) {
    const evaluationResult = (() => {
      // strongest to lowest
      const strengthLevels = Object.values(PasswordStrength).reverse();

      // find the highest strength level
      // for which the password passes the evaluation
      const maxAchievedLevel = strengthLevels
        .find((level) => passwordEvaluators
          .find((evaluatorObject) => {
            const { evaluator, strengthLevel } = evaluatorObject;
            if (strengthLevel === level) return getIsPasswordOk(value, evaluator);

            // wrong strength level, go further
            return false;
          }));

      return passwordEvaluators.find(({ strengthLevel }) => (strengthLevel === maxAchievedLevel));
    })();

    if (evaluationResult) {
      const { strengthLevel, evaluationMessage } = evaluationResult;
      return {
        message: evaluationMessage,
        strengthLevel,
      };
    }

    return {
      message: 'Слабый пароль',
      strengthLevel: PasswordStrength.Low,
    };
  }

  if (value == null) {
    return {
      message: 'Слабый пароль',
      strengthLevel: PasswordStrength.Low,
    };
  }

  if (validate.password(value)) {
    return {
      message: 'Надёжный пароль',
      strengthLevel: PasswordStrength.Medium,
    };
  }

  return {
    message: 'Слабый пароль',
    strengthLevel: PasswordStrength.Low,
  };
};
