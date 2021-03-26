import { isNumber } from 'lodash';
import * as React from 'react';
import * as L from '../../../korus-ui';

export const CountDown = (): React.ReactElement  => {
  const [time, setTime] = React.useState(45000);
  const [restart, setRestart] = React.useState(0);
  const [delay, setDelay] = React.useState<number | null>(1000);
  const [delay2, setDelay2] = React.useState<number | null>(null);

  const handleRestart = (time?: number): void => {
    if (isNumber(time)) setTime(time);
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
    },
    {
      time: 3000,
      text: '3 sec'
    }
  ]

  return (
      <L.Div _box _inner _demoBg>
        <L.CountDown 
          id="countDown"
          className="customClassName"
          key={restart}
          time={time}
          interval={delay}
          text="Send the code again"
          onTick={() => console.log('Tick!')}
          onStart={() => console.log('onStart!')}
          onPause={() => console.log('onPause!')}
          onComplete={() => console.log('Completed!')}
        />
        <br />
        <L.Button
          id="pause" 
          onClick={() => setDelay(null)}
        >
          Pause
        </L.Button>
        <L.Button 
          id="resume"
          onClick={() => setDelay(1000)}
        >
          Resume
        </L.Button>
        <L.Button 
          id="restart"
          onClick={() => handleRestart()}
        >
          Restart
        </L.Button>
        <br />
        <br />
        <L.ButtonGroup
          data={timers}
          defaultValue={timers[0]}
          onChange={(event) => handleRestart(event.component.value?.time)}
          textField="text"
          _primary
        />
        <br />
        <br />
        <L.Div>
          <L.CountDown
            id="countDownFormat"
            format="hh:mm:ss"
            text="Send the code again"
            time={45000}
            interval={delay2}
          />
          <br />
          <L.Button 
            id="formatStart"
            onClick={() => setDelay2(1000)}
          >
            Start
          </L.Button>
        </L.Div>
      </L.Div>
    );
  };
