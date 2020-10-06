import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const InvalidMessageRender = {
  liveDemo: `
const InvalidMessageRender = () => {
  return (
    <>
      <L.Input
        name="field1"
        form="myForm"
        validator={[
          {
            validator: 'email',
            invalidMessage: 'не подходит под формат email-адреса!',
          },
          {
            validator: /[A-Z]/,
            invalidMessage: 'должна быть хотя бы одна заглавная буква!',
          },
          {
            validator: val => (val.length > 10),
            invalidMessage: 'адрес должен содержать минимум 10 символов!',
          },
        ]}
        invalidMessageRender={({ elementProps, Element, componentState, componentProps }) => {
          console.log('elementProps', elementProps)
          console.log('componentState', componentState)
          console.log('componentProps', componentProps)
          return (
            <Element
              {...elementProps}
              style={{ color: 'green' }}
              message={componentState.value + ' не валидно, т.к. ' + elementProps.messages[0]}
            />
          )
        }}
        isRequired
        _width-30
      />
      <br />
      <br />
      <L.Button
        form="myForm"
      >
        Submit
      </L.Button>
    </>
  );
};

render(<InvalidMessageRender />);
`,
  text: (
    <L.Div _inner>
      <L.P>
        Если вы хотите изменить стандартное поведение сообщений валидации или их вёрстку, используйте <b>invalidMessageRender</b>.
      </L.P>
      <L.P>
        Например, нужно выводить только первое сообщение, если значение валидируется массивом валидаторов.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
