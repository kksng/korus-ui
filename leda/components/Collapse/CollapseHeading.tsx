import React from 'react';
import { useCollapseHeading, useIcon } from './helpers';
import { bindFunctionalRef, getClassNames, useProps } from '../../utils';
import { handleHeadingClick } from './handlers';
import { CollapsePanelContext } from './CollapseContext';
import { HeadingProps, HeadingRefCurrent } from './types';

export const Heading = React.forwardRef((props: HeadingProps, ref?: React.Ref<HeadingRefCurrent>): React.ReactElement => {
  const { children, className } = useProps(props);

  const context = React.useContext(CollapsePanelContext);

  const { isExpanded, theme, isDisabled } = context;

  const HeadingWrapper = useCollapseHeading(props);

  const Icon = useIcon(props);

  const wrapperClassNames = getClassNames(
    theme.headingWrapper,
    className,
    {
      [theme.headingDisabled]: isDisabled,
    },
  );

  const iconClassNames = getClassNames(
    theme.headingIcon,
    { [theme.headingIconOpen]: isExpanded },
  );

  return (
    <HeadingWrapper
      // @ts-ignore
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper ? component.wrapper : component,
      }))}
      onClick={handleHeadingClick(
        props,
        context,
      )}
      className={wrapperClassNames}
    >
      {children}
      <Icon
        className={iconClassNames}
        isExpanded={isExpanded}
      />
    </HeadingWrapper>
  );
}) as React.FC<HeadingProps>;

Heading.displayName = 'Collapse.Heading';
