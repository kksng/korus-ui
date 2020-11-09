import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

// eslint-disable-next-line
export const Customization = (componentProps: any) => {
  const [props, setProps] = React.useState({});
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner _demoBg>
      <L.AutoComplete
        name="AC"
        form="ACCustomization"
        data={[
          'London',
          'Islamabad',
          'Berlin',
          'Washington',
          'Paris',
          'Rome',
          'Tokyo',
          'Budapest',
          'Ottawa',
          'Moscow',
        ]}
        value={value}
        shouldCorrectValue
        onChange={(ev) => setValue(ev.component.value)}
        placeholder="Type your city..."
        hasClearButton
        listRender={({ elementProps }: any) => <L.Div {...elementProps} />}
        itemRender={({ elementProps, componentProps }: any) => {
          console.log('elementProps', elementProps);
          console.log('componentProps', componentProps);
          return (
            <L.Div _inner {...elementProps}>
              <L.Div _txtDanger>
                {componentProps.item}
              </L.Div>
              <L.Div _txtSuccess>
                {componentProps.item}
              </L.Div>
            </L.Div>
          );
        }}
        noSuggestionsRender={({ elementProps }) => (
          <L.Div {...elementProps}>
            <L.Div _inner _txtWarning>nothing</L.Div>
          </L.Div>
        )}
        _width30
        {...props}
      />

      <br />

      <L.Button
        form="AwesomeForm"
        onClick={(ev) => console.log('awesome form submit ev', ev)}
        onValidationFail={(ev) => console.log('awesome form fail ev', ev)}
      >
        Validate an awesome form
      </L.Button>

      <br />
      <br />
      <StateButtonGroup
        data={[
          { text: 'Default', props: {} },
          { text: 'Loading', props: { isLoading: true } },
          { text: 'Opened', props: { isOpen: true } },
          { text: 'Disabled', props: { isDisabled: true } },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
