import React from 'react';
import { Div, Button, NumericTextBox } from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <Div>
        <NumericTextBox
          name="validatedNumeric1"
          form="form"
          format="#.0 m"
          onChange={e => console.log('NumericTextBox onChange event', e)}
          onBlur={e => console.log('NumericTextBox onBlur event', e)}
          isRequired
          validator={num => num <= 5}
          invalidMessage="No more than 5!"
        />
        <br />
        <br />
        <Button
          onClick={() => {
            console.log('submit');
          }}
          onValidationFail={(data) => {
            console.log('validation fail', data);
          }}
          scrollToInvalidFields
          form="form"
        >
          Submit
        </Button>
      </Div>
    );
  }
}
