/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

const data = [
    { labelText: 'Согласование' },
    { labelText: 'Оформление' },
    { labelText: 'Подписание' },
    { labelText: 'Предоплата' },
    { labelText: 'Доставка' },
    { labelText: 'Оплата' },
  ];

export const Minimal = (storyProps: StoryProps) => {
    const [index, setIndex] = React.useState(2);
    const [value, setValue] = React.useState(data[index]);

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
      </L.Div>
    );
  };
