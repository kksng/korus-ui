/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';
import { DataObject } from '../../../leda/commonTypes';

export const ButtonGroup = (): React.ReactElement => {
  const [value, setValue] = React.useState<string | undefined>();
  const [value1, setValue1] = React.useState<string[] | undefined>(null);
  const [value2, setValue2] = React.useState<DataObject | undefined>(null);

  return (
    <L.Div _demoStory>
      <L.ButtonGroup
        data={['one', 'two', 'three', 'four']}
        defaultValue="three"
        onChange={(event) => setValue(event.component.value)}
        textField="data"
        data-test="FourButtonGroup"
        _primary
      />
      <br />
      <br />
      
      <L.ButtonGroup
        data={[2, 3]}
        isDisabled
        defaultValue={[2]}
        data-test="TwoButtonGroup"
        type="checkbox"
      />
      <br />
      <br />

      <L.ButtonGroup
        data={[
          { data: 'one' },
          { data: 'two' },
          { data: 'three' },
        ]}
        defaultValue={[
          { data: 'one' },
        ]}
        type="radio"
        data-test="ThreeButtonGroup"
        textField="data"
        _warning
      />
      <br />
      <br />

      <L.ButtonGroup
        data={['one']}
        data-test="OneButtonGroup"
        value={value1}
        onChange={(event) => setValue1(event.component.value)}
      />
      <br />
      <br />

      <L.ButtonGroup
        data={[1, 2, 3]}
        data-test="NumberButtonGroup"
        type='checkbox'
      />
      <br />
      <br />

      <L.ButtonGroup
        data={[
          { data: 'one' },
          { data: 'two' },
          { data: 'three' },
        ]}
        data-test="RadioButtonGroup"
        value={value2}
        type="radio"
        textField="data"
        onChange={(event) => setValue2(event.component.value)}
      />
      <br />
      <br />
    </L.Div>
  );
};
