import * as React from 'react';

import * as L from '~';

export const RadioGroup = (): React.ReactElement => {
const [value, setValue] = React.useState<string | number>(3);
const [value1, setValue1] = React.useState<string | number>();

  return (
    <>
      <L.Div _demoStory>
        <L.P>Uncontrolled</L.P>
        <L.RadioGroup
          form="form"
          name="radio-group-1"
          className="uncontrolled"
        >
          <L.RadioButton value={1}>One</L.RadioButton>
          <L.RadioButton value={2}>Two</L.RadioButton>
          <L.RadioButton value={3}>Three</L.RadioButton>
        </L.RadioGroup>
        <br />
        <br />
        <br />
        <L.P>Controlled with initial value</L.P>
        <L.RadioGroup
          form="form"
          value={value}
          onChange={(ev) => setValue(ev.component.value) }
          name="radio-group-2"
          className="controlled-with-initial-value"
        >
          <L.RadioButton value={1}>One</L.RadioButton>
          <L.RadioButton value={2}>Two</L.RadioButton>
          <L.RadioButton value={3}>Three</L.RadioButton>
        </L.RadioGroup>
        <br />
        <br />
        <br />
        <L.P>Controlled without initial value</L.P>
        <L.RadioGroup
          form="form"
          value={value1}
          onChange={(ev) => setValue1(ev.component.value) }
          name="radio-group-3"
          className="controlled-without-initial-value"
        >
          <L.RadioButton value={1}>One</L.RadioButton>
          <L.RadioButton value={2}>Two</L.RadioButton>
           <L.RadioButton value={3}>Three</L.RadioButton>
        </L.RadioGroup>
      </L.Div>
      <L.Button
        _warning
        onClick={() => {
          L.form('form').reset();
        }}
      >
        Reset
      </L.Button>
    </>
  );
}
