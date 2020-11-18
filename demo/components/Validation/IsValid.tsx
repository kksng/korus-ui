/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const IsValid = (props: StoryProps) => {
  const [isValid, setIsValid] = React.useState(true);

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
          <L.Switcher onClick={() => setIsValid(!isValid)} _warning>
            Toggle isValid
          </L.Switcher>
          <L.Button
            form="formIsValid"
            onClick={(ev) => console.log(ev.forms)}
            onValidationFail={(ev) => console.log(ev.invalidForms)}
          >
            Submit
          </L.Button>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
