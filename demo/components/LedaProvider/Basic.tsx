import * as React from 'react';
import * as L from '../../../leda';

export const Basic = (componentProps: any) => {
  return (
    <L.Div _box _inner _demoBg>
      <L.Leda>
        <L.Div>
          <L.Span
            _txtBold
            _txt-success
          >
            Hello world!
          </L.Span>
        </L.Div>
      </L.Leda>
    </L.Div>
  );
};
