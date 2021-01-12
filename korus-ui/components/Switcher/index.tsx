import * as React from 'react';
import { isNil } from 'lodash';
import {
  bindFunctionalRef, getClassNames, useTheme, useProps,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { createClickHandler } from './handlers';
import { useCustomElements } from './hooks';
import { SwitcherProps, SwitcherRefCurrent } from './types';

export const Switcher = React.forwardRef((props: SwitcherProps, ref: React.Ref<SwitcherRefCurrent>): React.ReactElement => {
  const {
    className,
    children,
    isDisabled,
    name,
    value: valueProp,
    onClick,
    onChange,
    theme: themeProp,
    wrapperRender,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.switcher);

  const [stateValue, setStateValue] = React.useState(false);

  const handleClick = createClickHandler(props, stateValue, setStateValue);

  const value = !isNil(valueProp) ? valueProp : stateValue;

  const switcherClassName = getClassNames(
    [theme.wrapper],
    {
      active: value,
      disabled: isDisabled,
    },
  );

  const {
    Wrapper,
    Label,
    Base,
    Icon,
  } = useCustomElements(props, { value: stateValue });

  return (
    <Wrapper
      className={className}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
      {...restProps}
    >
      <Base
        className={switcherClassName}
        onClick={handleClick}
      >
        <Icon className={theme.handle} />
      </Base>
      <Label onClick={handleClick} className={theme.label}>{children}</Label>
    </Wrapper>
  );
}) as React.FC<SwitcherProps>;

Switcher.displayName = 'Switcher';
