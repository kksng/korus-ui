import * as React from 'react';
import * as L from '../../leda';

export const ProgressBar = () => {
  // Ref используется для хранения данных вне контекста компонента.
  // Это нужно для правильной работы setInterval.
  const state = React.useRef<{ value: number, interval: number | null }>({ value: 25, interval: null }).current;
  const [value, setValue] = React.useState(25);

  const resetProgress = () => {
    state.value = 0;
    setValue(state.value);
  };

  const stopProgress = () => {
    clearInterval(state.interval ?? 0);
    state.interval = null;
  };

  const incrementProgress = () => {
    const nextProgress = state.value + 1;
    if (nextProgress === 100) stopProgress();
    state.value = nextProgress;
    setValue(nextProgress);
  };

  const launchProgress = () => {
    if (state.value === 100) {
      resetProgress();
    }
    if (!state.interval) {
      state.interval = window.setInterval(incrementProgress, 250);
    } else {
      stopProgress();
    }
  };
  return (
    <L.Div _demoStory>
      <L.H4 _title>ProgressBar</L.H4>
      <L.ProgressBar value={value} valueRender={() => null} />
      <br />
      <br />
      <L.Button _warning onClick={launchProgress}>{state.interval !== null ? 'Stop' : 'Launch'} progress</L.Button>
      {' '}
      <L.Button _warning onClick={resetProgress}>Reset progress</L.Button>
    </L.Div>
  );
};
