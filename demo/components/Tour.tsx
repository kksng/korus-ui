import { isNil } from 'lodash';
import * as React from 'react';
import * as L from '../../leda';
import { useElementRef } from '../../leda/utils';
import { StoryProps } from '../types';

const getData = (elements: (HTMLElement | null)[]): L.TourTypes.TourStepItem[] => [
  {
    stepKey: '1',
    borderRadius: 4,
    padding: 4,
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
    borderRadius: 4,
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
    borderRadius: 4,
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
    borderRadius: 4,
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
          <L.Li>
            <L.Button _success onClick={props.next}>
              Далее
            </L.Button>
          </L.Li>
        </L.Ul>
      </L.Div>
    ),
    position: 'top-left',
    element: elements[3],
  },
  {
    stepKey: '5',
    borderRadius: 4,
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 5</L.H1>
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
    position: 'top-center',
    element: elements[4],
  },
  {
    stepKey: '6',
    borderRadius: 4,
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 6</L.H1>
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
    position: 'bottom-center',
    element: elements[5],
  },
  {
    stepKey: '7',
    borderRadius: 4,
    content: (props) => (
      <L.Div _inner>
        <L.H1>Заголовок 7</L.H1>
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
    position: 'bottom-left',
    element: elements[6],
  },
];

export const Tour = (storyProps: StoryProps): React.ReactElement => {
  const [element1, ref1] = useElementRef();
  const [element2, ref2] = useElementRef();
  const [element3, ref3] = useElementRef();
  const [element4, ref4] = useElementRef();
  const [element5, ref5] = useElementRef();
  const [element6, ref6] = useElementRef();
  const [element7, ref7] = useElementRef();

  const [activeStep, setActiveStep] = React.useState<string | number | null>(null);
  const [stepDelay, setStepDelay] = React.useState<number | undefined>(undefined); 

  const data = getData([element1, element2, element3, element4, element5, element6, element7]);

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
          <L.Button _inner ref={ref1} onClick={() => setActiveStep('3')}>
            Элемент тура 1
          </L.Button>
          <br />
          <br />
          <L.Button _inner ref={ref2} onClick={() => console.log('Clicked 2!')}>
            Элемент тура 2
          </L.Button>
          <br />
          <br />
          <L.Button _inner ref={ref3} onClick={() => console.log('Clicked 3!')}>
            Элемент тура 3
          </L.Button>
          <br />
          <br />
          <L.Button _inner ref={ref4} style={{ marginLeft: '500px' }} onClick={() => console.log('Clicked 4!')}>
            Элемент тура 4
          </L.Button>
          <br />
          <br />
          <L.Button _inner ref={ref5} style={{ marginLeft: '250px' }} onClick={() => console.log('Clicked 5!')}>
            Элемент тура 5
          </L.Button>
          <br />
          <br />
          <L.Button _inner ref={ref6} style={{ marginLeft: '250px' }} onClick={() => console.log('Clicked 6!')}>
            Элемент тура 6
          </L.Button>
          <br />
          <br />
          <L.Button _inner ref={ref7} style={{ marginLeft: '500px' }} onClick={() => console.log('Clicked 7!')}>
            Элемент тура 7
          </L.Button>
        </L.Div>
        <L.Tour
          data={data}
          activeStepKey={activeStep}
          onChange={(ev) => setActiveStep(ev.component.value)}
          stepDelay={stepDelay}
        />
        <L.Button 
          _warning
          onClick={() => setStepDelay((stepDelay) => isNil(stepDelay) ? 2000 : undefined)}
        >
          Set/remove stepDelay 2 sec
        </L.Button>
      </L.Div>
    </L.Div>
  );
};

Tour.displayName = 'Tour';
