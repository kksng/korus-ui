import * as React from 'react';
import * as L from '../../../korus-ui';

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
      <L.Textarea
        placeholder="Tell me your secrets..."
        data-test="textarea-disabled"
        isDisabled={true}
        style={{ height: '200px' }}
        _width50
      ></L.Textarea>
    </L.Div>
  );
};
