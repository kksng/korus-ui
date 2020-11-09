import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { useEventSpy } from '../../useEventSpy';

const exampleCode = `
export const DataObjects = (args: SomeObject): React.ReactElement => {
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
          { txt: 'London', val: 1 },
          { txt: 'Islamabad', val: 2 },
          { txt: 'Berlin', val: 3 },
          { txt: 'Washington', val: 4 },
          { txt: 'Paris', val: 5 },
          { txt: 'Rome', val: 6 },
          { txt: 'Saint Petersburg', val: 7 },
        ]}
      />
      <br />
      <br />
    </L.Div>
  );
};
`;

export const DataObjects = (args: SomeObject): React.ReactElement => {
  const { update, EventInfo } = useEventSpy();
  const [value, setValue] = React.useState({ txt: 'Saint Petersburg', val: 7 });

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
          { txt: 'London', val: 1 },
          { txt: 'Islamabad', val: 2 },
          { txt: 'Berlin', val: 3 },
          { txt: 'Washington', val: 4 },
          { txt: 'Paris', val: 5 },
          { txt: 'Rome', val: 6 },
          { txt: 'Saint Petersburg', val: 7 },
        ]}
        textField="txt"
      />
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
