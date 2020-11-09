/* eslint-disable jsx-a11y/accessible-emoji,react/prop-types,no-console */
import * as React from 'react';
import * as L from '../../../leda';

export const Customization = (args: any) => {

  const [value, setValue] = React.useState<[number | null, number | null] | null>([5, 13]);

  return (
    <L.Div _demoStory>
      <L.NumericRange
        format="#.## %"
        _width70
        name="numer-range"
        onChange={ev => {
          console.log('value', ev.component.value);
          console.log('name', ev.component.name);
          setValue(ev.component.value);
        }}
        form="foobar"
        value={value}
        inputsRender={[
          ({ Element, elementProps }) => (
            <>
              <L.Span _numericTextBoxPrefix style={{ color: 'steelblue' }}>Цена от</L.Span>
              <Element {...elementProps} />
              <L.Span _numericTextBoxSuffix>млн. 💲</L.Span>
            </>
          ),
          ({ Element, elementProps }) => (
            <>
              <L.Span _numericTextBoxPrefix style={{ color: 'steelblue' }}>Цена до</L.Span>
              <Element {...elementProps} />
              <L.Span _numericTextBoxSuffix>млн. 💲</L.Span>
            </>
          ),
        ]}
        wrapperRender={({ Element, elementProps }) => (
          <Element {...elementProps}>
            <L.Span _marginRight _flexRow _colMd2>Проценты <L.I _icon20 _iSearch /></L.Span>
            {elementProps.children}
          </Element>
        )}
        isRequired={[false, true]}
      />
    </L.Div>
  );
};
