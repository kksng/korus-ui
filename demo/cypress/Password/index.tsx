import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../../components/StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';
import { PasswordStrength } from '../../../leda/components/Password/constants';

export const Password = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<string | null>(null);

  const { update, EventInfo } = useEventSpy();

  return (
    <L.Div _box _inner _demoBg>
      <L.Password
        minPasswordEvaluationLength={5}
        passwordRules="Задайте хороший пароль"
        passwordEvaluators={[
          {
            strengthLevel: PasswordStrength.Low,
            evaluator: () => true,
            evaluationMessage: 'Пароль слабоват',
          },
          {
            strengthLevel: PasswordStrength.Medium,
            evaluator: (password) => {
              if (L.validate.password(password)) return true;
              return false;
            },
            evaluationMessage: 'Пароль норм',
          },
          {
            strengthLevel: PasswordStrength.Strong,
            evaluator: (password) => {
              if (
                L.validate.password(password) &&
                password.length > 12 &&
                /[!@#$%*]/.test(password)
              ) {
                return true;
              }
              return false;
            },
            evaluationMessage: 'Пароль огонь',
          },
        ]}
        name="Password"
        form="AwesomePassword"
        data-test="password"
        value={value}
        onChange={(ev) => {
          setValue(ev.component.value);
          update('Change', ev);
        }}
        placeholder="Enter your password..."
        onFocus={(ev) => {
          update('Focus', ev);
        }}
        onEnterPress={({ component }) => {
          console.log(component.name, component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        isRequired
        requiredMessage="Пароль обязателен!"
        validator="password"
        _width30
        {...props}
      />
      <br />
      <L.Password isDisabled={true} _width30></L.Password>
    </L.Div>
  );
};