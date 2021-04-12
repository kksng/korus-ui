/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../korus-ui';


export const CheckBox = (): React.ReactElement => {
  const [value, setValue] = React.useState(true);
  const handleChange = (event: L.CheckBoxTypes.ChangeEvent) => {
    setValue(event.component.value);
  };

  return (
    <L.Div _demoStory>
      <L.CheckBox
        _customClass
        onChange={() => alert('Changed!')}
        id="checkBoxMain"
      >
        Main
      </L.CheckBox>
      <br />
      <br />
      <L.CheckBox 
        id="checkBoxButton">
        <L.Button 
          isLoading 
          onClick={() => alert('Alert!')}
        >
          isLoading
        </L.Button>
      </L.CheckBox>
      <br />
      <br />
      <L.CheckBox
        isDisabled
        id="checkBoxDisabled"
        onChange={() => alert('Alert!')}
      >
        isDisabled
      </L.CheckBox>
      <br />
      <br />
      <L.CheckBox
        id="checkBoxSemi"
        value={value}
        onChange={handleChange}
        isSemi
        onClick={() => alert('Clicked!')}
      >
        isSemi
      </L.CheckBox>
      <br />
      <br />
      <L.H4>CheckBox group</L.H4>
      <L.Div id="checkBoxGroup">
        <L.CheckBox>1</L.CheckBox>
        <br />
        <L.CheckBox
          isSemi
        >
          Semi
        </L.CheckBox>
        <br />
        <L.CheckBox>2</L.CheckBox>
        <br />
        <L.CheckBox>3</L.CheckBox>
      </L.Div>
    </L.Div>
  );
};
