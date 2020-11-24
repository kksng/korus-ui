/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { SetState } from '../../../leda/commonTypes';
import { StoryProps } from '../../types';

const data = [
  { labelText: 'Agreement' },
  { labelText: 'Registration' },
  { labelText: 'Signing' },
  { labelText: 'Prepayment' },
  { labelText: 'Delivery' },
  { labelText: 'Payment' },
];

const handleClick = (newIndex: number, setValue: SetState<{ labelText: string }>, setIndex: SetState<number>) => {
  if (newIndex <= data.length - 1 && newIndex >= 0) {
    setValue(data[newIndex]);
    setIndex(newIndex);
  }
};

export const MinimalStatusBar = (storyProps: StoryProps) => {
  return (
    <L.Div _demoStory>
      <L.StatusBar
        data={data}
      />
    </L.Div>
  );
};

export const MinimalStatusBarItem = (storyProps: StoryProps) => {
  const [index, setIndex] = React.useState(0);
  const [value, setValue] = React.useState(data[index]);
  
  return (
    <L.Div _demoStory>
      <L.StatusBar
        data={data}
        value={value}
        textField="labelText"
        iconRender={({ componentProps: { isFirst, position }, Element, elementProps }) => (isFirst && position === 'current'
          ? <L.Div _last _statusbarIcon _success />
          : <Element {...elementProps} />)}
      />
      <br />
      <L.Button
        _warning
        onClick={() => handleClick(index - 1, setValue, setIndex)}
      >
        Previous step
      </L.Button>
      {' '}
      <L.Button
        _warning
        onClick={() => handleClick(index + 1, setValue, setIndex)}
      >
        Next step
      </L.Button>
    </L.Div>
  );
};  
