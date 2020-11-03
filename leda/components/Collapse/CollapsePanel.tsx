import * as React from 'react';

import { useProps } from '~/utils';
import { createPanelHandlers } from './handlers';
import { usePanelWrapper } from './helpers';
import { CollapseContext, CollapsePanelContext } from './CollapseContext';
import { PanelProps } from './types';

export const Panel: React.FC<PanelProps> = (props: PanelProps): React.ReactElement => {
  const {
    panelKey,
    children,
    className,
    name,
    isDisabled,
  } = useProps(props);

  const [isClicked, setClicked] = React.useState(false);

  const parentContext = React.useContext(CollapseContext);

  const handlers = createPanelHandlers(setClicked);

  const isExpanded = Array.isArray(parentContext.activePanelKey)
    ? parentContext.activePanelKey.includes(panelKey)
    : panelKey === parentContext.activePanelKey;

  const context = {
    panelKey,
    isClicked,
    isDisabled,
    name,
    isExpanded,
    ...handlers,
    ...parentContext,
  };

  const PanelWrapper = usePanelWrapper(props, { isClicked });

  return (
    <CollapsePanelContext.Provider value={context}>
      <PanelWrapper className={className}>
        {children}
      </PanelWrapper>
    </CollapsePanelContext.Provider>
  );
};

Panel.displayName = 'Collapse.Panel';
