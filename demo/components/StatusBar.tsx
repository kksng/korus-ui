/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../leda';
import { SetState } from '../../leda/commonTypes';
import { useInterval } from '../../leda/utils';

const data = [
  { labelText: 'Согласование' },
  { labelText: 'Оформление' },
  { labelText: 'Подписание' },
  { labelText: 'Предоплата' },
  { labelText: 'Доставка' },
  { labelText: 'Оплата' },
];

const customData = [
  {
    txt: 'Согласование',
    status: 'success',
  },
  {
    txt: 'Оформление',
    status: 'danger',
  },
  {
    txt: 'Подписание',
    status: 'success',
  },
  {
    txt: 'Предоплата',
    status: 'progress',
  },
  {
    txt: 'Доставка',
  },
  {
    txt: 'Оплата',
  },
];

const stringData = [
  'Согласование',
  'Оформление',
  'Подписание',
  'Предоплата',
  'Доставка',
  'Оплата',
];

const handleClick = (newIndex: number, setValue: SetState<{ labelText: string }>, setIndex: SetState<number>) => {
  if (newIndex <= data.length - 1 && newIndex >= 0) {
    setValue(data[newIndex]);
    setIndex(newIndex);
  }
};

export const StatusBar = () => {
  const [index, setIndex] = React.useState(2);
  const [value, setValue] = React.useState(data[index]);
  const [progress, setProgress] = React.useState(0);

  useInterval(() => {
    setProgress(progress + 10);
  }, progress < 100 ? 500 : null);

  return (
    <L.Div _demoStory>
      <L.H4 _title>StatusBar & StatusBarCustom</L.H4>
      <L.StatusBar
        data={data}
        value={data[2]}
        textField="labelText"
        currentStepProgress={progress}
      />
      <br />
      <L.StatusBar
        data={data}
        value={value}
        textField="labelText"
        onClick={() => alert('clicked!')}
        iconRender={({ componentProps: { isLast, position }, Element, elementProps }) => (isLast && position === 'current'
          ? <L.Div _last _statusbarIcon _success />
          : <Element {...elementProps} />)}
      />
      <br />
      <br />
      <L.Button
        _warning
        onClick={() => handleClick(index - 1, setValue, setIndex)}
      >
        Предыдущий Шаг
      </L.Button>
      {' '}
      <L.Button
        _warning
        onClick={() => handleClick(index + 1, setValue, setIndex)}
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
      <br />
      <br />
      <L.Span>Custom step types:</L.Span>
      <L.StatusBar
        data={customData as L.StatusBarTypes.StatusItem[]}
        textField="txt"
        typeField="status"
      />
      <br />
      <br />
      <L.Span>String data:</L.Span>
      <L.StatusBar
        data={stringData}
        value={stringData[4]}
      />
    </L.Div>
  );
};
