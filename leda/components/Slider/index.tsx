import React from 'react';
import { isNumber, isNil } from 'lodash';
import { Div } from '../Div';
import { Span } from '../Span';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { SliderSrc } from '../../src/ReactSlider';
import {
  getClassNames, useTheme, bindFunctionalRef, useElement, useProps,
} from '../../utils';
import { LABELS } from './constants';
import { createAfterChangeHandler, createChangeHandler } from './handlers';
import { SliderLabels } from './SliderLabels';
import { SliderTooltip } from './SliderTooltip';
import {
  SliderProps, SliderRefCurrent, SliderValue,
} from './types';

// Слайдер взят здесь:
// https://github.com/mpowaga/react-slider#readme

// Количество ползунков зависит от того, что передано в value или defaultValue
// если передано число, то ползунок будет один
// если передан массив, то количество ползунков будет равно количеству элементов в массиве

// Компонент может использоваться как контроилруемый (через value, defaultValue не используется)
// и как неконтролируемый (начальное значение задаётся через defaultValue)

export const Slider = React.forwardRef((props: SliderProps, ref?: React.Ref<SliderRefCurrent>): React.ReactElement => {
  const {
    labelType = LABELS.MINMAX,
    hasTooltip = false,
    className,
    unitsRender,
    max = 100,
    min = 0,
    name,
    defaultValue,
    isDisabled,
    minRange,
    onChange,
    onMove,
    step,
    theme: themeProp,
    value: valueProp,
  } = useProps(props);

  const [valueState, setValueState] = React.useState<SliderValue>(defaultValue || 0);

  const value = isNil(valueProp) ? valueState : valueProp;

  const sliderRef = React.useRef<InstanceType<typeof SliderSrc> | null>(null);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.slider);

  const shouldRenderMinMaxLabels = labelType === LABELS.MINMAX;

  const shouldRenderCurrentLabel = labelType === LABELS.CURRENT && (
    (Array.isArray(value) && value.length === 1) // массив из одного элемента
      || isNumber(value) // или число
  );

  const shouldRender = shouldRenderCurrentLabel || shouldRenderMinMaxLabels;

  const handleChange = createChangeHandler({ onMove, setValueState, name });

  const handleAfterChange = createAfterChangeHandler({ name, onChange });

  const Units = useElement(
    'Units',
    Span,
    unitsRender,
    props,
    { value: valueState },
  );

  const wrapperClassNames = getClassNames(
    className,
    theme.wrapper,
  );

  return (
    <Div
      className={wrapperClassNames}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component.wrapper,
      }))}
    >
      <SliderSrc
        ref={sliderRef}
        className={theme.container}
        thumbClassName={theme.handle}
        trackClassName={theme.track}
        defaultValue={defaultValue}
        renderTrack={(elProps, elState) => {
          const isOneHandle = !Array.isArray(value) || value.length === 1;
          const isActive = isOneHandle ? elState.index === 0 : Array.isArray(value) && elState.index < value.length;
          return (
            <div {...elProps} className={getClassNames(theme.track, { [theme.trackActive]: isActive })} />
          );
        }}
        renderThumb={(elProps, elState) => (
          <div {...elProps}>
            <SliderTooltip
              shouldRender={hasTooltip}
              theme={theme}
              value={elState.valueNow}
              key={elState.index.toString()}
            />
          </div>
        )}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
        value={value}
        min={min}
        max={max}
        step={step}
        withTracks
        minDistance={minRange}
        disabled={isDisabled}
      />
      <SliderLabels
        shouldRender={shouldRender}
        type={labelType}
        theme={theme}
        min={min}
        max={max}
        value={value}
      >
        <Units />
      </SliderLabels>
    </Div>
  );
}) as React.FC<SliderProps>;

Slider.displayName = 'Slider';
