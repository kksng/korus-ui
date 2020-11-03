import * as React from 'react';
import { Div } from '~/components/Div';
import { MaskedInputBase } from '~/src/MaskedInputBase';
import { useElement } from '~/utils';
import { LedaContext } from '~/components/LedaProvider';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { CustomElements, MaskedInputProps, MaskedInputState } from './types';

export const useCustomElements = (props: MaskedInputProps, state: MaskedInputState): CustomElements => {
  const { wrapperRender, inputRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.maskedInput]: maskedRender } } = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || maskedRender.wrapperRender,
    props,
    state,
  );

  const Input = useElement(
    'Input',
    MaskedInputBase,
    inputRender || maskedRender.inputRender,
    props,
    state,
  );

  return {
    Wrapper,
    Input,
  };
};
