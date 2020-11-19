/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../leda';

export const NumericRange = () => {
  const [value, setValue] = React.useState<[number | null, number | null] | null>([null, null]);
  return (
    <>
      <h4>Handle null value onChange</h4>
      <L.NumericRange
        name={['min-num', 'max-num']}
        onChange={(ev) => { setValue(ev.component.value) }}
        value={value}
      />
    </>
  );
};
