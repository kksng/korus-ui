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
          validator="cadastralNumber"
          invalidMessage="Введите корректный кадастровый номер"
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
