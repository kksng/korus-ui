import { isNil } from 'lodash';
import * as React from 'react';
import * as L from '../../../korus-ui';
import { useElementRef } from '../../../korus-ui/utils';

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
            <L.Button name="Back" _success onClick={props.prev}>
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
            <L.Button name="Back" _success onClick={props.prev}>
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
          <L.Li>
            <L.Button name="Next" _success onClick={props.next}>
              Next
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
      <L.Div name="Modal5" _inner>
        <L.H1>Header 5</L.H1>
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
    position: 'top-center',
    element: elements[4],
  },
  {
    stepKey: '6',
    borderRadius: 4,
    content: (props) => (
      <L.Div name="Modal6" _inner>
        <L.H1>Header 6</L.H1>
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
    position: 'bottom-center',
    element: elements[5],
  },
  {
    stepKey: '7',
    borderRadius: 4,
    content: (props) => (
      <L.Div name="Modal7" _inner>
        <L.H1>Header 7</L.H1>
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
    position: 'bottom-left',
    element: elements[6],
  },
  {
    stepKey: '8',
    borderRadius: 4,
    content: (props) => (
      <L.Div name="Modal8" _inner>
        <L.H1>Header 8</L.H1>
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
    position: 'top-left',
    element: elements[7],
  },
];

export const Tour = (): React.ReactElement => {
  const [element1, ref1] = useElementRef();
  const [element2, ref2] = useElementRef();
  const [element3, ref3] = useElementRef();
  const [element4, ref4] = useElementRef();
  const [element5, ref5] = useElementRef();
  const [element6, ref6] = useElementRef();
  const [element7, ref7] = useElementRef();
  const [element8, ref8] = useElementRef();

  const [activeStep, setActiveStep] = React.useState<string | number | null>(
    null
  );
  const [message, setMessage] = React.useState('');
  const [stepDelay, setStepDelay] = React.useState<number | undefined>(
    undefined
  );
  const [isOpen, setOpen] = React.useState(false);

  const data = getData([
    element1,
    element2,
    element3,
    element4,
    element5,
    element6,
    element7,
    element8,
  ]);

  const handleClick3 = () => {
    setMessage('Clicked 3!');
    setActiveStep('1');
  };

  React.useEffect(() => {
    if (activeStep === '8') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [activeStep]);

  return (
    <L.Div _demo-story>
      <L.H4 _title>Tour</L.H4>
      <L.Div _inner>
        <L.Button name="startTour" _warning onClick={() => setActiveStep('1')}>
          Start tour
        </L.Button>
        <L.Button
          name="startModalTour"
          _warning
          onClick={() => setActiveStep('8')}
        >
          Open Modal with tour element
        </L.Button>
        <L.Button _warning onClick={() => setOpen(true)}>
          Open Modal with tour element
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
          <br />
          <br />
          <L.Button
            _inner
            ref={ref5}
            style={{ marginLeft: '250px' }}
            onClick={() => console.log('Clicked 5!')}
          >
            Tour element 5
          </L.Button>
          <br />
          <br />
          <L.Button
            _inner
            ref={ref6}
            style={{ marginLeft: '250px' }}
            onClick={() => console.log('Clicked 6!')}
          >
            Tour element 6
          </L.Button>
          <br />
          <br />
          <L.Button
            _inner
            ref={ref7}
            style={{ marginLeft: '500px' }}
            onClick={() => console.log('Clicked 7!')}
          >
            Tour element 7
          </L.Button>
          <L.Modal
            isOpen={isOpen}
            onClose={() => {
              setOpen(false);
            }}
            size="md"
          >
            <L.ModalHeader>Modal header</L.ModalHeader>
            <L.ModalBody _myClassName>
              Test scroll to Tour element inside Modal
            </L.ModalBody>
            <L.ModalFooter>
              <L.Button onClick={() => setOpen(false)}>Cancel</L.Button>
              <div style={{height: '600px'}}></div>
              <L.Button
                _inner
                ref={ref8}
                onClick={() => console.log('Clicked 8!')}
              >
                Tour element 8
              </L.Button>
              <div style={{height: '200px'}}></div>
            </L.ModalFooter>
          </L.Modal>
        </L.Div>
        <L.Tour
          data={data}
          activeStepKey={activeStep}
          onChange={(ev) => setActiveStep(ev.component.value)}
          stepDelay={stepDelay}
        />
      </L.Div>
      <L.Button
        _warning
        name="stepDelay"
        onClick={() =>
          setStepDelay((stepDelay) => (isNil(stepDelay) ? 5000 : undefined))
        }
      >
        Set/remove stepDelay 5 sec
      </L.Button>
      <L.H4 _title>onClick Message</L.H4>
      <L.Div name="message">{message}</L.Div>
    </L.Div>
  );
};

Tour.displayName = 'Tour';
