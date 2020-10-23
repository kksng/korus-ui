import React from 'react';
import * as L from '../../../leda';

export const RadioGroupMinimal = (props: any): React.ReactElement => {
  return (
    <L.RadioGroup>
      <L.RadioButton value={1}>One</L.RadioButton>
      <L.RadioButton value={2}>Two</L.RadioButton>
      <L.RadioButton value={3}>Three</L.RadioButton>
    </L.RadioGroup>
  );
};
