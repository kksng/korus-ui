import * as React from 'react';
import * as L from '../../../leda';
import { useElementRef } from '../../../leda/utils';

const getData = (
  elements: (HTMLElement | null)[]
): L.TourTypes.TourStepItem[] => [
  {
    stepKey: '1',
    borderRadius: 4,
    padding: 4,
    content: (props) => (
      <L.Div name="Modal1" _inner>
        <L.H1>Header 1</L.H1>
        some text
        <L.Ul _list-h>
          <L.Li>
            <L.Button name="Close" onClick={props.stopTour}>
              Close
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button name="Next" _success onClick={props.next}>
              Next
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
      <L.Div name="Modal2" _inner>
        <L.H1>Header 2</L.H1>
        some text
        <L.Ul _list-h>
          <L.Li>
            <L.Button name="Close" onClick={props.stopTour}>
              Close
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.prev}>
              Back
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button name="Next" _success onClick={props.next}>
              Next
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
      <L.Div name="Modal3" _inner>
        <L.H1>Header 3</L.H1>
        some text
        <L.Ul _list-h>
          <L.Li>
            <L.Button name="Close" onClick={props.stopTour}>
              Close
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.prev}>
              Back
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button name="Next" _success onClick={props.next}>
              Next
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
      <L.Div name="Modal4" _inner>
        <L.H1>Header 4</L.H1>
        some text
        <L.Ul _list-h>
          <L.Li>
            <L.Button name="Close" onClick={props.stopTour}>
              Close
            </L.Button>
          </L.Li>
          <L.Li>
            <L.Button _success onClick={props.prev}>
              Back
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
  const [activeStep, setActiveStep] = React.useState<string | number | null>(
    null
  );
  const [message, setMessage] = React.useState('');

  const data = getData([element1, element2, element3, element4]);

  const handleClick3 = () => {
    setMessage('Clicked 3!');
    setActiveStep('1');
  }

  return (
    <L.Div _demo-story>
      <L.H4 _title>Tour</L.H4>
      <L.Div _inner>
        <L.Button name="startTour" _warning onClick={() => setActiveStep('1')}>
          Start tour
        </L.Button>
        <br />
        <br />
        <L.Div _inner>
          <L.Button
            name="tourElement1"
            _inner
            ref={ref1}
            onClick={() => setMessage('Clicked 1!')}
          >
            Tour element 1
          </L.Button>
          <br />
          <br />
          <L.Button
            name="tourElement2"
            _inner
            ref={ref2}
            onClick={() => setMessage('Clicked 2!')}
          >
            Tour element 2
          </L.Button>
          <br />
          <br />
          <L.Button
            name="tourElement3"
            _inner
            ref={ref3}
            onClick={handleClick3}
          >
            Tour element 3
          </L.Button>
          <br />
          <br />
          <L.Button
            name="tourElement4"
            _inner
            ref={ref4}
            style={{ marginLeft: '500px' }}
            onClick={() => setMessage('Clicked 4!')}
          >
            Tour element 4
          </L.Button>
        </L.Div>
        <L.Tour
          data={data}
          activeStepKey={activeStep}
          onChange={(ev) => setActiveStep(ev.component.value)}
        />
      </L.Div>
      <L.H4 _title>onClick Message</L.H4>
      <L.Div name="message">{message}</L.Div>
    </L.Div>
  );
};

Tour.displayName = 'Tour';