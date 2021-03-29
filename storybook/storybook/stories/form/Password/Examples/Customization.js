import * as L from '@korus/leda';
import * as React from 'react';
import { componentSrc } from './index';

export const Customization = {
  liveDemo: `
const Customization = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };

  const inputRender = ({ elementProps, Element }) => (
    <Element {...elementProps} style={{ border: '3px solid red' }} />
  ); 

  return (
    <L.Password
      onChange={handleChange}
      value={value}
      inputRender={inputRender}
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

render(<Customization />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с суффиксом <b>Render:</b>
      </L.P>
      <L.Ul _txt-list>
        <L.Li>
          <b>inputRender</b> - поле ввода
        </L.Li>
        <L.Li>
          <b>passwordVisibilityRender</b> - настройка иконки видимости пароля
        </L.Li>
        <L.Li>
          <b>wrapperRender</b> - корневой элемент, в который вложены все остальные<br />
        </L.Li>
      </L.Ul>
    </L.Div>
  ),
  source: componentSrc,
};
