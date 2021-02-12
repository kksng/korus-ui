import * as React from 'react';
import * as L from '../../../korus-ui';
import { stepContent } from '../../components/VStepper/constants';

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
  header: string;
  statusSuccess: string;
  statusProgress: string;
}

export const VStepper = (): React.ReactElement => {
  const [value, setValue] = React.useState<Data | null>(data[0]);
  const [openKeys, setOpenKeys] = React.useState([0]);

  const handleNextClick = (index: number): void => {
    if (index === 3) {
      setOpenKeys(openKeys.filter((key) => key !== index));
      setValue(null);
    } else if (value) {
      setOpenKeys([...openKeys.filter((key) => key !== index), index + 1]);
      setValue(data[data.indexOf(value) + 1]);
    }
  };

  const handleHeadingClick = (index: number): void => {
    if (openKeys.includes(index))
      setOpenKeys(openKeys.filter((key) => key !== index));
    else {
      setOpenKeys([...openKeys, index]);
    }
  };
  return (
    <L.Div _demoStory>
      <L.H4>Static steps</L.H4>
      <L.VStepper>
        <L.VStepper.Item
          hasSignIcon
          titleText='Добавление расходов'
          statusText='Заполнено'
          type='success'
          footerContent={<L.Button name='btnNext'>Далее</L.Button>}
        >
          {stepContent[0]}
        </L.VStepper.Item>
        <L.VStepper.Item
          titleText='Персональные данные'
          statusText='Заполнено'
          type='success'
          nextStepType='progress'
        >
          {stepContent[1]}
        </L.VStepper.Item>
        <L.VStepper.Item
          titleText='Подтверждение командировки'
          statusText='В процессе'
          type='progress'
        >
          {stepContent[2]}
        </L.VStepper.Item>
        <L.VStepper.Item
          hasSignIcon
          titleText='Печать закрывающих документов'
          statusText='Не заполнено'
          type='danger'
        >
          {stepContent[3]}
        </L.VStepper.Item>
        <L.VStepper.Item
          titleText='Дополнительная информация'
          statusText='Не заполнено'
        >
          {stepContent[4]}
        </L.VStepper.Item>
        <L.VStepper.Item
          hasSignIcon
          titleText='Предупреждение'
          statusText='Не заполнено'
          type='warning'
        >
          Предупреждение
        </L.VStepper.Item>
        <L.VStepper.Item
          hasSignIcon
          isOpen
          id='isOpen'
          titleText='isOpen'
          statusText='Заполнено'
          type='success'
          footerContent={<L.Button name='btnNext'>Далее</L.Button>}
        >
          {stepContent[0]}
        </L.VStepper.Item>
        <L.VStepper.Item
          id='isDisable'
          titleText='isDisable'
          isDisabled
          statusText='Заполнено'
          type='success'
          nextStepType='progress'
        ></L.VStepper.Item>
        <L.VStepper.Item
          titleText='Click me!'
          onClick={() => alert('Click!')}
          statusText='В процессе'
          type='progress'
        >
          {stepContent[2]}
        </L.VStepper.Item>
      </L.VStepper>
      <br />
      <br />
      <L.Div>
        <L.H4>Dynamic steps</L.H4>
        <L.VStepper value={value}>
          {data.map((item, index) => (
            <L.VStepper.Item
              isOpen={openKeys.includes(index)}
              onClick={() => handleHeadingClick(index)}
              item={item}
              titleTextField='header'
              statusTextField='statusProgress'
              statusRender={({
                Element,
                elementProps,
                componentProps: { type },
              }) => (
                <Element {...elementProps}>
                  {type === 'success'
                    ? item.statusSuccess
                    : item.statusProgress}
                </Element>
              )}
              key={index.toString()}
              hasSignIcon={index === 0 || index === 1}
              isDisabled={item.isDisabled}
            >
              {stepContent[index]}
              <br />
              <L.Button _success onClick={() => handleNextClick(index)}>
                Далее
              </L.Button>
            </L.VStepper.Item>
          ))}
        </L.VStepper>
      </L.Div>
    </L.Div>
  );
};
