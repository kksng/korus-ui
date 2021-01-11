import * as React from 'react';
import * as L from '../../../leda';
import { useEventSpy } from '../../useEventSpy';
import { RenderEvent, SomeObject } from '../../../leda/commonTypes';

export const NumericTextBox = () => {
  const [props, setProps] = React.useState<SomeObject>({});
  const [value, setValue] = React.useState<number | null>(1);
  const [shouldTrimTrailingZeros] = React.useState<boolean>(true);
  const { update, EventInfo } = useEventSpy(['formattedValue']);

  return (
    <L.Div _demoStory>
      <L.Div>Basic</L.Div>
      <L.NumericTextBox
        _basic
        format="#.####"
        name="basicUse"
        max={20000000000000}
        min={-100000000000}
        step={1}
        requiredMessage="Required field!"
        onChange={(ev) => {
          update('Change', ev);
          console.log('Change ev.component.value', ev.component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        onFocus={(ev) => {
          console.log('focus ev', ev);
          update('Focus', ev);
        }}
        form="foobar"
        isRequired
        placeholder="Gimme ur number!"
        _width30
        {...props}
      />
      <br />
      <L.Div>Comma separator</L.Div>
      <L.NumericTextBox
        _comma-separator
        format="#,####"
        name="commaSeparator"
        max={20000000000000}
        min={-100000000000}
        step={1}
        requiredMessage="Обязательное поле!"
        onChange={(ev) => {
          update('Change', ev);
          console.log('ev.component.value', ev.component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        onFocus={(ev) => {
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
      <L.Div>Trailing Zeros</L.Div>
      <L.NumericTextBox
        _trailing-zeros
        format="#.####"
        value={value}
        shouldTrimTrailingZeros={shouldTrimTrailingZeros}
        onChange={(ev) => {
          update('Change', ev);
          console.log('Change ev.component.value', ev.component.value);
          setValue(ev.component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        onFocus={(ev) => {
          update('Focus', ev);
        }}
        form="foobar"
        name="numer"
        isRequired
        placeholder="Gimme ur number!"
        _width30
      />
      <br />
      <L.Div>Disabled</L.Div>
      <L.NumericTextBox
        _disabledInput
        isDisabled
        format="#.####"
        name="disabledInput"
        data-test="numerictextbox"
        max={20000000000000}
        min={-100000000000}
        step={1}
        requiredMessage="Required field!"
        onChange={(ev) => {
          update('Change', ev);
          console.log('Change ev.component.value', ev.component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        onFocus={(ev) => {
          console.log('focus ev', ev);
          update('Focus', ev);
        }}
        form="foobar"
        isRequired
        placeholder="Gimme ur number!"
        _width30
        {...props}
      />
    </L.Div>
  );
};