/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { useEventSpy } from '../../useEventSpy';

export const TrailingZeros = (args: any) => {
  const [value, setValue] = React.useState<number | null>(1)
  const [shouldTrimTrailingZeros, setShouldTrimTrailingZeros] = React.useState<boolean>(false)

  const { update, EventInfo } = useEventSpy(['formattedValue']);

  return (
    <L.Div _demoStory>
      <L.NumericTextBox
        format="#.####"
        value={value}
        shouldTrimTrailingZeros={shouldTrimTrailingZeros}
        onChange={ev => {
          update('Change', ev);
          console.log('Change ev.component.value', ev.component.value);
          setValue(ev.component.value);
        }}
        onBlur={ev => {
          update('Blur', ev);
        }}
        onFocus={ev => {
          update('Focus', ev);
        }}
        form="foobar"
        name="numer"
        isRequired
        placeholder="Gimme ur number!"
        _width30
      />
      <br />
      <L.Switcher
        value={shouldTrimTrailingZeros}
        onChange={(ev) => setShouldTrimTrailingZeros(ev.component.value)}
      >
        Удалить нули
      </L.Switcher>
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
