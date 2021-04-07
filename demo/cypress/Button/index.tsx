/* eslint-disable no-alert */
/* eslint-disable no-console */

import * as React from 'react';
import * as L from '../../../korus-ui';


export const Button = (): React.ReactElement => (
  <L.Div _demoStory>
    <L.Button
      shouldScrollToInvalidFields
      form={['form1', 'form2']}
      id="validation"
      onClick={() => alert('Submitted')}
      onValidationFail={() => alert('Alert!')}
    >
      Validate!
    </L.Button>
    <L.Button id="basicButton" onClick={() => alert('Alert!')}>Click!</L.Button>
    <L.Button id="loadButton" isLoading onClick={() => alert('Alert!')}>isLoading</L.Button>
    <L.Button id="disabledButton" isDisabled>isDisabled</L.Button>
    <L.Button _danger>danger!</L.Button>
    <L.Button _warning>warning!</L.Button>
    <L.Button _success>success!</L.Button>
    <L.Button id="consoleButton" onClick={() => console.log('Do not click the button!')}>Don't click!</L.Button>
    <div
      style={{
        height: '100vh',
      }}
    />
    <L.Button id="renderWithForm" form="form1">Rendering with form</L.Button>
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
