import * as React from 'react';
import * as L from '../../../../korus-ui';

export const Label = ({ children }: { children: string }) => (
    <L.Span _width15 style={{ display: 'inline-block', marginRight: '10px' }}>
      {children}
    </L.Span>
  );