import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const WorkTypes = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.ButtonGroup
        data={['one', 'two', 'three', 'four']}
        type="checkbox"
        isDisabled={isDisabled}
        {...props}
      >
      </L.ButtonGroup>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Checkbox type',
            props: { type: 'checkbox', key: 'checkbox' },
          },
          {
            text: 'Radio type',
            props: { type: 'radio', key: 'radio' },
          },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <L.Switcher value={isDisabled} onChange={ev => setIsDisabled(ev.component.value)}>isDisabled</L.Switcher>
      <br />
      <br />
      <L.H6>Код примера:</L.H6>
      <br />
    </L.Div>
  );
};
`;

export const WorkTypes = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const [colorProps, setColorProps] = React.useState<any>({});

  return (
    <L.Div _box _inner _demoBg>
      <L.ButtonGroup
        data={['one', 'two', 'three', 'four']}
        type="checkbox"
        form="buttongroup-form"
        name="buttongroup-name"
        isRequired
        requiredMessage="Укажите одно или несколько значений"
        isDisabled={isDisabled}
        theme={{ buttonActive: 'active' }}
        {...props}
        {...colorProps}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Checkbox type',
            props: { type: 'checkbox', key: 'checkbox' },
          },
          {
            text: 'Radio type',
            props: { type: 'radio', key: 'radio' },
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
      <L.Button shouldScrollToInvalidFields _warning form="buttongroup-form" onClick={() => console.log('Clicked')}>Validate</L.Button>
    </L.Div>
  );
};
