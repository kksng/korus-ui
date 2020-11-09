import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const ControlledDate = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const [date, setDate] = React.useState<[Date | null, Date | null]>([new Date(2019, 5, 5), new Date(2019, 5, 15)]);

  const [allowEmpty, setAllowEmpty] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        date={date}
        onChange={ev => {
          if (allowEmpty) {
            setDate(ev.component.date);
            return;
          }

          if (ev.component.date[0] && ev.component.date[1]) {
            setDate(ev.component.date);
            return;
          }

          if (ev.component.date[0]) {
            setDate([ev.component.date[0], date[1]]);
            return;
          }

          if (ev.component.date[1]) {
            setDate([date[0], ev.component.date[1]]);
          }
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
      <L.Button onClick={() => setDate([new Date(), new Date()])}>Set Today</L.Button>
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

  const [date, setDate] = React.useState<[Date | null, Date | null]>([new Date(2019, 5, 5), new Date(2019, 5, 15)]);

  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        value={date}
        onChange={ev => {
          setDate(ev.component.date);
        }}
        {...props}
      />
      <br />
      <br />
      <L.Button _warning onClick={() => setDate([new Date(), new Date()])}>Set Today</L.Button>
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
