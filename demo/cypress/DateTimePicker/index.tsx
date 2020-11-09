/* eslint-disable no-alert */
import * as React from 'react';
import * as L from '../../../leda';

export const DateTimePicker = (): React.ReactElement => (
  <L.Div _demoStory>
    <L.Div data-test="dp1" style={{ position: 'fixed', top: '20px', left: '20px' }}>
      <L.DateTimePicker />
    </L.Div>
    <L.Div data-test="dp2" style={{ position: 'fixed', top: '20px', right: '20px' }}>
      <L.DateTimePicker />
    </L.Div>
    <L.Div data-test="dp3" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <L.DateTimePicker />
    </L.Div>
    <L.Div data-test="dp4" style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
      <L.DateTimePicker />
    </L.Div>
  </L.Div>
);
