import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const BasicUsage = (storyProps: StoryProps): React.ReactElement => {
  const [value, setValue] = React.useState<string | null>('');

  return (
    <L.Div _demoStory>
      <L.MaskedInput
        form="MItest"
        name="test"
        hasClearButton
        mask="+7 (###)-###-##-##"
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
      <L.Button
        onClick={() => {
          setValue(null);
        }}
      >
        Set null
      </L.Button>
      <L.Button
        onClick={() => {
          setValue('8888');
        }}
      >
        Set value "8888"
      </L.Button>
    </L.Div>
  );
};
