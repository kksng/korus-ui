import React from 'react';
import * as L from '../../../leda';

export const Minimal = (props: any): React.ReactElement => {
  return (
    <L.Div>
      <L.H4 _title>Collapsible</L.H4>
      <L.Collapsible isOpen={false}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </L.Collapsible>
    </L.Div>
  );
};
