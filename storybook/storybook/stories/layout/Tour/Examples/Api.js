import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const getData = (elements) => [
  {
    stepKey: '1',
    content: ({ next, stopTour }) => (
      <L.Div _inner>
        <h1>Заголовок 1</h1>
        <p>Это кнопка</p>
        <L.Div _flex-row _justify-content-around>
          <L.Button onClick={stopTour}>Закрыть</L.Button>
          <L.Button onClick={next} _success>Далее</L.Button>
        </L.Div>
      </L.Div>
    ),
    position: 'top',
    element: elements[0],
  },
  {
    stepKey: '2',
    content: ({ next, prev, stopTour }) => (
      <L.Div _inner>
        <L.H1>Заголовок 2</L.H1>
        <p>А это текст</p>
        <L.Div _flex-row _justify-content-around>
          <L.Button onClick={stopTour}>Закрыть</L.Button>
          <L.Button onClick={prev} _success>Назад</L.Button>
          <L.Button onClick={next} _success>Далее</L.Button>
        </L.Div>
      </L.Div>
    ),
    position: 'right',
    element: elements[1],
  },
  {
    stepKey: '3',
    content: ({ prev, stopTour }) => (
      <L.Div _inner>
        <L.H1>Заголовок 3</L.H1>
        <p>А здесь текст набран жирным шрифтом</p>
        <L.Div _flex-row _justify-content-around>
          <L.Button onClick={stopTour}>Закрыть</L.Button>
          <L.Button onClick={prev} _success>Назад</L.Button>
        </L.Div>
      </L.Div>
    ),
    position: 'bottom',
    element: elements[2],
  },
];


const Api = () => {
  const [element1, ref1] = L.utils.useElementRef();
  const [element2, ref2] = L.utils.useElementRef();
  const [element3, ref3] = L.utils.useElementRef();
  const [activeStep, setActiveStep] = React.useState(null);

  const data = getData([element1, element2, element3]);

  return (
    <L.Div _inner>
      <L.Button _warning _margin-bottom onClick={() => setActiveStep('1')}>
        Начать гайд-тур
      </L.Button>
      <L.Div _inner>
        <L.Button ref={ref1}>
          Элемент тура 1
        </L.Button>
        {' '}
        <L.Span _inner ref={ref2}>
          Элемент тура 2
        </L.Span>
        <br />
        <br />
        <L.B _inner ref={ref3}>
          Элемент тура 3
        </L.B>
      </L.Div>
      <L.Tour
        data={data}
        activeStepKey={activeStep}
        onChange={(ev) => setActiveStep(ev.component.value)}
      />
    </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
