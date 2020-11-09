/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const CommaSeparator = (args: any) => {
  const [props, setProps] = React.useState<{ isDisabled?: boolean }>({});

  const { update, EventInfo } = useEventSpy(['formattedValue']);

  return (
    <L.Div _demoStory>
      <L.NumericTextBox
        format="#,#### кг."
        name="numer"
        max={20000000000000}
        min={-100000000000}
        step={1}
        invalidMessage="Число не должно быть отрицательным!"
        requiredMessage="Обязательное поле!"
        onChange={ev => {
          update('Change', ev);
          console.log('ev.component.value', ev.component.value);
        }}
        onBlur={ev => {
          update('Blur', ev);
        }}
        onFocus={ev => {
          update('Focus', ev);
        }}
        form="foobar"
        isRequired
        placeholder="Gimme ur number!"
        inputRender={({ Element, elementProps }) => (
          <>
            <L.Span _numericTextBoxPrefix>от</L.Span>
            <Element {...elementProps} />
            <L.Span _numericTextBoxSuffix>Рублей</L.Span>
          </>
        )}
        _width30
        {...props}
      />
      <br />
      <br />
      <br />
      <L.Button onClick={() => { setProps({}); }}>Defaults</L.Button>
      {'  '}
      <L.Button onClick={() => { setProps({ ...props, isDisabled: !props.isDisabled }); }} _warning={props.isDisabled}>Toggle isDisabled</L.Button>
      <EventInfo />
    </L.Div>
  );
};
