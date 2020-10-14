import * as React from 'react';
import * as L from '../../../leda';
import { SomeObject } from '../../../leda/commonTypes';

export const NoInput = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState<string[] | null>(['London', 'Paris']);
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();

  return (
    <L.Div _box _inner _demo-bg>
      <L.MultiSelect
        shouldHideInput
        placeholder="placeholder"
        hasClearButton
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
        onChange={(ev) => {
          console.log('ev.component.selectedValue', ev.component.selectedValue);
          console.log('ev.component.value', ev.component.value);
          setValue(ev.component.value);
        }}
        value={value}
        isOpen={isOpen}
        _width-40
      />
      <br />
      <br />
      <L.Button _warning={isOpen} onClick={() => setIsOpen(isOpen ? undefined : true)}>Toggle isOpen</L.Button>
      <br />
      <br />
      <L.Button _warning onClick={() => setValue([])}>Clear value</L.Button>
    </L.Div>
  );
};
