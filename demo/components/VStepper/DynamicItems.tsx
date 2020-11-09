import * as React from 'react';
import * as L from '../../../leda';
import { stepContent } from './constants';

const exampleCode = `
export const DynamicItems = (props: { title: string }) => {
  const [value, setValue] = React.useState<Data | null>(data[0]);
  const [openKeys, setOpenKeys] = React.useState([0]);

  const handleNextClick = (index: number): void => {
    if (index === 3) {
      setOpenKeys(openKeys.filter(key => key !== index));
      setValue(null);
    } else if (value) {
      setOpenKeys([...openKeys.filter(key => key !== index), index + 1]);
      setValue(data[data.indexOf(value) + 1]);
    }
  };

  const handleHeadingClick = (index: number): void => {
    if (openKeys.includes(index)) setOpenKeys(openKeys.filter(key => key !== index));
    else {
      setOpenKeys([...openKeys, index]);
    }
  };

  return (
    <L.Div _box _inner _demoBg>
      <L.VStepper value={value}>
        {data.map((item, index) => (
          <L.VStepper.Item
            isOpen={openKeys.includes(index)}
            onClick={() => handleHeadingClick(index)}
            item={item}
            titleTextField="header"
            statusTextField="statusProgress"
            statusRender={({ Element, elementProps, componentProps: { type } }) => <Element {...elementProps}>{type === 'success' ? item.statusSuccess : item.statusProgress}</Element>}
            key={index.toString()}
            hasSignIcon={index === 0 || index === 1}
          >
            {stepContent[index]}
            <br />
            <L.Button _success onClick={() => handleNextClick(index)}>Далее</L.Button>
          </L.VStepper.Item>
        ))}
      </L.VStepper>
    </L.Div>
  );
};
`;

const data = [
  {
    header: 'Счет об оплате',
    statusSuccess: 'Получен',
    statusProgress: 'Получение...',
    isDisabled: true,
  },
  {
    header: 'Статус оплаты',
    statusSuccess: 'Оплачен',
    statusProgress: 'Не оплачен',
  },
  {
    header: 'Анкета',
    statusSuccess: 'Заполнена',
    statusProgress: 'Не заполнена',
  },
  {
    header: 'Результат',
    statusSuccess: 'Получен',
    statusProgress: 'Не получен',
  },
];

interface Data {
  header: string,
  statusSuccess: string,
  statusProgress: string,
}

export const DynamicItems = (props: { title: string }) => {
  const [value, setValue] = React.useState<Data | null>(data[0]);
  const [openKeys, setOpenKeys] = React.useState([0]);

  const handleNextClick = (index: number): void => {
    if (index === 3) {
      setOpenKeys(openKeys.filter(key => key !== index));
      setValue(null);
    } else if (value) {
      setOpenKeys([...openKeys.filter(key => key !== index), index + 1]);
      setValue(data[data.indexOf(value) + 1]);
    }
  };

  const handleHeadingClick = (index: number): void => {
    if (openKeys.includes(index)) setOpenKeys(openKeys.filter(key => key !== index));
    else {
      setOpenKeys([...openKeys, index]);
    }
  };

  return (
    <L.Div _box _inner _demoBg>
      <L.VStepper value={value}>
        {data.map((item, index) => (
          <L.VStepper.Item
            isOpen={openKeys.includes(index)}
            onClick={() => handleHeadingClick(index)}
            item={item}
            titleTextField="header"
            statusTextField="statusProgress"
            statusRender={({ Element, elementProps, componentProps: { type } }) => <Element {...elementProps}>{type === 'success' ? item.statusSuccess : item.statusProgress}</Element>}
            key={index.toString()}
            hasSignIcon={index === 0 || index === 1}
            isDisabled={item.isDisabled}
          >
            {stepContent[index]}
            <br />
            <L.Button _success onClick={() => handleNextClick(index)}>Далее</L.Button>
          </L.VStepper.Item>
        ))}
      </L.VStepper>
    </L.Div>
  );
};
