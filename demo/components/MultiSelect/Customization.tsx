import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';

export const Customization = (args: SomeObject): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean | undefined>();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <L.Div _box _inner _demoBg>
      <L.MultiSelect
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
        defaultValue={['London']}
        _width40
        onBlur={ev => console.log('ev.component.value', ev.component.value)}
        wrapperRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid aqua' }} />}
        inputRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid forestGreen' }} />}
        itemRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid hotPink' }} />}
        listRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid orange' }} />}
        tagRender={({ Element, elementProps }) => <Element {...elementProps} style={{ border: '2px solid deepPink' }} />}
        isOpen={isOpen}
        isLoading={isLoading}
        isDisabled={isDisabled}
      >
      </L.MultiSelect>
      <br />
      <br />
      <L.Button _warning={isDisabled} onClick={() => setIsDisabled(!isDisabled)}>Toggle isDisabled</L.Button>
      {' '}
      <L.Button _warning={isLoading} onClick={() => setIsLoading(!isLoading)}>Toggle isLoading</L.Button>
      {' '}
      <L.Button _warning={isOpen} onClick={() => setIsOpen(isOpen ? undefined : true)}>Toggle isOpen</L.Button>
    </L.Div>
  );
};
