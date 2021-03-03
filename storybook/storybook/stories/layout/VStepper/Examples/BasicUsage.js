import { componentSrc } from './index';

export const BasicUsage = {
  liveDemo: `
const BasicUsage = () => (
  <L.VStepper>
    <L.VStepper.Item 
      hasSignIcon 
      titleText="Добавление расходов" 
      statusText="Заполнено" 
      type="success"
      footerContent={<L.Button name="btnNext">Далее</L.Button>}>
    </L.VStepper.Item>
    <L.VStepper.Item 
      titleText="Персональные данные" 
      statusText="Заполнено" 
      type="success">
    </L.VStepper.Item>
    <L.VStepper.Item 
      titleText="Подтверждение командировки" 
      statusText="В процессе" 
      type="progress">
    </L.VStepper.Item>
    <L.VStepper.Item 
      hasSignIcon 
      titleText="Печать закрывающих документов" 
      statusText="Не заполнено" 
      type="danger">
    </L.VStepper.Item>
    <L.VStepper.Item 
      titleText="Дополнительная информация" 
      statusText="Не заполнено">
    </L.VStepper.Item>
  </L.VStepper>
);

render(<BasicUsage />);
`,
  source: componentSrc,
};
