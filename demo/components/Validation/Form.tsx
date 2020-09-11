/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Form = (props: StoryProps) => {
  const [value, setValue] = React.useState<string | number>(0);

  return (
  <L.Div _box _inner>
    <L.Div>
      <L.Div _inner>
        <L.DateRange
          isRequired
          form="form1"
          name="Input1"
          requiredMessage={['Я обязательный!', 'Я вообще-то тоже!']}
          placeholder="form1 Input1"
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          form="form1"
          name="Input2"
          placeholder="form1 Input2"
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          form="form2"
          name="Input1"
          placeholder="form2 Input1"
        />
      </L.Div>
      <L.Div _inner>
      <L.RadioGroup
          form="form2"
          name="radio"
          value={value}
          wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
          onChange={ev => {
            console.log('ev.component.value', ev.component.value);
            console.log('ev.component.name', ev.component.name);
            setValue(ev.component.value);
          }}
        >
          <L.RadioButton 
            value={0} 
            wrapperRender={({ elementProps }) => 
              <L.Span {...elementProps} style={{ color: 'green' }} 
          />}>
            form2 One
            </L.RadioButton>
          <L.RadioButton value={1}>form2 Two</L.RadioButton>
          <L.RadioButton value={2}>form2 Three</L.RadioButton>
        </L.RadioGroup>
      </L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          form="form2"
          name="Input2"
          placeholder="form2 Input2"
        />
      </L.Div>
      <L.Div _inner>
        <L.Button
          form="form1"
          _warning
        >
          Submit form1
        </L.Button>
        {' '}
        <L.Button
          onClick={(ev) => console.log(ev.forms)}
          form="form2"
          _warning
        >
          Submit form2
        </L.Button>
        {' '}
        <L.Button
          form={['form1', 'form2']}
          _warning
        >
          Submit both
        </L.Button>
      </L.Div>
    </L.Div>
  </L.Div>
);
        }
