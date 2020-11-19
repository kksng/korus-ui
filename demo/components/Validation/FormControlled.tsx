/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable no-console */

import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

const Label = (props: {
  children: string,
}) => (
  <L.Span
    style={{
      marginRight: '10px',
    }}
  >
    {props.children}
  </L.Span>
);

export const FormControlled = (StoryProps: StoryProps) => {
  const formName = 'form-name';
  const [valueOfAutoComplete, setValueOfAutoComplete] = React.useState<string | null>(null);
  const [valueOfButtonGroup, setValueOfButtonGroup] = React.useState<L.ButtonGroupTypes.Value | undefined>(null);
  const [valueOfDatePicker, setValueOfDatePicker] = React.useState<string | null>(null);
  const [valueOfDateTimePicker, setValueOfDateTimePicker] = React.useState<string | null>(null);
  const [valueOfDateRange, setValueOfDateRange] = React.useState<[string, string] | [null, null]>([null, null]);
  const [valueOfDateTimeRange, setValueOfDateTimeRange] = React.useState<[string, string] | [null, null]>([null, null]);
  const [valueOfDropDownSelect, setValueOfDropDownSelect] = React.useState<string | null>(null);
  const [valueOfInput, setValueOfInput] = React.useState<string>('');
  const [valueOfMaskedInput, setValueOfMaskedInput] = React.useState<string | null>(null);
  const [valueOfMultiSelect, setValueOfMultiSelect] = React.useState<string[] | null>(null);
  const [valueOfNumericRange, setValueOfNumericRange] = React.useState<[number | null, number | null] | null>(null);
  const [valueOfNumericTextBox, setValueOfNumericTextBox] = React.useState<number | null>(null);
  const [valueOfTextarea, setValueOfTextarea] = React.useState<string>('');
  const [valueOfRadioGroup, setValueOfRadioGroup] = React.useState<string | number>(0);

  return (
    <L.Div _box _inner>
      <L.Div id="ValidationRequiredBlur">
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            AutoComplete
          </Label>
          <L.AutoComplete _grow1
            isRequired
            hasClearButton
            form={formName}
            name="auto-complete"
            data={['Berlin', 'Paris']}
            value={valueOfAutoComplete}
            onChange={(event) => {
              console.log(event.component);
              setValueOfAutoComplete(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            ButtonGroup
          </Label>
          <L.ButtonGroup
            _grow1
            isRequired
            form={formName}
            name="button-group"
            data={['Berlin', 'Paris']}
            value={valueOfButtonGroup}
            onChange={(event) => {
              console.log(event.component);
              setValueOfButtonGroup(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DatePicker
          </Label>
          <L.DatePicker _grow1
            isRequired
            form={formName}
            name="date-picker"
            value={valueOfDatePicker}
            onChange={(event) => {
              console.log(event.component);
              setValueOfDatePicker(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateTimePicker
          </Label>
          <L.DateTimePicker _grow1
            isRequired
            form={formName}
            name="date-time-picker"
            value={valueOfDateTimePicker}
            onChange={(event) => {
              console.log(event.component);
              setValueOfDateTimePicker(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateRange
          </Label>
          <L.DateRange _grow1
            isRequired
            form={formName}
            name="date-range"
            value={valueOfDateRange}
            onChange={(event) => {
              console.log(event.component);
              setValueOfDateRange(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DateTimeRange
          </Label>
          <L.DateTimeRange _grow1
            isRequired
            form={formName}
            name="date-time-range"
            value={valueOfDateTimeRange}
            onChange={(event) => {
              console.log(event.component);
              setValueOfDateTimeRange(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            DropDownSelect
          </Label>
          <L.DropDownSelect _grow1
            isRequired
            hasClearButton
            form={formName}
            name="drop-down-select"
            data={['Berlin', 'Paris']}
            value={valueOfDropDownSelect}
            onChange={(event) => {
              console.log(event.component);
              setValueOfDropDownSelect(event.component.value);
            }}
            placeholder="Berlin or Paris?"
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            Input
          </Label>
          <L.Input _grow1
            isRequired
            hasClearButton
            form={formName}
            name="input"
            value={valueOfInput}
            onChange={(event) => {
              console.log(event.component);
              setValueOfInput(event.component.value);
            }}
          />
          <br />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            MaskedInput
          </Label>
          <L.MaskedInput _grow1
            isRequired
            form={formName}
            name="masked-input"
            value={valueOfMaskedInput}
            onChange={(event) => {
              console.log(event.component);
              setValueOfMaskedInput(event.component.value);
            }}
            mask="###-###"
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            MultiSelect
          </Label>
          <L.MultiSelect _grow1
            isRequired
            hasClearButton
            form={formName}
            name="multi-select"
            data={['Berlin', 'Paris']}
            value={valueOfMultiSelect}
            onChange={(event) => {
              console.log(event.component);
              setValueOfMultiSelect(event.component.value as string[]);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            NumericRange
          </Label>
          <L.NumericRange _grow1
            isRequired
            form={formName}
            name="numeric-range"
            value={valueOfNumericRange}
            onChange={(event) => {
              console.log(event.component);
              setValueOfNumericRange(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            NumericTextBox
          </Label>
          <L.NumericTextBox _grow1
            isRequired
            form={formName}
            name="numeric-text-box"
            value={valueOfNumericTextBox}
            onChange={(event) => {
              console.log(event.component);
              setValueOfNumericTextBox(event.component.value);
            }}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            Textarea
          </Label>
          <L.Textarea _grow1
            form={formName}
            isRequired
            name="textarea"
            value={valueOfTextarea}
            onChange={(event) => {
              console.log(event.component);
              setValueOfTextarea(event.component.value);
            }}
            validator={(value) => value.length}
            invalidMessage="must not be empty"
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            RadioGroup
          </Label>
          <L.RadioGroup
            form={formName}
            name="radio"
            value={valueOfRadioGroup}
            wrapperRender={({ elementProps }) => <L.Div {...elementProps} />}
            onChange={ev => {
              console.log('ev.component.value', ev.component.value);
              console.log('ev.component.name', ev.component.name);
              setValueOfRadioGroup(ev.component.value);
            }}
          >
            <L.RadioButton 
              value={0} 
              wrapperRender={({ elementProps }) => 
                <L.Span {...elementProps} style={{ color: 'green' }} 
            />}>
               One
              </L.RadioButton>
            <L.RadioButton value={1}>Two</L.RadioButton>
            <L.RadioButton value={2}>Three</L.RadioButton>
          </L.RadioGroup>
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            formHelpers
          </Label>
          <L.Button _warning
            onClick={(event) => {
              console.log(event);
              L.form(formName).reset();
            }}
          >
            Reset
          </L.Button>
          {' '}
          <L.Button _warning
            onClick={(event) => {
              console.log(event);
              const value = L.form(formName).get();
              console.log(value);
            }}
          >
            Get
          </L.Button>
          {' '}
          <L.Button _warning
            onClick={(event) => {
              console.log(event);
              const value = L.form(formName).validate();
              console.log(value);
            }}
          >
            Validate
          </L.Button>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
