/* eslint-disable no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';
import { StoryProps } from '../../types';

const exampleCode = `
export const BasicUsage = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange {...props} />
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
    </L.Div>
  );
};

`;

export const NameArray = (storyProps: StoryProps): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const { update, EventInfo } = useEventSpy(['date']);

  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        name={['DateRange1', 'DateRange2']}
        onChange={ev => {
          const { component: { date, value, name } } = ev;
          console.log('date', date);
          console.log('value', value);
          console.log('name', name);
          update('Change', ev);
        }}
        onBlur={ev => {
          update('Blur', ev);
        }}
        onFocus={ev => {
          update('Focus', ev);
        }}
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
