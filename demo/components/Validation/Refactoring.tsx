/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Refactoring = (props: StoryProps) => {
  const [ACValue, setACValue] = React.useState('Moscow');

  return (
    <L.Div _box _inner>
      <L.Input
        form="refactoring"
        name="input"
        isRequired
        validator="postalCode"
        _width30
      />
      <br/>
      <br/>
      <L.Input
        form="refactoring"
        name="another-input"
        validator={(val) => val.length > 4}
        invalidMessage="More than 4 symbols please"
        _width30
      />
      <br/>
      <br/>
      <L.AutoComplete
        form="refactoring"
        name="autocomplete"
        validator={(value: string) => value.length < 9}
        invalidMessage="Less than 9 symbols please"
        data={['Berlin', 'Budapest']}
        value={ACValue}
        onChange={(ev) => {
          setACValue(ev.component.value);
          console.log('ev.component', ev.component);
        }}
        _width30
      />
      <br/>
      <br/>
      <L.Button
        form="refactoring"
        onClick={() => {
          console.log('Submit!')
        }}
      >
        Submit
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          const result = L.form('refactoring', 'input').get();
          console.log('Get!', result)
        }}
      >
        Get 1-st input
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          const result = L.form('refactoring').get();
          console.log('Get!', result)
        }}
      >
        Get
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          const result = L.form('refactoring').reset();
          console.log('Reset!', result)
        }}
      >
        Reset
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          const result = L.form('refactoring', 'input').validate();
          console.log('Validate!', result)
        }}
      >
        Validate input
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          const result = L.form('refactoring', ['input', 'another-input', 'autocomplete']).validate();
          console.log('Validate!', result)
        }}
      >
        Validate an array of fields
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          const result = L.form('refactoring').validate();
          console.log('Validate!', result)
        }}
      >
        Validate form
      </L.Button>
      {' '}
      <L.Button
        onClick={() => {
          const result = L.form('refactoring', 'input').validate({
            validator: /^[a-z]+$/,
            invalidMessage: 'no no'
          });
          console.log('Validate!', result)
        }}
      >
        Validate as latin letters
      </L.Button>
    </L.Div>
  );
};
