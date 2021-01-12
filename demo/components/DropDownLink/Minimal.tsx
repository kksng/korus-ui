import * as React from 'react';
import * as L from '../../../korus-ui';

export const Minimal = (props: { title: string }): React.ReactElement => {
  const [ value, setValue ] = React.useState('Saint Petersburg');

  return (
    <L.Div>
      <L.DropDownLink
        onChange={(ev: any): void => {
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
    </L.Div>
  );
};
