/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

const data = [
  'Agreement',
  'Registration',
  'Signing',
  'Prepayment',
  'Delivery',
  'Payment',
];

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.StatusBar
        data={data}
      />
      <br />
    </L.Div>
  );
}; 
