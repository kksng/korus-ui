// @flow
import React, { useCallback } from 'react';
import * as L from '@korus/leda';
import {
  LiveEditor, LiveError, LivePreview, LiveProvider,
} from 'react-live';
import { editorTheme } from '../themes';

type LiveDemoProps = {
  isDemoOpen: boolean,
  setDemoOpen: ((boolean) => boolean | boolean) => void,
  liveDemo?: string,
}

export const LiveDemo = ({ isDemoOpen, setDemoOpen, liveDemo }: LiveDemoProps): React$Node => {
  const toggleDemo = useCallback(() => setDemoOpen(prevValue => !prevValue), [setDemoOpen]);

  return !!liveDemo && (
    <React.Fragment>
      <L.H4 _title _pointer>Live Example</L.H4>
      <L.Collapsible isOpen={isDemoOpen}>
        <L.Div _live-style>
          <LiveProvider code={liveDemo} scope={{ L }} theme={editorTheme} noInline>
            <LivePreview />
            <LiveError />
            <br />
            <br />
            <L.Div _editor>
              <LiveEditor />
            </L.Div>
          </LiveProvider>
        </L.Div>
        <br />
      </L.Collapsible>
      <L.Div txtGray onClick={toggleDemo} pointer>
        <L.I _pointer _icon-20 _i-chevron-up={isDemoOpen} _i-chevron-down={!isDemoOpen} />
        {isDemoOpen ? 'скрыть' : 'показать'}
      </L.Div>
      <L.Div _clear />
      <br />
    </React.Fragment>
  );
};
