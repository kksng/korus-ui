import React from 'react';
import { useElement } from '../../utils';
import { Div } from '../Div';
import { Span } from '../Span';
import {
  HeadingProps,
  BodyProps,
  BodyWrapperProps,
  HeadingWrapperProps,
  IconProps,
  PanelProps,
  PanelWrapperProps,
} from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { LedaContext } from '../LedaProvider';

const defaultPanelWrapper = ({ children }: React.PropsWithChildren<{}>) => <>{children}</>;

export const usePanelWrapper = (props: PanelProps, state: { isClicked: boolean }): React.FC<PanelWrapperProps> => {
  const { wrapperRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapsePanel]: collapsePanelRenders } } = React.useContext(LedaContext);

  return useElement(
    'Wrapper',
    defaultPanelWrapper,
    wrapperRender || collapsePanelRenders.wrapperRender,
    props,
    state,
  );
};

export const useBodyWrapper = (props: BodyProps): React.FC<BodyWrapperProps> => {
  const { wrapperRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapseBody]: collapseBodyRenders } } = React.useContext(LedaContext);

  return useElement<BodyProps, {}, BodyWrapperProps>(
    'Wrapper',
    Div,
    wrapperRender || collapseBodyRenders.wrapperRender,
    props,
  );
};

const defaultIcon = ({ isExpanded, ...restProps }: IconProps): React.ReactElement => <Span {...restProps} />;

export const useIcon = (props: HeadingProps): React.FC<IconProps> => {
  const { iconRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapseHeading]: collapseHeadingRenders } } = React.useContext(LedaContext);

  return useElement<HeadingProps, {}, IconProps>(
    'Icon',
    defaultIcon,
    iconRender || collapseHeadingRenders.iconRender,
    props,
  );
};

export const useCollapseHeading = (props: HeadingProps): React.FC<HeadingWrapperProps> => {
  const { wrapperRender } = props;

  const { renders: { [COMPONENTS_NAMESPACES.collapseHeading]: collapseHeadingRenders } } = React.useContext(LedaContext);

  return useElement<HeadingProps, {}, HeadingWrapperProps>(
    'Wrapper',
    Div,
    wrapperRender || collapseHeadingRenders.wrapperRender,
    props,
  );
};
