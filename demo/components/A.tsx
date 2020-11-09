/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const A = () => {
  const [props, setProps] = React.useState({ href: 'https://google.com/', _external: true });

  return (
    <L.Div _demoStory>
      <L.H4 _title>A</L.H4>
      <br />
      <L.A
        onClick={ev => {
          ev.preventDefault();
          alert('Clicked!');
        }}
        {...props}
      >
        Кликни меня!
      </L.A>
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'External', props: { href: 'https://google.com/', _external: true } },
          { text: 'Internal', props: { href: '/some-path', _internal: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
