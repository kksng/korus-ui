import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

// eslint-disable-next-line
export const MinSearchLength = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner _demoBg>
      <L.AutoComplete
        data={[
          { city: 'London' },
          { city: 'Islamabad' },
          { city: 'Berlin' },
          { city: 'Washington' },
          { city: 'Paris' },
          { city: 'Rome' },
          { city: 'Tokyo' },
          { city: 'Budapest' },
          { city: 'Ottawa' },
          { city: 'Moscow' },
        ]}
        value={value}
        textField="city"
        onChange={(ev) => setValue(ev.component.value)}
        placeholder="Type your city..."
        minSearchLength={0}
        hasClearButton
        isRequired
        _width30
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Loading', props: { isLoading: true } },
          { text: 'Opened', props: { isOpen: true } },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
