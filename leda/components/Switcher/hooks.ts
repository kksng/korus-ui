import * as React from 'react';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { useElement } from '~/utils';
import { Div } from '~/components/Div';
import { LedaContext } from '~/components/LedaProvider';
import { Span } from '~/components/Span';
import { CustomElements, SwitcherProps, SwitcherState } from './types';

export const useCustomElements = (props: SwitcherProps, state: SwitcherState): CustomElements => {
  const { renders: { [COMPONENTS_NAMESPACES.switcher]: switcherRenders } } = React.useContext(LedaContext);

  const {
    wrapperRender,
    labelRender,
    baseRender,
    iconRender,
  } = props;

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || switcherRenders.wrapperRender,
    props,
    state,
  );

  const Label = useElement(
    'Label',
    Span,
    labelRender || switcherRenders.labelRender,
    props,
    state,
  );

  const Base = useElement(
    'Base',
    Div,
    baseRender || switcherRenders.baseRender,
    props,
    state,
  );

  const Icon = useElement(
    'Icon',
    Div,
    iconRender || switcherRenders.iconRender,
    props,
    state,
  );

  return {
    Wrapper,
    Label,
    Base,
    Icon,
  };
};
