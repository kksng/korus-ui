import { CustomElements, VStepperItemProps } from './types';
import { useElement } from '../../utils';
import { Div } from '../Div';

export const useCustomElements = (props: VStepperItemProps, state: { isOpen: boolean }): CustomElements => {
  const {
    bodyRender,
    contentRender,
    headingRender,
    iconRender,
    statusRender,
    wrapperRender,
  } = props;

  const Icon = useElement(
    'Icon',
    Div,
    iconRender,
    props,
    state,
  );

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    state,
  );

  const Content = useElement(
    'Content',
    Div,
    contentRender,
    props,
    state,
  );

  const Status = useElement(
    'Status',
    Div,
    statusRender,
    props,
    state,
  );

  const Heading = useElement(
    'Heading',
    Div,
    headingRender,
    props,
    state,
  );

  const Body = useElement(
    'Body',
    Div,
    bodyRender,
    props,
    state,
  );

  return {
    Body,
    Content,
    Heading,
    Icon,
    Status,
    Wrapper,
  };
};
