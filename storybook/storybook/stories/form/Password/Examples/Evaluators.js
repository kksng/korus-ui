import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Evaluators = {
  liveDemo: `
const Evaluators = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.Password
      onChange={handleChange}
      value={value}
      _width-30
      passwordEvaluators={[
        {
          strengthLevel: L.PasswordTypes.PasswordStrength.Low,
          evaluator: () => true,
          evaluationMessage: 'Пароль слабоват',
        },
        {
          strengthLevel: L.PasswordTypes.PasswordStrength.Medium,
          evaluator: (password) => {
            if (L.validate.password(password)) return true;
            return false;
          },
          evaluationMessage: 'Надёжный пароль',
        },
        {
          strengthLevel: L.PasswordTypes.PasswordStrength.Strong,
          evaluator: (password) => {
            if (
              L.validate.password(password)
              && password.length > 12
              && /[!@#$%*]/.test(password)
            ) {
              return true;
            }
            return false;
          },
          evaluationMessage: 'Отличный пароль',
        },
      ]}
    />
  );
};

render(<Evaluators />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для задания оценок сложности пароля используйте следующие методы:
      </L.P>
      <L.Ul _txt-list>
        <L.Li>
          <b>minPasswordEvaluationLength</b> - Минимальная длина пароля, с которой начинается оценка его сложности. По умолчанию - 4
        </L.Li>
        <L.Li>
          <b>passwordEvaluators</b> - Правила для оценки сложности пароля. Всего предусмотрено три уровня <b>strengthLevel</b>: 
          <L.Ul>
            <L.Li>strong</L.Li>
            <L.Li>medium</L.Li>
            <L.Li>low</L.Li>
            </L.Ul> Используйте все три или столько, сколько считаете необходимым.
        </L.Li>
        <L.Li>
          <b>passwordRules</b> - Сообщение под полем ввода с правилами для пароля. Сообщение отображается, пока пароль не достигнет длины <b>minPasswordEvaluationLength</b>. После этого сообщение сменится на сообщение с оценкой надёжности пароля из <b>passwordEvaluators</b>.<br />
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
