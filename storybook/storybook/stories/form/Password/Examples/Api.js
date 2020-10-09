import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [value, setValue] = React.useState('');
  
  const handleChange = (ev) => {
    setValue(ev.component.value);
  };
  
  return (
    <L.Password
      onChange={handleChange}
      value={value}
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

render(<Api />);
`,
  source: componentSrc,
};
