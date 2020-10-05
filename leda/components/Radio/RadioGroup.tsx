import React from 'react';
import { isFunction, isBoolean } from 'lodash';

import {
  bindFunctionalRef, getClassNames, useTheme, useElement, useProps,
} from '../../utils';
import { Div } from '../Div';
import { COMPONENTS_NAMESPACES } from '../../constants';
import {
  ChangeEvent, RadioGroupProps, RadioGroupRefCurrent, WrapperProps, RadioValue,
} from './types';
import { getValue, getFirstChildValue, isValidRadioButton } from './helpers';
import { useValidation } from '../Validation';
import { createResetHandler } from './handlers';

/**
 * RadioGroup component creates group of radio buttons.
 * Provides controlled mode only
 * @param {RadioGroupProps} props
 *
 * @returns {React.ReactElement}
 */
export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref?: React.Ref<RadioGroupRefCurrent>): React.ReactElement => {
  const {
    children,
    className,
    form,
    name,
    onChange,
    value: valueProp,
    wrapperRender,
    isDisabled,
  } = useProps(props);

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.radio);

  const defaultValue = getFirstChildValue(children);

  const [valueState, setValueState] = React.useState<RadioValue>(defaultValue);

  const value = getValue(valueProp, valueState);

  useValidation(props, {
    value,
  }, {
    reset: createResetHandler(props, defaultValue, setValueState),
  });

  const combinedClassNames = getClassNames(
    theme.wrapper,
    className,
  );

  /**
   * Function uses onChange callback from props in controlled mode
   * and uses state in uncontrolled mode
   * @param {ChangeEvent} ev - change event
   */
  const handleChange = React.useCallback((ev: ChangeEvent) => {
    if (isFunction(onChange)) return onChange(ev);

    return setValueState(ev.component.value);
  }, [onChange]);

  const Wrapper = useElement<RadioGroupProps, { value?: RadioValue }, WrapperProps>(
    'Wrapper',
    Div,
    wrapperRender,
    props,
    { value: valueState },
  );

  return (
    <Wrapper
      className={combinedClassNames}
      ref={ref && ((component: RadioGroupRefCurrent) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper ? component.wrapper : component,
      }))}
    >
      {React.Children.toArray(children).map((child) => {
        const validRadioButton = isValidRadioButton(child) ? child as React.ReactElement : null;
        if (validRadioButton) {
          return React.cloneElement(validRadioButton, {
            name,
            form,
            onChange: handleChange,
            isDisabled: isBoolean(isDisabled) ? isDisabled : validRadioButton.props.isDisabled,
            isChecked: validRadioButton.props.value === value,
            theme: { ...theme, ...validRadioButton.props.theme },
          });
        }
        return child;
      })}
    </Wrapper>
  );
}) as React.FC<RadioGroupProps>;

RadioGroup.displayName = 'RadioGroup';
