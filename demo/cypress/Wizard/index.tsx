import * as React from 'react';
import * as L from '../../../leda';
import { SetState } from '../../../leda/commonTypes';

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
    const [progress, setProgress] = React.useState(50);
 
    const handleClick = (newIndex: number) => {
        if (newIndex <= data.length - 1 && newIndex >= 0) {
          setValue(data[newIndex]);
          setIndex(newIndex);
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
        className="previous"
        onClick={() => handleClick(index - 1)}
      >
        Предыдущий Шаг
      </L.Button>
      {' '}
      <L.Button
        _warning
        className="next"
        onClick={() => handleClick(index + 1)}
      >
        Следующий Шаг
      </L.Button>
      </L.Div>
    );
  };
