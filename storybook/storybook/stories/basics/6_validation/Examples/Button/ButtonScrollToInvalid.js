import React, { Component } from 'react';
import { Div, Button, Input } from '@korus/leda';

export default class extends Component {
  render() {
    return (
      <Div>
        <Input
          name="validatedInput"
          form="formButton"
          width={15}
          validator={/^[A-Za-z0-9]{4,8}$/}
          invalidMessage="Латиница, цифры, от 4 до 8 символов"
          isRequired
        />
        <br />
        <br />
        <Button
          form="formButton"
          scrollToInvalidFields
        >
          Submit
        </Button>
      </Div>
    );
  }
}
