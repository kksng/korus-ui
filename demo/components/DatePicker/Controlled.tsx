import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

export const Controlled = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<string | null>('');

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker
        value={value}
        onChange={(ev) => setValue(ev.component.value)}
        {...props}
        data-test="datepicker"
      />
      <br />
      <br />
      <L.Button
        onClick={() => setValue(null)}
      >
        Set null
      </L.Button>
      {' '}
      <L.Button
        onClick={() => setValue('')}
      >
        Set an empty string
      </L.Button>
      {' '}
      <L.Button
        onClick={() => setValue('11.07.1984')}
      >
        Set 11.07.1984
      </L.Button>
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
