import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { useEventSpy } from '../../useEventSpy';

const exampleCode = `
export const DataTypes = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState('Saint Petersburg');

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownLink
        name="DropDownLink"
        onChange={(ev: any): void => {
          update('Change', ev);
          setValue(ev.component.value);
        }}
        value={value}
        data={[
          'Saint Petersburg',
          'London',
          'Islamabad',
          'Berlin',
          'Washington',
          'Paris',
          'Rome',
          'Tokyo',
          'Budapest',
          'Ottawa',
          'Moscow',
        ]}
      />
    </L.Div>
  );
};
`;

export const DataStrings = (args: SomeObject): React.ReactElement => {
  const { update, EventInfo } = useEventSpy();
  const [ value, setValue ] = React.useState('Saint Petersburg');

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownLink
        name="DropDownLink"
        onChange={(ev: any): void => {
          update('Change', ev);
          setValue(ev.component.value);
        }}
        value={value}
        data={[
          'London',
          'Islamabad',
          'Berlin',
          'Washington',
          'Paris',
          'Rome',
          'Tokyo',
          'Budapest',
          'Ottawa',
          'Moscow',
        ]}
      />
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
