import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const StickyPanel = () => {
  const [isFull, setIsFull] = React.useState(true);

  return (
    <L.Div _demoStory _width50={!isFull} id="stickyTest">
      <L.H4 _title>StickyPanel</L.H4>
      <L.Switcher onChange={() => setIsFull(!isFull)} value={isFull} />
      <textarea
        placeholder="Можно растягивать по высоте, offsetTop - 200"
        style={{
          width: '100%',
          minWidth: '100%',
          maxWidth: '100%',
          height: '1000px',
        }}
      />
      <L.StickyPanel offsetTop={200}>
        <L.Div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <L.Button
            id="success"
            _success
            onClick={(ev: React.MouseEvent<HTMLButtonElement>) => {
              ev.preventDefault();
              alert('Clicked!');
            }}
          >
            Button 1
          </L.Button>
          <L.Button>Button 2</L.Button>
          <L.Button>Button 3</L.Button>
          <L.Button>Button 4</L.Button>
        </L.Div>
      </L.StickyPanel>
    </L.Div>
  );
};
