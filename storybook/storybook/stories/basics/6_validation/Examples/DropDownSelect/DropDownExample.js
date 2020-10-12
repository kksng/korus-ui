import React, { Component } from 'react';
import { Div, Button, DropDownSelect } from '@korus/leda';

export default class extends Component {
  state = {
    dropDownSelectData: ['one', 'two', 'three'],
  };

  render() {
    const { dropDownSelectData } = this.state;
    return (
      <Div>
        <DropDownSelect
          isRequired
          data={dropDownSelectData}
          defaultItem="Choose item"
          form="formDropDown"
          name="validatedDropdown"
          validator={value => dropDownSelectData.includes(value)}
          onChange={e => console.log('DropDown onChange event', e)}
          onBlur={e => console.log('DropDown onBlur event', e)}
          width={15}
        />
        <br />
        <br />
        <Button
          form="formDropDown"
          scrollToInvalidFields
        >
          Submit
        </Button>
      </Div>
    );
  }
}
