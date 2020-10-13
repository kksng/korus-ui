import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => {
  const [value, setValue] = React.useState(false);

  return (
    <>
      <L.Input
        validator="cadastralNumber"
        invalidMessage="Введите кадастровый номер"
        isRequired
        form="myAwesomeForm"
        name="myAwesomeCadastrialNumber"
      />
      {' '}
      <L.Button
        form="myAwesomeForm"
        onValidationFail={ (ev) => console.log(\`$\{e.invalidForms} is invalid\`) }
        shouldScrollToInvalidFields
        onClick={ () => alert(' :) ') }
      >
        Submit
      </L.Button>
    </>
  );
};

render(<BasicUsage />);
`,
  text: (
    <L.Div>
      <L.Div _inner>
        <pre>
          {`
            <L.Input
              // передаём паттерн валидации (см. раздел Patterns)
              validator="cadastralNumber"
  
              // сообщение, которое выводится под инпутом, если валидация не прошла
              invalidMessage="Введите кадастровый номер"
  
              // если поле обязательно
              required
  
              // если нельзя сабмитить форму с невалидным полем, нужно передать имя этой формы (см. API)
              form="myAwesomeForm"
  
              // если поле участвует в форме, то у него должно быть уникальное имя
              name="myAwesomeCadastrialNumber"
  
              // остальные атрибуты
              ...
            >
          `}
        </pre>
      </L.Div>
      <L.Div _inner>
        <pre>
          {`
            <L.Button
              // связь кнопки с полями, которые нужно валидировать
              form="myAwesomeForm"
            
              // если нужно связать кнопку с разными формами
              form={['myAwesomeForm', 'anotherAwesomeForm']}
            
              // сработает при клике на кнопку, если есть невалидные поля
              onValidationFail={ (ev) => console.log(\`$\{e.invalidForms} is invalid\`) }
            
              // прокрутка к невалидному полю при сабмите
              shouldScrollToInvalidFields
            
              // сработает только если все поля в этой же форме валидны
              onClick={ () => alert(' :) ') }
            
              // остальные атрибуты
              ...
            >
          `}
        </pre>
      </L.Div>
    </L.Div>
  ),
  source: componentSrc,
};
