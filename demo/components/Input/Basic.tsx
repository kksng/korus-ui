import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';

export const Basic = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState<string | null>(null);
  const [value2, setValue2] = React.useState<string | null>(null);

  const { update, EventInfo } = useEventSpy();

  return (
    <L.Div _box _inner _demoBg>
      <L.Input
        name="Input"
        form="AwesomeInput"
        data-test="input"
        value={value}
        invalidMessage="invalidMessage"
        requiredMessage="requiredMessage"
        onChange={(ev) => {
          setValue(ev.component.value);
          update('Change', ev);
        }}
        placeholder="Type your city..."
        hasClearButton
        onFocus={(ev) => {
          update('Focus', ev);
        }}
        onEnterPress={({ component }) => {
          console.log(component.name, component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        isRequired
        validator={[
          {
            validator: 'email',
          },
          {
            validator: /[A-Z]/,
            invalidMessage: 'Must be one',
          },
          {
            validator: (val: string | number) => (val.toString().length > 10),
            invalidMessage: 'Minimum 10 symbols',
          },
        ]}
        _width30
        {...props}
      />

      <br />

      <L.Input
        name="Input-maxLength"
        form="AwesomeInput"
        data-test="input-maxlength"
        value={value2}
        onChange={(ev) => {
          setValue2(ev.component.value);
          update('Change', ev);
        }}
        maxLength={5}
        placeholder="With maxLength"
        hasClearButton
        onFocus={(ev) => {
          update('Focus', ev);
        }}
        onEnterPress={({ component }) => {
          console.log(component.name, component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        _width30
      />

      <br />

      <L.Button
        form="AwesomeInput"
        onClick={(ev) => console.log('awesome form submit ev', ev)}
        onValidationFail={(ev) => console.log('awesome form fail ev', ev)}
      >
        Validate an awesome input
      </L.Button>

      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
      <br />
      <EventInfo />
    </L.Div>
  );
};
