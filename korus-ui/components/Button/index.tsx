import React from 'react';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  getClassNames, bindFunctionalRef, useTheme, useProps,
} from '../../utils';
import { createClickHandler } from './handlers';
import { ButtonProps, ButtonRefCurrent } from './types';

// как настраивать кнопку для валидации ввода: ../Validation/validation.md
export const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<ButtonRefCurrent>): React.ReactElement | null => {
  const {
    children,
    className,
    isDisabled,
    isLoading,
    form,
    onValidationFail,
    scrollDelay,
    scrollOffset,
    shouldRender,
    shouldScrollToInvalidFields,
    shouldValidateUnmounted,
    theme: themeProp,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.button);

  if (shouldRender === false) return null;

  const { disabled, loading, wrapper } = theme;

  const handleClick = createClickHandler(props);

  const combinedClassNames = getClassNames(
    wrapper,
    className,
    { [disabled]: isDisabled },
    { [loading]: isLoading },
  );

  return (
    <button
      type="button"
      {...restProps}
      className={combinedClassNames}
      onClick={handleClick}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
    >
      {children}
    </button>
  );
}) as React.FC<ButtonProps>;

Button.displayName = 'Button';
