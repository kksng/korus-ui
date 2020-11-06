import * as React from 'react';
import * as L from '~';
import { SomeObject, SetState } from '~/commonTypes';


export const StateButtonGroup = (props: {
  data?: any[],
  setProps: SetState<any>,
  theme?: SomeObject,
}) => {
  const {
    data,
    setProps,
  } = props;

  const [value, setValue] = React.useState(data && data[0]);

  return (
    <L.ButtonGroup
      data={data}
      value={value}
      textField="text"
      _warning
      onChange={(ev) => {
        const evValue = ev.component.value;

        if (!evValue.props) return;

        setValue(evValue);
        setProps(evValue.props);
      }}
    />
  );
};
