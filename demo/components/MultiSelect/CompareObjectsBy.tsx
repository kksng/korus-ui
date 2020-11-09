import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { useEventSpy } from '../../useEventSpy';

const data = [
  { id: 0, city: 'Moscow' },
  { id: 0, city: 'Minsk' },
  { id: 1, city: 'London' },
  { id: 2, city: 'Berlin' },
  { id: 3, city: 'Paris' },
  { id: 4, city: 'Stockholm' },
  { id: 5, city: 'Madrid' },
];

// eslint-disable-next-line
export const CompareObjectsBy = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState<any>([data[0]]);

  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { update, EventInfo } = useEventSpy(['selectedValue', 'deselectedValues']);

  return (
    <L.Div _box _inner _demoBg>
      <L.MultiSelect
        data={data}
        textField="city"
        data-test="multiselect"
        compareObjectsBy="id"
        // defaultValue={[data[0]]}
        value={value}
        _width40
        maxSelected={3}
        onChange={(ev) => {
          console.log('ev.component.value', ev.component.value);
          setValue(ev.component.value);
          update('Change', ev);
        }}
        onBlur={(ev) => update('Blur', ev)}
        onFocus={(ev) => update('Focus', ev)}
        placeholder="Choose cities you would like to visit!"
        isOpen={isOpen}
        isLoading={isLoading}
        isRequired
        requiredMessage="Обязательное поле!"
        name="multi-pulti"
        form="multi-select-form"
        hasClearButton
        isDisabled={isDisabled}
      />
      <br />
      <br />
      <L.Button _warning={isDisabled} onClick={() => setIsDisabled(!isDisabled)}>Toggle isDisabled</L.Button>
      {' '}
      <L.Button _warning={isLoading} onClick={() => setIsLoading(!isLoading)}>Toggle isLoading</L.Button>
      {' '}
      <L.Button _warning={isOpen} onClick={() => setIsOpen(isOpen ? undefined : true)}>Toggle isOpen</L.Button>
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
