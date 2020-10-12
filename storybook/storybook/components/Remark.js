// @flow
import * as L from '@korus/leda';
import * as React from 'react';

type RemarkProps = {
  children: React.Node,
};

export const Remark = ({ children }: RemarkProps) => (
  <L.P _remark>
    <br />
    <L.H4><b>Примечание</b></L.H4>
    <br />
    {children}
  </L.P>
);
