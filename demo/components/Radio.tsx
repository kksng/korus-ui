/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { StoryProps } from '../types';

export const Radio = (StoryProps: StoryProps): React.ReactElement => {
 const [value, setValue] = React.useState<string | number>(0);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Radio</L.H4>
      <L.Div style={{ display: 'flex' }}>
        <L.RadioGroup
          name="radio"
          wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          value={value}
          onChange={ev => {
            console.log('ev.component.value', ev.component.value);
            console.log('ev.component.name', ev.component.name);
            setValue(ev.component.value);
          }}
        >
          <L.RadioButton value={0} wrapperRender={({ elementProps }) => <L.Span {...elementProps} style={{ color: 'green' }} />}>One</L.RadioButton>
          <L.RadioButton value={1}>Two</L.RadioButton>
          <L.RadioButton value={2}>Three</L.RadioButton>
        </L.RadioGroup>
        <L.Div _width20 />
        <L.RadioGroup isDisabled value="disabled-1">
          <L.RadioButton value="disabled-1">Checked & Disabled</L.RadioButton>
          <L.RadioButton value="disabled-2">Disabled with <br />second label line</L.RadioButton>
        </L.RadioGroup>
      </L.Div>
    </L.Div>
  );
};
