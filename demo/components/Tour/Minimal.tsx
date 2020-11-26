import * as React from 'react';
import * as L from '../../../leda';
import { useElementRef } from '../../../leda/utils';
import { StoryProps } from '../../types';

const getData = (elements: (HTMLElement | null)[]): L.TourTypes.TourStepItem[] => [
  {
    stepKey: '1',
    content: (props) => (
      <L.Div _inner>
        <L.H1>Title</L.H1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        <L.Ul _list-h>
          <L.Li>
            <L.Button onClick={props.stopTour}>
              Close
            </L.Button>
          </L.Li>
        </L.Ul>
      </L.Div>
    ),
    position: 'right',
    element: elements[0],
  },
];

export const Minimal = (StoryProps: StoryProps): React.ReactElement => {
  const [element, ref] = useElementRef();
  const [activeStep, setActiveStep] = React.useState<string | number | null>(null);

  const data = getData([element]);

  return (
    <L.Div>
      <L.Div _inner>
        <L.Button _warning onClick={() => setActiveStep('1')}>
          Start
        </L.Button>
        <br />
        <br />
        <L.Div _inner>
          <L.Button _inner ref={ref} onClick={() => setActiveStep('2')}>
            First step
          </L.Button>
        </L.Div>
        <L.Tour
          data={data}
          onChange={(ev) => setActiveStep(ev.component.value)}
        />
      </L.Div>
    </L.Div>
  );
};

Minimal.displayName = 'Tour';
