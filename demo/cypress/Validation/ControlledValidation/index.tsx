import * as React from 'react';
import * as L from '../../../../korus-ui';

export const ControlledValidation = () => {
  const [isValid, setIsValid] = React.useState(true);

  return (
    <L.Div _inner>
      <L.H2>Controlled validation</L.H2>
      <L.Div _inner>
        <L.Input
          isValid={isValid}
          invalidMessage="The app decides component to have invalid content"
          form="formIsValid"
          name="InputCV"
          placeholder="outer isValid"
        />
      </L.Div>
      <L.Div _inner>
        <L.Button name="Toggle" onClick={() => setIsValid(!isValid)} _warning>
          Toggle isValid
        </L.Button>
        <L.Button
          name="SubmitCV"
          form="formIsValid"
          onClick={() => console.log('Submitted')}
          onValidationFail={() => console.log('Submit failed')}
        >
          Submit
        </L.Button>
      </L.Div>
    </L.Div>
  );
};
