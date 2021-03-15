import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [time, setTime] = React.useState(45000);
  const [restart, setRestart] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);

  const handleRestart = (time) => {
    if (Number.isInteger(time)) setTime(time);
    setRestart(restart + 1)
  }

  const timers = [
    {
      time: 45000,
      text: '45 sec'
    },
    {
      time: 60000,
      text: '1 min'
    }
  ]

  return (
    <L.Div>
      <L.CountDown 
        key={restart}
        time={time}
        interval={delay}
        text="Отправить код повторно"
        onTick={() => console.log('Tick!')}
        onStart={() => console.log('Start!')}
        onPause={() => console.log('Pause!')}
        onComplete={() => console.log('Completed!')}
      />
      <br />
      <L.Button onClick={() => setDelay(null)}>Pause</L.Button>
      <L.Button onClick={() => setDelay(1000)}>Resume</L.Button>
      <L.Button onClick={() => handleRestart()}>Restart</L.Button>
      <br />
      <br />
      <L.ButtonGroup
        data={timers}
        defaultValue={timers[0]}
        onChange={(event) => handleRestart(event.component.value.time)}
        textField="text"
        _primary
      />
    </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
