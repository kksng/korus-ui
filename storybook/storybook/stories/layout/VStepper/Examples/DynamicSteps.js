import { componentSrc } from './index';

export const DynamicSteps = {
  liveDemo: `
const DynamicSteps = () => {
  const data = [
    {
      header: 'Счет об оплате',
      statusSuccess: 'Получен',
      statusProgress: 'Получение...',
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

  const stepContent = [
    'Маркетингово-ориентированное издание тормозит формат события, tertium nоn datur.',
    'Сомнение определяет эмпирический катарсис, не учитывая мнения авторитетов.',
    'Коммуникация, суммируя приведенные примеры, программирует медиавес.',
    'Коммуникация, суммируя приведенные примеры, программирует медиавес.',
    'Селекция бренда, по определению, реально транспонирует примитивный предмет деятельности.'
  ];

  const [value, setValue] = React.useState(data[0]);
  const [openKeys, setOpenKeys] = React.useState([0]);

  const handleNextClick = (index) => {
    if (index === 3) {
      setOpenKeys(openKeys.filter(key => key !== index));
      setValue(null);
    } else if (value) {
      setOpenKeys([...openKeys.filter(key => key !== index), index + 1]);
      setValue(data[data.indexOf(value) + 1]);
    }
  };

  const handleHeadingClick = (index) => {
    if (openKeys.includes(index)) setOpenKeys(openKeys.filter(key => key !== index));
    else {
      setOpenKeys([...openKeys, index]);
    }
  };


  return (
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
    )
  };

render(<DynamicSteps />);
`,
  source: componentSrc,
};
