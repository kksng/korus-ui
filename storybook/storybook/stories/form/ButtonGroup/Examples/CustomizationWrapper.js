import * as React from 'react';
import * as L from '@korus/leda';
import { overreactedTheme } from '../../../../themes';

export const CustomizationWrapper = {
  text: (
    <L.Div _block>
      <L.H2 _block-header>
        Кастомизация Wrapper
      </L.H2>
      <L.P>Для того, чтобы изменить враппер компонента, используйте - <b>wrapperRender</b>.</L.P>
      <L.P>
        Данный атрибут принимает функцию следующего вида:<br />
        <code style={overreactedTheme} language="jsx">{'({ Element, elementProp, componentProps, componentState }) => React.ReactNode'}</code>
      </L.P>
      <br />
      <L.P>
        <b>Обратите внимание!</b> Все рендеры "замещают" элементы по-умолчанию, поэтому вы должны
        передать <i>children</i> из <i>elementProps</i> в возвращаемый элемент: <br />
        <code style={overreactedTheme} language="jsx">{'({ elementProp }) => <MyAwesomeWrapper myAwesomeProps={...}>{elementProps.children}</MyAwesomeWrapper>'}</code>
      </L.P>
    </L.Div>
  ),
  liveDemo: `
const Customization = () => {
  
  return (
    <L.ButtonGroup
      data={["one", "two", "three", "four"]}
      defaultValue="one"
      _warning
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
