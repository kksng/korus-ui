import * as React from 'react';
import * as L from '../../../korus-ui';
import { SomeObject } from '../../../korus-ui/commonTypes';
import { StateButtonGroup } from '../StateButtonGroup';
import { StoryProps } from '../../types';

export const DataTypes = (storyProps: StoryProps): React.ReactElement => {
  const defaultData = [
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
  ]
  const [props, setProps] = React.useState({data: defaultData});
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string | number | SomeObject | null | undefined>();

  return (
    <L.Div _box _inner _demoBg>
      <L.DropDownSelect
        data={defaultData}
        hasClearButton
        data-test="dropdownselect"
        defaultValue={props.data[0]}
        _width40
        isOpen={isOpen}
        isLoading={isLoading}
        isDisabled={isDisabled}
        value={value}
        onChange={(ev) => {
          console.log('ev.component', ev.component);
          setValue(ev.component.value);
        }}
        onBlur={(ev) => {
          console.log('ev.component.value', ev.component.value);
        }}
        {...props}
      >
      </L.DropDownSelect>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'String data',
            props: {
              data: defaultData,
              key: 'string-data',
            },
          },
          {
            text: 'Long String data',
            props: {
              data: [
                'Information about the status of payments for taxes, fees, insurance premiums, penalties, fines, and interest',
                'The act of joint reconciliation of calculations on taxes, fees, insurance premiums, penalties, fines, interest',
                'Certificate of performance by the taxpayer (payer of the fee, payer of insurance premiums, tax agent) of the obligation to pay taxes, fees, insurance premiums, penalties, fines, interest',
              ],
              key: 'long-string-data',
            },
          },
          {
            text: 'Object data',
            props: {
              data: [
                { id: 1, text: 'London' },
                { id: 2, text: 'Islamabad' },
                { id: 3, text: 'Berlin' },
                { id: 4, text: 'Washington' },
                { id: 5, text: 'Paris' },
                { id: 6, text: 'Rome' },
              ],
              textField: 'text',
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
    </L.Div>
  );
};
