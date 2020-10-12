import React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const OnChange = {
  liveDemo: `
const OnChange = () => {
  const textField = 'name';
  
  const [value, setValue] = React.useState('');
  
  const handleChange = ev => {
    const { component: { suggestion, value } } = ev;
  
    setValue(value);
    
    if (suggestion) {
      const valueFoundInData = typeof suggestion === 'string'
        ? suggestion
        : suggestion[textField];
        
      console.log('You have chosen', valueFoundInData);
    }
  }

  return (
    <L.AutoComplete
      // data={['Moscow', 'Saint-Petersburg']}
      data={[{ name: 'Moscow' }, { name: 'Saint-Petersburg' }, { name: 'Saint-Petersburg2' }]}
      textField={textField}
      onChange={ev => handleChange(ev)}
      value={value}
    />
  )
};

render(<OnChange />);
`,
  text: (
    <L.Div _block>
      <section className="block">
        <L.H2 _block-header>Event</L.H2>
        <L.P>
          При каждом изменении <b>value</b> в автокомплите в <b>onChange</b> приходит event в формате:
        </L.P>
        <L.Div _block>
          <pre>
            {
              `
                interface ChangeEvent<T = any> extends React.ChangeEvent<T> {
                  component: {
                    value: string,
                    method: 'clear' | 'click' | 'down'| 'enter' | 'trigger' | 'type' | 'up', 
                    name?: string,
                    suggestion?: string | DataObject | null,
                  },
                }        
              `
            }
          </pre>
        </L.Div>
        <L.Div _block>
          <L.Ul _txt-list>
            <li>
              <strong>method</strong> - способ, которым было изменено значение (см. ниже)
            </li>
            <li>
              <strong>name</strong> - имя компонента для форм и валидации
            </li>
            <li>
              <strong>suggestion</strong> - если текст в инпуте совпадает с одним из значений в выпадащем списке, в suggestion придёт соответствующая строка или объект из массива data
            </li>
            <li>
              <strong>value</strong> - значение в инпуте автокомплита
            </li>
          </L.Ul>
        </L.Div>
      </section>
      <section className="block">
        <L.H2 _block-header>Свойство Method</L.H2>
        <L.Div _block>
          <L.Ul _txt-list>
            <li>
              <strong>clear</strong> - очистка значения кнопкой clear
            </li>
            <li>
              <strong>click</strong> - выбор значения кликом по значению в выпадающем списке
            </li>
            <li>
              <strong>down</strong> - нажатие вниз при переходе по выпадающему списку с клавиатуры
            </li>
            <li>
              <strong>enter</strong> - нажатие на enter при выборе элемента в выпадающем списке с клавиатуры
            </li>
            <li>
              <strong>trigger</strong> - программный вызвов onChange
            </li>
            <li>
              <strong>type</strong> - ввод/удаление символа с клавиатуры
            </li>
            <li>
              <strong>up</strong> - нажатие вверх при переходе по выпадающему списку с клавиатуры
            </li>
          </L.Ul>
        </L.Div>
      </section>
    </L.Div>
  ),
  source: componentSrc,
};
