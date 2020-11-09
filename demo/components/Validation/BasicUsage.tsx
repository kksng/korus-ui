/* eslint-disable react/prop-types, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';


export const BasicUsage = (props: StoryProps) => {
  const [value, setValue] = React.useState('');

  return (
    <L.Div _box _inner>
      <L.H6>Валидация при blur и по кнопке</L.H6>
      <L.Input
        form="personal-data"
        name="name1"
        isRequired
        onChange={(ev) => setValue(ev.component.value)}
      />
      <br />
      <br />
      <L.Input
        form="personal-data"
        name="name"
        isRequired
        onChange={(ev) => setValue(ev.component.value)}
      />
      <br />
      <br />
      <L.Button
        form={['personal-data', 'personal-data1']}
        scrollOffset={64}
        shouldScrollToInvalidFields
        _warning
        onClick={() => console.log('Successful click!')}
        onValidationFail={(ev) => console.log('Click failed! Invalid fields', ev.invalidForms)}
      >
        Валидировать!
      </L.Button>
    </L.Div>
  );
};
