import * as React from 'react';
import * as L from '../../../leda';

export const BasicUsage = (props: any): React.ReactElement => {
  const [value, setValue] = React.useState('');

  return (
    <L.Div _demoStory>
      <L.MaskedInput
        form="MItest"
        name="test"
        mask="+7 (###)-###-##-##"
        // defaultValue={'9992024059'}
        placeholder="+7 (___)-___-__-__"
        onEnterPress={({ component }) => {
          console.log(component.name, component.name);
          console.log('component.value', component.value);
          console.log('component.inputValue', component.inputValue);
        }}
        onChange={(ev) => {
          console.log('ev.component', ev.component);
          setValue(ev.component.value);
        }}
        value={value}
      />

      <br />
      <br />

      <L.Button
        onClick={() => {
          L.form('MItest').reset();
        }}
      >
        Reset
      </L.Button>
    </L.Div>
  );
};
