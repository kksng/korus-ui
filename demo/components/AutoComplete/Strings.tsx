import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

// eslint-disable-next-line
export const Strings = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');

  const { update, EventInfo } = useEventSpy(['method', 'suggestion']);

  return (
    <L.Div _box _inner _demoBg>
      <L.AutoComplete
        name="ACfocus1"
        form="AwesomeForm"
        data-test="autocomplete"
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
        invalidMessage="invalidMessage"
        requiredMessage="requiredMessage"
        shouldCorrectValue
        minSearchLength={3}
        onChange={(ev) => {
          setValue(ev.component.value);
          update('Change', ev);
          console.log('Change ev.component.value', ev.component.value);
        }}
        placeholder="Type your city..."
        hasClearButton
        onFocus={(ev) => {
          update('Focus', ev);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        isRequired
        _width30
        {...props}
      />

      <br />

      <L.Button
        form="AwesomeForm"
        onClick={(ev) => console.log('awesome form submit ev', ev)}
        onValidationFail={(ev) => console.log('awesome form fail ev', ev)}
      >
        Validate an awesome form
      </L.Button>

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
      <br />
      <EventInfo />
    </L.Div>
  );
};
