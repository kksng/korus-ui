import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const ControlledDate = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const [date, setDate] = React.useState<Date | null>(new Date(2019, 5, 5));

  const [allowEmpty, setAllowEmpty] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker
        value={date}
        max={new Date(2018, 5, 5)}
        onChange={ev => {
          if (allowEmpty) {
            setDate(ev.component.date);
            return;
          }

          if (ev.component.date) setDate(ev.component.date);
        }}
        {...props}
      />
      <br />
      <br />
      <L.Switcher value={allowEmpty} onChange={() => setAllowEmpty(!allowEmpty)}>
        AllowEmpty
      </L.Switcher>
      <br />
      <br />
      <L.Button _warning onClick={() => setDate(new Date())}>Set Today</L.Button>
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

export const ControlledDate = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const [date, setDate] = React.useState<Date | null>(new Date(2019, 5, 5));

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker
        value={date}
        max={new Date(2020, 5, 5)}
        onChange={ev => {
          setDate(ev.component.date);
        }}
        {...props}
      />
      <br />
      <br />
      <L.Button _warning onClick={() => setDate(new Date())}>Set Today</L.Button>
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
