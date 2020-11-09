import React from 'react';
import { Div } from '../Div';
import { PasswordMessageProps } from './types';
import { getPasswordStrength, strengthLevelToCssClass } from './helpers';

export const PasswordMessage = (props: PasswordMessageProps) => {
  const {
    value, theme, minPasswordEvaluationLength, passwordEvaluators, passwordRules,
  } = props;

  if (
    value === null
    || value.length < minPasswordEvaluationLength
  ) {
    return (
      <Div
        className={theme?.messageDefault}
      >
        { passwordRules ?? 'Используйте строчные и прописные латинские буквы и цифры, не менее 8 символов' }
      </Div>
    );
  }

  const { strengthLevel, message } = getPasswordStrength(value, passwordEvaluators);

  return (
    <Div
      className={strengthLevelToCssClass({ theme, strengthLevel })}
    >
      {message}
    </Div>
  );
};
