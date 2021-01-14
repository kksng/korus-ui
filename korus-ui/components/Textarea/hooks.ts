import * as React from 'react';
import { CustomElements, TextareaProps } from './types';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';

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
