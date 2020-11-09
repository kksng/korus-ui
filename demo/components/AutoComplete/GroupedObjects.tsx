import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

/* eslint-disable object-curly-newline */
const ACData = [
  { id: 0, attr: 'value0', city: 'Tokyo' },
  { id: 1, attr: 'value1', city: 'Salvador', groupName: 'Brazil' },
  { id: 2, attr: 'value2', city: 'Rio de Janeiro', groupName: 'Brazil' },
  { id: 3, attr: 'value3', city: 'Berlin', groupName: 'Germany' },
  { id: 4, attr: 'value4', city: 'Munich', groupName: 'Germany' },
  { id: 5, attr: 'value5', city: 'Milan', groupName: 'Italy' },
  { id: 6, attr: 'value6', city: 'Rome', groupName: 'Italy' },
  { id: 7, attr: 'value7', city: 'Islamabad' },
  { id: 8, attr: 'value8', city: 'Washington' },
  { id: 9, attr: 'value9', city: 'Paris' },
];

// eslint-disable-next-line
export const GroupedObjects = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner _demoBg>
      <L.AutoComplete
        data={ACData}
        textField="city"
        groupBy={(item) => item.groupName}
        value={value}
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
