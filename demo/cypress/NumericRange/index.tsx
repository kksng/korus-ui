/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';

export const NumericRange = () => {
  const [value, setValue] = React.useState<[number | null, number | null] | null>([null, null]);
  return (
    <>
      <L.H4>Handle null value onChange</L.H4>
      <L.NumericRange
        name="basicUse"
        id="basicUse"
        onChange={(ev) => { setValue(ev.component.value) }}
        value={value}
        isRequired
        requiredMessage="Required field!"
        placeholder="Only numbers"
        form="foobar"
      />
      <br />
      <br />
      <L.H4>isDisabled</L.H4>
      <L.NumericRange isDisabled id="disabledRange"/>
    </>
  );
};
