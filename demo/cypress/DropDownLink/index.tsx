import * as React from 'react';

import * as L from '../../../korus-ui';

export const DropDownLink = (): React.ReactElement => {
  const [ value, setValue ] = React.useState('Saint Petersburg');

  return (
    <L.Div _demoStory _flexRow>
      <L.DropDownLink
        id="DropDownLink"
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
  )
};
