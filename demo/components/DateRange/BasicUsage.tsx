import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const BasicUsage = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<[string, string]>(['', '']);

  const { update, EventInfo } = useEventSpy(['date']);

  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        name="DateRange"
        placeholder={['c', 'до']}
        onChange={ev => {
          update('Change', ev);
          setValue(ev.component.value);
        }}
        onBlur={ev => {
          update('Blur', ev);
        }}
        onFocus={ev => {
          update('Focus', ev);
        }}
        value={value}
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: { },
          },
          {
            text: 'isDisabled',
            props: { isDisabled: true },
          },
          {
            text: 'isOpen',
            props: { isOpen: true },
          },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
