import * as React from 'react';
import { useElement } from '~/utils';
import { Div } from '~/components/Div';
import { LedaContext } from '~/components/LedaProvider';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { CustomElements, TextareaProps } from './types';

export const useCustomElements = (props: TextareaProps): CustomElements => {
  const { wrapperRender } = props;

  const context = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.textarea].wrapperRender,
    props,
  );

  return {
    Wrapper,
  };
};
