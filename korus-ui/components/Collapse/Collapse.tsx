import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useTheme } from '../../utils';
import { createCollapseHandlers } from './handlers';
import { CollapseContext } from './CollapseContext';
import { Panel } from './CollapsePanel';
import { Body } from './CollapseBody';
import { Heading } from './CollapseHeading';
import { CollapseComponent, CollapseProps } from './types';

export const Collapse: CollapseComponent = (props: CollapseProps): React.ReactElement => {
  const { children, theme: themeProp } = props;

  const { isAccordion } = props;

  const [activePanelKey, setActivePanelKey] = React.useState<string | string[] | null>(isAccordion ? null : []);

  const handlers = createCollapseHandlers(props, activePanelKey, setActivePanelKey);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.collapse);

  const context = {
    activePanelKey: props.activePanelKey || activePanelKey,
    onSelect: handlers.handleSelect,
    theme,
  };

  return (
    <CollapseContext.Provider value={context}>
      {children}
    </CollapseContext.Provider>
  );
};

Collapse.Panel = Panel;
Collapse.Body = Body;
Collapse.Heading = Heading;
