import * as React from 'react';

import * as L from '../../../leda';

export const TimeRange = () => {
  const [value, setValue] = React.useState<[string, string]>([
    '13:30',
    '17:00',
  ]);

  return (
    <L.Div _demoStory>
      <L.TimeRange
        _active
        name="TimeRange"
        timeMin={[12, 30]}
        timeMax={[17, 0]}
        value={value}
        onChange={(ev) => setValue(ev.component.value)}
        isRequired={[true, false]}
        _width50
      />
      <br />
      <L.TimeRange
        name="TimeRangeDisabled"
        timeMin={[12, 30]}
        timeMax={[17, 0]}
        value={value}
        onChange={(ev) => setValue(ev.component.value)}
        isRequired={[true, false]}
        isDisabled
        _width50
      />
    </L.Div>
  );
};
