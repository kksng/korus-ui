import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  // Ref используется для хранения данных вне контекста компонента.
  // Это нужно для правильной работы setInterval.
  const state = React.useRef({ value: 25, interval: null }).current;
  const [value, setValue] = React.useState(25);

  const resetProgress = () => {
    state.value = 0;
    setValue(state.value);
  };

  const stopProgress = () => {
    clearInterval(state.interval);
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
      state.interval = setInterval(incrementProgress, 250);
    } else {
      stopProgress();
    }
  };

  return (
    <L.Div _box>
      <L.ProgressBar value={value} />
      <br />
      <br />
      <L.Button _warning onClick={launchProgress}>{state.interval !== null ? 'Stop' : 'Launch'} progress</L.Button>
      {' '}
      <L.Button _warning onClick={resetProgress}>Reset progress</L.Button>
    </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
