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
        min={new Date(2019, 9, 5, 12, 30)}
        max={new Date(2019, 9, 7, 17, 0)}
        value={value}
        onChange={(ev) => setValue(ev.component.value)}
        isRequired={[true, false]}
        _width50
      />
      <br />
      <L.TimeRange
        name="TimeRange"
        min={new Date(2019, 9, 5, 12, 30)}
        max={new Date(2019, 9, 7, 17, 0)}
        value={value}
        onChange={(ev) => setValue(ev.component.value)}
        isRequired={[true, false]}
        isDisabled
        _width50
      />
    </L.Div>
  );
};
