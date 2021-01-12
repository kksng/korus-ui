import * as React from 'react';
import * as L from '../../../korus-ui';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';
import { StoryProps } from '../../types';

export const BasicUsage = (storyProps: StoryProps): React.ReactElement => {
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
          console.log('value', ev.component.value);
          console.log('date', ev.component.date);
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
