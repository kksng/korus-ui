import React, { Component } from 'react';
import { Div, Button, Textarea } from '@korus/leda';

export default class extends Component {
  render() {
    return (
      <Div>
        <Textarea
          name="validatedTextarea"
          form="formButton"
          height={100}
          width={35}
          validator={/[А-Яа-я0-9]/}
          invalidMessage="Только кириллица и цифры"
          isRequired
        />
        <br />
        <br />
        <Button
          form="formButton"
          onValidationFail={() => alert('Только кириллица и цифры')}
        >
          Submit
        </Button>
      </Div>
    );
  }
}
