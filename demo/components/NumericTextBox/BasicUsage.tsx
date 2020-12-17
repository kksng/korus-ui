/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';
import { StoryProps } from '../../types';
import { SomeObject } from '../../../leda/commonTypes';

export const BasicUsage = (storyProps: StoryProps) => {
  const [props, setProps] = React.useState<SomeObject>({});

  const { update, EventInfo } = useEventSpy(['formattedValue']);

  return (
    <L.Div _demoStory>
      <L.NumericTextBox
        format="#.####"
        name="numer"
        data-test="numerictextbox"
        max={20000000000000}
        min={-100000000000}
        step={1}
        invalidMessage="Число не должно быть отрицательным!"
        requiredMessage="Required field!"
        onChange={(ev) => {
          update('Change', ev);
          console.log('Change ev.component.value', ev.component.value);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        onFocus={(ev) => {
          console.log('focus ev', ev);
          update('Focus', ev);
        }}
        form="foobar"
        isRequired
        placeholder="Gimme ur number!"
        _width30
        {...props}
      />
      <br />
      <br />
      <br />
      <L.Button
        onClick={() => {
          setProps({});
        }}
      >
        Defaults
      </L.Button>
      {'  '}
      <L.Button
        onClick={() => {
          setProps({ ...props, isDisabled: !props.isDisabled });
        }}
        _warning={props.isDisabled}
      >
        Toggle isDisabled
      </L.Button>
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: {},
          },
          {
            text: 'Text left',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: any) => (
                <>
                  <L.Span _numericTextBoxPrefix>from</L.Span>
                  <Element {...elementProps} />
                </>
              ),
            },
          },
          {
            text: 'Icon left',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: any) => (
                <>
                  <L.I _numericTextBoxPrefix _passwordIsHidden />
                  <Element {...elementProps} />
                </>
              ),
            },
          },
        ]}
        setProps={setProps}
      />
      {'  '}
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: {},
          },
          {
            text: 'Text right',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: any) => (
                <>
                  <Element {...elementProps} />
                  <L.Span _numericTextBoxSuffix>RUB</L.Span>
                </>
              ),
            },
          },
          {
            text: 'Icon right',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: any) => (
                <>
                  <Element {...elementProps} />
                  <L.I _numericTextBoxSuffix _passwordIsHidden />
                </>
              ),
            },
          },
        ]}
        setProps={setProps}
      />
      <EventInfo />
    </L.Div>
  );
};
