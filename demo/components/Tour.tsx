import * as React from 'react';
import * as L from '../../leda';
import { useElementRef } from '../../leda/utils';

const getData = (elements: (HTMLElement | null)[]): L.TourTypes.TourStepItem[] => [
  {
    stepKey: '1',
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 1</L.H1>
        какой-то текст тут
        <L.Ul _list-h>
          <L.Li>
            <L.Button onClick={props.stopTour}>
              Закрыть
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.next}>
              Далее
            </L.Button>
          </L.Li>
        </L.Ul>
      </L.Div>
    ),
    position: 'top',
    element: elements[0],
  },
  {
    stepKey: '2',
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 2</L.H1>
        какой-то текст тут
        <L.Ul _list-h>
          <L.Li>
            <L.Button onClick={props.stopTour}>
              Закрыть
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.prev}>
              Назад
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.next}>
              Далее
            </L.Button>
          </L.Li>
        </L.Ul>
      </L.Div>
    ),
    position: 'right',
    element: elements[1],
  },
  {
    stepKey: '3',
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 3</L.H1>
        какой-то текст тут
        <L.Ul _list-h>
          <L.Li>
            <L.Button onClick={props.stopTour}>
              Закрыть
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.prev}>
              Назад
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.next}>
              Далее
            </L.Button>
          </L.Li>
        </L.Ul>
      </L.Div>
    ),
    position: 'bottom',
    element: elements[2],
  },
  {
    stepKey: '4',
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 4</L.H1>
        какой-то текст тут
        <L.Ul _list-h>
          <L.Li>
            <L.Button onClick={props.stopTour}>
              Закрыть
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.prev}>
              Назад
            </L.Button>
          </L.Li>
        </L.Ul>
      </L.Div>
    ),
    position: 'left',
    element: elements[3],
  },
];

export const Tour = (): React.ReactElement => {
  const [element1, ref1] = useElementRef();
  const [element2, ref2] = useElementRef();
  const [element3, ref3] = useElementRef();
  const [element4, ref4] = useElementRef();
  const [activeStep, setActiveStep] = React.useState<string | number | null>(null);

  const data = getData([element1, element2, element3, element4]);

  return (
    <L.Div _demo-story>
      <L.H4 _title>Tour</L.H4>
      <L.Div _inner>
        <L.Button _warning onClick={() => setActiveStep('1')}>
          Начать гайд-тур
        </L.Button>
        <br />
        <br />
        <L.Div _inner>
          <L.Span _inner ref={ref1}>
            Элемент тура 1
          </L.Span>
          <br />
          <br />
          <L.Span _inner ref={ref2}>
            Элемент тура 2
          </L.Span>
          <br />
          <br />
          <L.Span _inner ref={ref3}>
            Элемент тура 3
          </L.Span>
          <br />
          <br />
          <L.Span _inner ref={ref4} style={{ marginLeft: '500px' }}>
            Элемент тура 4
          </L.Span>
        </L.Div>
        <L.Tour
          data={data}
          activeStepKey={activeStep}
          onChange={(ev) => setActiveStep(ev.component.value)}
        />
      </L.Div>
    </L.Div>
  );
};

Tour.displayName = 'Tour';
