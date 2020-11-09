import * as React from 'react';
import { SomeObject } from '../../../leda/commonTypes';
import * as L from '../../../leda';

export const Customization = (args: SomeObject): React.ReactElement => {
  return (
    <L.Div _box _inner _demoBg>
      <L.DateRange
        name="DateRange"
        placeholder={['', 'до']}
        inputsRender={[({Element, elementProps}) => {
          return (
            <>
              <L.Span _margin-left _txt-warning>from</L.Span>
              <Element {...elementProps} />
            </>
          );
        }, null]}
      />
    </L.Div>
  );
};
