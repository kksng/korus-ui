import React from 'react';
import { Div, Button, Input } from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <Div>
        <Input
          onChange={() => console.log('input')}
          form="form"
          name="validatedTextInput"
          validator={
            [
              {
                validate: value => value && value.length >= 4,
                errorMessage: 'не менее четырёх символов',
              },
              {
                validate: /^[a-zA-Z\s]+$/,
                errorMessage: 'только латинские буквы и пробелы',
              },
            ]
          }
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
