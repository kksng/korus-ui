/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';

export const CheckBox = () => {
  const [value, setValue] = React.useState<boolean>(true);
  return (
    <L.Div _demoStory>
      <L.H4 _title>CheckBox</L.H4>
      <L.Div style={{ display: 'flex' }}>
        <L.Div>
          <L.CheckBox
            isSemi
            name="CheBoxAry"
            value={value}
            onChange={ev => {
              console.log(ev.component.name);
              setValue(ev.component.value);
            }}
          >
            Semi-checkbox
          </L.CheckBox>
          <br />
          <L.CheckBox
            defaultValue
            onChange={ev => {
              console.log(ev.component.value);
            }}
          >
            Checked Checkbox
          </L.CheckBox>
          <br />
          <L.CheckBox onChange={ev => {
            console.log(ev);
          }}
          >
            Not Checked checkbox
          </L.CheckBox>
          <br />
          <L.CheckBox /> {/* Чекбокс без текста */}
        </L.Div>
        <L.Div style={{ marginLeft: '20px' }}>
          <L.CheckBox
            isSemi
            isDisabled
            defaultValue
            onChange={ev => {
              console.log(ev);
            }}
          >
            Semi-checkbox
          </L.CheckBox>
          <br />
          <L.CheckBox
            isDisabled
            defaultValue
            onChange={ev => {
              console.log(ev);
            }}
          >
            Disabled Checked Checkbox
          </L.CheckBox>
          <br />
          <L.CheckBox
            isDisabled
            onChange={ev => {
              console.log(ev);
            }}
          >
            Disabled Checkbox <br /> with multiline description
          </L.CheckBox>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
