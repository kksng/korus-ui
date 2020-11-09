import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

export const DataTypes = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const [colorProps, setColorProps] = React.useState<any>({});

  return (
    <L.Div _box _inner _demoBg>
      <L.ButtonGroup
        form="ButtonGroup"
        name="ButtonGroup"
        data={['one', 'two', 'three']}
        defaultValue="two"
        isDisabled={isDisabled}
        theme={{ buttonActive: 'active' }}
        onChange={(ev) => {
          console.log('ev.component.value', ev.component.value);
        }}
        {...props}
        {...colorProps}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'String data',
            props: { data: ['one', 'two', 'three'] },
          },
          {
            text: 'Number data',
            props: { data: [1, 2, 3] },
          },
          {
            text: 'Object data',
            props: {
              data: [
                { txt: 'obj-1', val: 1 },
                { txt: 'obj-2', val: 2 },
                { txt: 'obj-3', val: 3 },
              ],
              textField: 'txt',
            },
          },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: { } },
          { text: 'Primary', props: { _primary: true } },
          { text: 'Secondary', props: { _secondary: true } },
          { text: 'Success', props: { _success: true } },
          { text: 'Warning', props: { _warning: true } },
          { text: 'Danger', props: { _danger: true } },
        ]}
        setProps={setColorProps}
      />
      <br />
      <br />
      <L.Switcher value={isDisabled} onChange={(ev) => setIsDisabled(ev.component.value)}>isDisabled</L.Switcher>
      <br />
      <br />
      <L.Button
        onClick={() => {
          const result = L.form('ButtonGroup').reset();
          console.log('reset', result);
        }}
      >
        Reset
      </L.Button>
    </L.Div>
  );
};
