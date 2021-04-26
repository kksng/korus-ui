import * as React from 'react';
import * as L from '../../../korus-ui';
import { PasswordStrength } from '../../../korus-ui/components/Password/constants';

export const Password = (): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <L.Div _box _inner _demoBg>
      <L.Password
        _inner
        minPasswordEvaluationLength={5}
        maxLength={20}
        passwordRules="Задайте хороший пароль"
        passwordEvaluators={[
          {
            evaluationMessage: 'Пароль слабоват',
            evaluator: (): boolean => true,
            strengthLevel: PasswordStrength.Low,
          },
          {
            evaluationMessage: 'Пароль норм',
            evaluator: (password): boolean => {
              if (L.validate.password(password)) return true;
              return false;
            },
            strengthLevel: PasswordStrength.Medium,
          },
          {
            evaluationMessage: 'Пароль огонь',
            evaluator: (password): boolean => {
              if (L.validate.password(password) && password.length > 12 && /[!@#$%*]/.test(password)) {
                return true;
              }
              return false;
            },
            strengthLevel: PasswordStrength.Strong,
          },
        ]}
        name="Password"
        id="Password"
        form="AwesomePassword"
        data-test="password"
        value={value}
        onChange={(ev: L.PasswordTypes.ChangeEvent): void => {
          setValue(ev.component.value);
          console.log('Change', ev);
        }}
        placeholder="Enter your password..."
        onFocus={(ev: L.PasswordTypes.FocusEvent): void => {
          console.log('Focus', ev.component.value);
        }}
        onEnterPress={({ component }): void => {
          console.log(component.name, component.value);
        }}
        onBlur={(ev: L.PasswordTypes.BlurEvent): void => {
          console.log('Blur', ev.component.value);
        }}
        isRequired
        requiredMessage="Пароль обязателен!"
        validator="password"
        _width30
        {...props}
      />
      <br />
      <L.Password
        _inner
        id="withDefaultValue"
        defaultValue="Самый безопасный пароль"
        _width30
      />
      <br />
      <L.Password
        _inner
        id="lowercase"
        letterCase="lower"
        hasClearButton
        _width30
      />
      <br />
      <L.Password
        _inner
        id="uppercase"
        letterCase="upper"
        _width30
      />
      <br />
      <L.Password
        _inner
        id="withAllowedSymbols"
        allowedSymbols={/([A-Za-z]|\s)/}
        _width30
      />
      <br />
      <L.Password
        _inner
        id="withForbiddenSymbols"
        forbiddenSymbols={/([A-Za-z]|\s)/}
        _width30
      />
      <br />
      <L.Password
        _inner
        id="isDisabled"
        isDisabled
        _width30
      />
    </L.Div>
  );
};
