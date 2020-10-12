import React, { Component } from 'react';
import { Div, Button, Textarea } from '@korus/leda';

export default class extends Component {
  render() {
    return (
      <Div>
        <Textarea
          name="validatedTextarea"
          form="formTextarea"
          height={100}
          width={35}
          validator={/[А-Яа-я0-9]/}
          invalidMessage="Только кириллица и цифры"
          isRequired
          onChange={e => console.log('Textarea onChange event', e)}
          onBlur={e => console.log('Textarea onBlur event', e)}
        />
        <br />
        <br />
        <Button
          form="formTextarea"
          scrollToInvalidFields
        >
          Submit
        </Button>
      </Div>
    );
  }
}
