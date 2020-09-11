import React from 'react';
import {
  bindFunctionalRef, getClassNames, useElement, useProps, useTheme,
} from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { generateId } from '../../utils/generateId';
import { Div } from '../Div';
import { PropsFromParent, RadioButtonProps, RadioGroupRefCurrent } from './types';
import { globalDefaultTheme, LedaContext } from '../LedaProvider';
import { getWrapperRef } from '../../utils/getWrapperRef';

export const RadioButton = React.forwardRef((props: RadioButtonProps, ref?: React.Ref<RadioGroupRefCurrent>): React.ReactElement => {
  const {
    children,
    className,
    isChecked,
    id = generateId(),
    isDisabled,
    // theme = globalDefaultTheme.radio,
    wrapperRender,
    inputRender,
    onChange,
    value,
    form,
    name,
    ...restProps
  } = useProps(props as RadioButtonProps & PropsFromParent);

  const theme = useTheme(props.theme, COMPONENTS_NAMESPACES.radio);

  const { renders: { [COMPONENTS_NAMESPACES.radio]: radioRenders } } = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || radioRenders.wrapperRender,
    props,
  );

  const Input = useElement(
    'Input',
    'input' as unknown as React.FC<React.InputHTMLAttributes<HTMLInputElement>>,
    inputRender || radioRenders.inputRender,
    props,
  );

  const handleChange = React.useCallback((ev) => {
    const customEvent = {
      ...ev,
      component: {
        value,
        name,
      },
    };

    return onChange(customEvent);
  }, [onChange, value, name]);

  const wrapperClassNames = getClassNames(
    theme.item,
    className,
  );

  const labelClassNames = getClassNames(
    theme.label,
    className,
  );

  return (
    <Wrapper
      {...restProps}
      className={wrapperClassNames}
      ref={ref && ((component: RadioGroupRefCurrent | HTMLElement | null) => {
        const wrapperRef = getWrapperRef<RadioGroupRefCurrent>(component);
        bindFunctionalRef(component, ref, component && {
          wrapper: wrapperRef,
          input: wrapperRef ? wrapperRef.firstElementChild : null,
          label: wrapperRef ? wrapperRef.lastElementChild : null,
        });
      })}
    >
      <Input
        checked={isChecked}
        className={theme.input}
        disabled={isDisabled}
        id={id}
        value={value}
        type="radio"
        onChange={handleChange}
        form={form}
      />
      <label
        className={labelClassNames}
        htmlFor={id}
        title={props.title}
      >
        {children}
      </label>
    </Wrapper>
  );
}) as React.FC<RadioButtonProps>;

RadioButton.displayName = 'RadioButton';
