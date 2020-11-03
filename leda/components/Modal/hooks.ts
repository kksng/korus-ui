import * as React from 'react';
import { useElement } from '~/utils';
import { A } from '~/components/A';
import { Div } from '~/components/Div';
import { LedaContext } from '~/components/LedaProvider';
import { CustomElements, ModalWindowProps } from './types';

export const useCustomElements = (props: ModalWindowProps): CustomElements => {
  const {
    wrapperRender, iconRender,
  } = props;

  const { renders: { modal: modalRenders } } = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || modalRenders.wrapperRender,
    props,
  );

  const Icon = useElement(
    'Icon',
    A,
    iconRender || modalRenders.iconRender,
    props,
  );

  return {
    Wrapper,
    Icon,
  };
};
