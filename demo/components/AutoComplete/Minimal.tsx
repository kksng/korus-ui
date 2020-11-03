import * as React from 'react';
import * as L from '../../../leda';

// eslint-disable-next-line
export const Minimal = (props: any): React.ReactElement => {
  const [value, setValue] = React.useState('');

  return (
    <L.Div>
      <L.AutoComplete
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
        value={value}
        onChange={(ev) => {
          setValue(ev.component.value);
          console.log('ev.component', ev.component);
        }}
      />
    </L.Div>
  );
};
