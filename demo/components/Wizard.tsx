/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '~';
import { useInterval } from '~/utils';

const data = [
    { labelText: 'Согласование' },
    { labelText: 'Оформление' },
    { labelText: 'Подписание' },
    { labelText: 'Предоплата' },
    { labelText: 'Доставка' },
    { labelText: 'Оплата' },
  ];

export const Wizard = () => {
    const [index, setIndex] = React.useState(2);
    const [value, setValue] = React.useState(data[index]);
    const [progress, setProgress] = React.useState(0);

    useInterval(() => {
      setProgress(progress + 10);
    }, progress < 100 ? 500 : null);

    const handleClick = (newIndex: number) => {
      if (newIndex <= data.length - 1 && newIndex >= 0) {
        setValue(data[newIndex]);
        setIndex(newIndex);
        setProgress(0);
      }
    };
 
    return (
      <L.Div _demoStory>
        <L.H4 _title>Wizard</L.H4>
        <L.Wizard
          data={data}
          value={value}
          textField="labelText"
          currentStepProgress={progress}
        />
        <br/>
        <br/>
      <L.Button
        _warning
        onClick={() => handleClick(index - 1)}
      >
        Предыдущий Шаг
      </L.Button>
      {' '}
      <L.Button
        _warning
        onClick={() => handleClick(index + 1)}
      >
        Следующий Шаг
      </L.Button>
      {' '}
      <L.Button
        _warning
        onClick={() => setProgress(0)}
      >
        Начать анимацию
      </L.Button>
      </L.Div>
    );
  };
