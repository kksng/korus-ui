/* eslint-disable no-alert,react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { StateButtonGroup } from './StateButtonGroup';

export const Loader = () => {
  const [props, setProps] = React.useState({ });

  return (
    <L.Div _demoStory>
      <L.H4 _title>Loader</L.H4>
      <p>Лоадер как обертка:</p>
      <L.Loader
        isLoading
        onClick={(ev) => console.log('ev', ev)}
        {...props}
      >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </L.Loader>
      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: { } },
          { text: 'Spinner', props: { iconRender: ({ elementProps }: { elementProps: any }) => <L.Div _loaderSpinner {...elementProps} /> } },
          { text: 'Custom', props: { iconRender: ({ elementProps }: { elementProps: any }) => <><L.Div _loaderHourglass {...elementProps} /><L.Span>БЛАБЛАБЛАБЛАБЛА</L.Span></> } },
          { text: 'Disabled', props: { isLoading: false } },
        ]}
        setProps={setProps}
        theme={{ activeButton: 'warning' }}
      />
      <br />
      <br />
      <L.Button
        _warning
        onClick={() => {
          setProps((prevProps) => ({ ...prevProps, isGlobal: true }));
          setTimeout(() => { setProps((prevProps) => ({ ...prevProps, isGlobal: false })); alert('Полноэкранный лоадер отключен'); }, 6000);
        }}
      >
        Включить глобальный лоадер на 6 сек
      </L.Button>
    </L.Div>
  );
};
