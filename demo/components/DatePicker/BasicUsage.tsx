import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

export const BasicUsage = (args: SomeObject): React.ReactElement => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.DatePicker {...props} data-test="datepicker" />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: { },
          },
          {
            text: 'isDisabled',
            props: { isDisabled: true },
          },
          {
            text: 'isOpen',
            props: { isOpen: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
