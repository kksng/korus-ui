import * as React from 'react';
import * as L from '../../../korus-ui';

export interface PropsProps {
  children: React.ReactElement | React.ReactElement[],
}

export const Props = (props: PropsProps): React.ReactElement => {
  const { children } = props;

  return (
    <L.Div _table _middle>
      <L.Table>
        <L.ColGroup>
          <L.Col style={{ width: '25%' }} />
          <L.Col style={{ width: '25%' }} />
          <L.Col style={{ width: '50%' }} />
        </L.ColGroup>
        <L.THead _tableHeader>
          <L.Tr>
            <L.Th>NAME</L.Th>
            <L.Th>TYPE</L.Th>
            <L.Th>DESCRIPTION</L.Th>
          </L.Tr>
        </L.THead>
        <L.TBody>
          {children}
        </L.TBody>
      </L.Table>
    </L.Div>
  );
};

Props.displayName = 'Props';
