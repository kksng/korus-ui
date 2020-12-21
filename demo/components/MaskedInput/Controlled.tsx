/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';
import { useEventSpy } from '../../useEventSpy';
import { StoryProps } from '../../types';
import { RenderEvent, SomeObject } from '../../../leda/commonTypes';

export const Controlled = (storyProps: StoryProps): React.ReactElement => {
  const [props, setProps] = React.useState<SomeObject>({});
  const ref = React.useRef(null);

  const [value, setValue] = React.useState<string>('8002000600');

  const { update, EventInfo } = useEventSpy();

  return (
    <L.Div _box _inner>
      {'Здесь лейбл:  '}
      <L.MaskedInput
        mask="+7 (###) ###-##-##"
        placeholderChar="*"
        isRequired
        data-test="maskedinput"
        requiredMessage="Обязательное поле!"
        onChange={(ev) => {
          setValue(ev.component.value);
          update('Change', ev);
        }}
        form="masked"
        name="masked-name"
        _width30
        ref={ref}
        value={value}
        onFocus={(ev) => {
          update('Focus', ev);
          console.log(ref.current);
        }}
        onBlur={(ev) => {
          update('Blur', ev);
        }}
        {...props}
      />
      <br />
      <L.MaskedInput
        mask="###-###-### ##"
        placeholder="___-___-___ __"
        _width30
      />
      <br />
      <L.MaskedInput mask="LL##LL####" placeholder="Car number" _width30 />
      <br />
      <L.MaskedInput mask="####-####-####-####" placeholderChar="X" _width30 />
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
          setValue('');
        }}
      >
        Clear Value
      </L.Button>
      {'  '}
      <L.Button
        onClick={() => {
          setValue('9818862798');
        }}
      >
        Set Value
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
      {'  '}
      <L.Button form="masked" _warning>
        Validate
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
            text: 'Icon left',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: RenderEvent) => (
                <>
                  <L.I _icon20 _passwordIsHidden />
                  <Element {...elementProps} />
                </>
              ),
            },
          },
          {
            text: 'Text left',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: RenderEvent) => (
                <>
                  <L.Span>from</L.Span>
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
            text: 'Icon right',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: RenderEvent) => (
                <>
                  <Element {...elementProps} />
                  <L.I _icon20 _passwordIsHidden />
                </>
              ),
            },
          },
          {
            text: 'Text right',
            props: {
              ...props,
              inputRender: ({ Element, elementProps }: RenderEvent) => (
                <>
                  <Element {...elementProps} />
                  <L.Span>RUB</L.Span>
                </>
              ),
            },
          },
        ]}
        setProps={setProps}
      />
      <br />
      <br />
      <EventInfo />
    </L.Div>
  );
};
