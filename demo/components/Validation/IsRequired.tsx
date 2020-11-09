/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';


export const IsRequired = (props: StoryProps) => {
  const [isRequired, setIsRequired] = React.useState(true);
  const [validator, setValidator] = React.useState<'email' | 'postalCode'>('email');

  return (
    <L.Div _box _inner>
      <L.Div>
        <L.Div _inner>
          <L.Input
            isRequired={isRequired}
            form="formIsRequired"
            name="Input1"
            validator={validator}
            placeholder="outer isRequired"
          />
        </L.Div>
        <L.Div _inner>
          <L.Switcher
            onClick={() => setIsRequired(!isRequired)}
            value={isRequired}
            _warning
          >
            Toggle isRequired
          </L.Switcher>
        </L.Div>
        <L.Div _inner>
          <L.Button
            onClick={() => {
              setValidator('email')
            }}
          >
            email
          </L.Button>
          {' '}
          <L.Button
            onClick={() => {
              setValidator('postalCode')
            }}
          >
            postalCode
          </L.Button>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
