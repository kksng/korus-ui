/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveDemo } from '../../../components/LiveDemo';


/* eslint-disable react/no-unescaped-entities */
const liveDemo = `
  const ValidateOnBlur = () => {
    return (
      <L.Div>
        <L.P>
          <L.Input
            isRequired
            form="form1"
            name="Input1"
            placeholder="form1 Input1"
          />
        </L.P>
        <L.P>
          <L.Input
            isRequired
            form="form1"
            name="Input2"
            placeholder="form1 Input2"
          />
        </L.P>
        <L.P>
          <L.Input
            isRequired
            form="form2"
            name="Input1"
            placeholder="form2 Input1"
          />
        </L.P>
        <L.P>
          <L.Input
            isRequired
            form="form2"
            name="Input2"
            placeholder="form2 Input2"
          />
        </L.P>
        <L.P>
          <L.Button
            form="form1"
          >
            Submit form1
          </L.Button>
          {' '}
          <L.Button
            form="form2"
          >
            Submit form2
          </L.Button>
          {' '}
          <L.Button
            form={['form1', 'form2']}
          >
            Submit both
          </L.Button>
        </L.P>
      </L.Div>
    );
  };
  
  render(<ValidateOnBlur />);
`;


export const FormsUnion = () => (
  <L.Div _article>
    <L.H1 _header>
      Объединение форм
    </L.H1>
    <L.P>
      Несколько форм могут быть объединены одной кнопкой:
    </L.P>

    <L.Div _block>
      <LiveDemo
        isDemoOpen={true}
        setDemoOpen={() => {}}
        liveDemo={liveDemo}
      />
    </L.Div>
  </L.Div>
);
