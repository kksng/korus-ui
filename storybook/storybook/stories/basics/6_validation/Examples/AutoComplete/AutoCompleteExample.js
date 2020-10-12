import React, { Component } from 'react';
import { Div, Button, AutoComplete } from '@korus/leda';

export default class extends Component {
  constructor(props) {
    super(props);
    this.autoCompleteData = ['Санкт-Петербург', 'Москва', 'Владивосток', 'Нижний Новгород'];
    this.state = {
      autoCompleteValue: '',
    };
  }

  onInput = (e) => {
    this.setState({ autoCompleteValue: e.component.value });
  };

  render() {
    const { autoCompleteValue } = this.state;

    return (
      <Div>
        <Div>
          <AutoComplete
            name="validatedAutoComplete"
            form="formAutoComplete"
            width={15}
            isRequired
            onChange={this.onInput}
            value={autoCompleteValue}
            validator={value => this.autoCompleteData.includes(value)}
            data={this.autoCompleteData}
          />
          <br />
          <br />
          <Button
            form="formAutoComplete"
          >
            Submit
          </Button>
        </Div>
      </Div>
    );
  }
}
