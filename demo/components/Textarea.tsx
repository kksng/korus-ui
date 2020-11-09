import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Textarea = () => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');
  const [name, setName] = React.useState<string | undefined>('');
  const [isValid, setIsValid] = React.useState<boolean | undefined>();
  const [eventType, setEventType] = React.useState<string | null>(null);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Textarea</L.H4>
      <br />
      <L.Textarea
        placeholder="Tell me your secrets..."
        isRequired
        data-test="textarea"
        requiredMessage="Обязательное поле!"
        name="textarea"
        form="one-lonely-form"
        style={{ height: '200px' }}
        _width50
        maxLength={20}
        onChange={(event: L.TextareaTypes.ChangeEvent) => {
          const { component } = event;
          setEventType('onChange');
          setName(component.name);
          setValue(component.value);
        }}
        onFocus={(event: L.TextareaTypes.FocusEvent) => {
          const { component } = event;
          setEventType('onFocus');
          setName(component.name);
          setValue(component.value);
        }}
        onEnterPress={(event: L.TextareaTypes.EnterPressEvent) => {
          const { component } = event;
          setEventType('onEnterPress');
          setName(component.name);
          setValue(component.value);
        }}
        onBlur={(event: L.TextareaTypes.BlurEvent) => {
          const { component } = event;
          setEventType('onBlur');
          setName(component.name);
          setIsValid(component.isValid);
          setValue(component.value);
        }}
        {...props}
      />
      <br />
      <br />

      <L.H5>Event: {eventType}</L.H5>
      <L.Div _inner>
        <L.Dl _list _w30 _form>
          <L.Dt>name</L.Dt>
          <L.Dd>{`${name}`}</L.Dd>
          <L.Dt>value</L.Dt>
          <L.Dd>{`${value}`}</L.Dd>
          <L.Dt>isValid</L.Dt>
          <L.Dd>{`${isValid}`}</L.Dd>
        </L.Dl>
      </L.Div>

      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
