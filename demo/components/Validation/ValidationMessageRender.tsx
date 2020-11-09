/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';


export const ValidationMessageRender = (props: StoryProps) => (
  <L.Div _box _inner>
    <L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          validator="email"
          invalidMessage="Wrong Email"
          form="customValidationMessage"
          name="Input1"
          placeholder="outer isValid"
          validationMessageRender={({ elementProps: { message } }: { elementProps: { message: string }}) => <L.Div _txtSuccess>{message}</L.Div>}
        />
      </L.Div>
      <L.Div _inner>
        <L.Button
          form="customValidationMessage"
          onClick={() => console.log('clicked')}
          _warning
        >
          Click me
        </L.Button>
      </L.Div>
    </L.Div>
  </L.Div>
);
