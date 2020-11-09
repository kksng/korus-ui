/* eslint-disable no-alert */
/* eslint-disable no-console */

import * as React from 'react';
import * as L from '../../../leda';


export const Button = (): React.ReactElement => (
  <L.Div _demoStory>
    <L.Button
      shouldScrollToInvalidFields
      form={['form1', 'form2']}
      onClick={(event) => console.log(event)}
      onValidationFail={() => alert('Alert!')}
    >
      Validate!
    </L.Button>
    <L.Button onClick={() => alert('Alert!')}>Клик!</L.Button>
    <L.Button isLoading onClick={() => alert('Alert!')}>isLoading</L.Button>
    <L.Button isDisabled onClick={() => alert('Alert!')}>isDisabled</L.Button>
    <L.Button _danger>danger!</L.Button>
    <L.Button _warning>warning!</L.Button>
    <L.Button _success>success!</L.Button>
    <div
      style={{
        height: '100vh',
      }}
    />
    <L.Input
      isRequired
      form="form1"
      name="Input1"
      placeholder="form1 Input1"
    />
    <L.Input
      isRequired
      form="form2"
      name="Input2"
      placeholder="form2 Input1"
    />
  </L.Div>
);
