import React from 'react';
import * as L from '../../../korus-ui';

export const Basic = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Collapsible</L.H4>
      <br />

      <L.Button onClick={() => setIsOpen(!isOpen)} >
        Toggle collapsible
      </L.Button>

      <L.Collapsible isOpen={isOpen} _collapse-heading-wrapper>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </L.Collapsible>
    </L.Div>
  );
};
