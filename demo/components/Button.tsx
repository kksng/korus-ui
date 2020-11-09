/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Button = () => {
  const [statusProps, setStatusProps] = React.useState({ });
  const [stateProps, setStateProps] = React.useState({ });
  const [sizeProps, setSizeProps] = React.useState({ });

  return (
    <L.Div _demoStory>
      <L.H4 _title>Button</L.H4>
      <br />
      <L.Button
        onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
          ev.preventDefault();
          alert('Clicked!');
        }}
        {...statusProps}
        {...stateProps}
        {...sizeProps}
      >
        Клик!
      </L.Button>
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
        setProps={setStatusProps}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: { } },
          { text: 'Loading', props: { isLoading: true } },
          { text: 'Disabled', props: { isDisabled: true } },
          { text: 'Active', props: { _active: true } },
          { text: 'Border', props: { _border: true } },
          { text: 'Blank', props: { _blank: true } },
        ]}
        setProps={setStateProps}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Middle', props: { } },
          { text: 'Small', props: { _small: true } },
          { text: 'Large', props: { _large: true } },
          { text: 'Block', props: { _block: true } },
        ]}
        setProps={setSizeProps}
      />
    </L.Div>
  );
};
