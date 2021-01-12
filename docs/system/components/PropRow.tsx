import * as React from 'react';
import * as L from '../../../korus-ui';

export interface PropRowProps {
  name: React.ReactNode,
  type: React.ReactNode,
  children: React.ReactNode,
  isRequired?: boolean,
}


export const PropRow = (props: PropRowProps): React.ReactElement => {
  const {
    name, isRequired, type, children,
  } = props;

  return (
    <L.Tr _txtBold={isRequired}>
      <L.Td>
        {name}
        {isRequired && (<sup className="txt-danger">required</sup>)}
      </L.Td>
      <L.Td>
        {type}
      </L.Td>
      <L.Td>
        {children}
      </L.Td>
    </L.Tr>
  );
};

PropRow.displayName = 'PropRow';
