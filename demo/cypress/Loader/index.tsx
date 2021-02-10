/* eslint-disable no-alert,react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StateButtonGroup } from '../../components/StateButtonGroup';
import { StoryProps} from '../../types';

export const Loader = (storyProps: StoryProps) => {
  const [props, setProps] = React.useState({ });

  return (
    <L.Div _demoStory>
      <L.H2 _title>Loader</L.H2>
      <L.H4>Default loader</L.H4>
      <L.Loader
        isLoading
        id='defaultLoader'
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
      <L.H4>Loader spinner</L.H4>
      <L.Loader
        isLoading
        id='spinnerLoader'
        onClick={(ev) => console.log('ev', ev)}
        iconRender= {({ elementProps }: { elementProps: any }) => <L.Div _loaderSpinner {...elementProps}/>}
      >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </L.Loader>
      <br />
      <br />
      <L.H4>Custom loader</L.H4>
      <L.Loader
        isLoading
        id='customLoader'
        onClick={(ev) => console.log('ev', ev)}
        iconRender= {({ elementProps }: { elementProps: any }) => <L.Div _loaderHourglass {...elementProps}/>}
      >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </L.Loader>
      <br />
      <br />
      <L.H4>Disabled loader</L.H4>
      <L.Loader
        isLoading={false}
        id='disabledLoader'
        onClick={(ev) => console.log('ev', ev)}
        iconRender= {({ elementProps }: { elementProps: any }) => <L.Div _loaderHourglass {...elementProps}/>}
      >
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
      </L.Loader>

      {/* <StateButtonGroup
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
      <br /> */}
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
