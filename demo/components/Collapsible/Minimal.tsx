import React from 'react';
import * as L from '../../../leda';

export const Minimal = (props: any): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <L.Div>
      <L.H4 _title>Collapsible</L.H4>
      <br />

      <L.Button onClick={() => setIsOpen(!isOpen)} >
        Toggle collapsible
      </L.Button>

      <L.Collapsible isOpen={isOpen} _collapse-heading-wrapper>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </L.Collapsible>
    </L.Div>
  );
};
