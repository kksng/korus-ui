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

export const FormUncontrolled = (props: StoryProps) => {
  const formName = 'form-name';
  const handleChange = (event: {
    component: {},
  }) => {
    console.log(event.component);
  };
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
            onChange={handleChange}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            ButtonGroup
          </Label>
          <L.ButtonGroup _grow1
            isRequired
            data={['one', 'two', 'three']}
            form={formName}
            name="buttongroup"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            requiredMessage="Поле обязательно"
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </L.Div>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>
            Textarea
          </Label>
          <L.Textarea _grow1
            form={formName}
            name="textarea"
            onChange={handleChange}
            validator={(value) => value.length}
            invalidMessage="must not be empty"
          />
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
