import * as React from 'react';
import * as L from '@korus/leda';
import { overreactedTheme } from '../../../../themes';

/* eslint-disable react/no-unescaped-entities */
export const CustomizationButton = {
  text: (
    <L.Div _block>
      <L.H2 _block-header>
        Кастомизация Button
      </L.H2>
      <L.P>Для того, чтобы кнопки в компоненте, используйте - <b>buttonRender</b>.</L.P>
      <L.P>
        Данный атрибут принимает функцию следующего вида:<br />
        <code style={overreactedTheme} language="jsx">{'({ Element, elementProp, componentProps, componentState }) => React.ReactNode'}</code>
      </L.P>
      <br />
      <L.P>
        Пример использования:
      </L.P>
    </L.Div>
  ),
  liveDemo: `
const Customization = () => {
  
  return (
    <L.ButtonGroup
      data={["one", "two", "three", "four"]}
      defaultValue={["one"]}
      type="checkbox"
      _primary
      wrapperRender={({ elementProps }) => <L.Ul {...elementProps} className="" />}
      buttonRender={({ Element, elementProps }) => (
        <L.Li>
          <Element 
            {...elementProps} 
            className={elementProps.className.replace(/(first|last|button-group-item)/gi, '').concat(' margin-top')} 
          />
        </L.Li>
      )}
    />
  );
};

render(<Customization />);
`,
};
