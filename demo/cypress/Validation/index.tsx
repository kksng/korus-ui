import * as React from 'react';
import * as L from '../../../korus-ui';
import { BasicForm } from './BasicForm';
import { ControlledValidation } from './ControlledValidation';
import { NumericRangeValidation } from './NumericRangeValidation.tsx';
import { PredefinedValidators } from './PredefinedValidators';
import { ScrollForm, SubmitScrollForm } from './ScrollForm';
import { ValidationTypes } from './ValidationTypes';

export const Validation = () => (
  <L.Div _box _inner>
    <ScrollForm />
    <ControlledValidation />
    <BasicForm />
    <ValidationTypes />
    <PredefinedValidators />
    <NumericRangeValidation />
    <SubmitScrollForm />
  </L.Div>
);
