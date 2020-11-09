import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const DataTypes = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { update, EventInfo } = useEventSpy(['selectedValue', 'deselectedValues']);

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
        data-test="multiselect"
        defaultValue={['London']}
        _width40
        maxSelected={3}
        onChange={ev => update('Change', ev)}
        onBlur={ev => update('Blur', ev)}
        onFocus={ev => update('Focus', ev)}
        placeholder="Choose cities you would like to visit!"
        isOpen={isOpen}
        isLoading={isLoading}
        isRequired
        requiredMessage="Обязательное поле!"
        name="multi-pulti"
        form="multi-select-form"
        hasClearButton
        isDisabled={isDisabled}
        {...props}
      >
      </L.MultiSelect>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'String data',
            props: {
              data: [
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
              ],
              key: 'string-data',
            },
          },
          {
            text: 'Object data',
            props: {
              data: [
                { txt: 'London', val: 1 },
                { txt: 'Islamabad', val: 2 },
                { txt: 'Berlin', val: 3 },
                { txt: 'Washington', val: 4 },
                { txt: 'Paris', val: 5 },
                { txt: 'Rome', val: 6 },
              ],
              textField: 'txt',
              defaultValue: [{ txt: 'London', val: 1 }],
              key: 'object-data',
            },
          },
        ]}
        setProps={setProps}
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
