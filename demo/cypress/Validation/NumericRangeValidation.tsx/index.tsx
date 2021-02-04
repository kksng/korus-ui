import * as React from 'react';
import * as L from '../../../../korus-ui';
import { Label } from '../utils/Label';



export const NumericRangeValidation = () => {
  return (
    <L.Div _inner id="numericRange">
      <L.Div _inner>
        <L.H2>NumericRange Validation</L.H2>
        <L.Div _inner _flexRow _alignItemsCenter>
          <Label>NumericRange</Label>
          <L.NumericRange
            isRequired
            form="requiredForm"
            name="NumericRange"
            requiredMessage={'Field is required'}
            _grow1
          />
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
