import * as React from 'react';
import * as L from '~';
import { SomeObject } from '~/commonTypes';

export const Controlled = (args: SomeObject): React.ReactElement => {
  const [value, setValue] = React.useState<string[]>(['London', 'Paris']);
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.MultiSelect
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
        defaultValue={['London']}
        _width40
        canSelectAll
        selectAllItemRender={() => 'Select all'}
        isOpen={isOpen}
        isLoading={isLoading}
        onChange={ev => {
          console.log('ev.component.selectedValue', ev.component.selectedValue);
          console.log('ev.component.value', ev.component.value);
          setValue(ev.component.value as string[]);
        }}
        isDisabled={isDisabled}
        value={value}
      >
      </L.MultiSelect>
      <br />
      <br />
      <L.Button _warning={isDisabled} onClick={() => setIsDisabled(!isDisabled)}>Toggle isDisabled</L.Button>
      {' '}
      <L.Button _warning={isLoading} onClick={() => setIsLoading(!isLoading)}>Toggle isLoading</L.Button>
      {' '}
      <L.Button _warning={isOpen} onClick={() => setIsOpen(isOpen ? undefined : true)}>Toggle isOpen</L.Button>
      <br />
      <br />
      <L.Button _warning onClick={() => setValue([])}>Clear value</L.Button>
    </L.Div>
  );
};
