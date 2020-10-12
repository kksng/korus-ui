import React, { Component } from 'react';
import { Div, Button, ValidateTextContent } from '@korus/leda';

export default class extends Component {
  state = {
    textContent: 'Нажмите на кнопку',
  };

  textContentUpdate = () => {
    this.setState({ textContent: 'Валидный текст' });
  };

  render() {
    const { textContent } = this.state;

    return (
      <Div>
        <ValidateTextContent
          name="validatedTextContent"
          form="formValidateTextContent"
          validator={value => value !== 'Нажмите на кнопку'}
          invalidMessage="Нажмите на кнопку"
        >
          {textContent}
        </ValidateTextContent>
        <br />
        <br />
        <Button
          onClick={this.textContentUpdate}
        >
          Update text content
        </Button>
        <br />
        <br />
        <Button
          form="formValidateTextContent"
        >
          Submit
        </Button>
      </Div>
    );
  }
}
