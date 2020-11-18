import * as React from 'react';
import * as L from '../../../leda';

export const Validation = () => {
  const [isValid, setIsValid] = React.useState(true);
  const [message, setMessage] = React.useState('');

  return (
    <L.Div _box _inner>
      <L.Div>
        <L.Div _inner>
          <L.Input
            isValid={isValid}
            invalidMessage="The app decides component to have invalid content"
            form="formIsValid"
            name="Input1"
            placeholder="outer isValid"
          />
        </L.Div>
        <L.Div _inner>
          <L.Button name="Toggle" onClick={() => setIsValid(!isValid)} _warning>
            Toggle isValid
          </L.Button>
          <L.Button
            name="Submit"
            form="formIsValid"
            onClick={() => setMessage('Submitted')}
            onValidationFail={() => setMessage('Submit failed')}
          >
            Submit
          </L.Button>
          <L.Div name="Message">{message}</L.Div>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
