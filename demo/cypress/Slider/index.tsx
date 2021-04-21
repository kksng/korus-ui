/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../korus-ui';

export const Slider = (): React.ReactElement => {
  const [firstSliderValue, setFirstSliderValue] = React.useState<number | number[] | null | undefined>(10);
  const [secondSliderValue, setSecondSliderValue] = React.useState<number | number[] | null | undefined>([2, 10, 15]);

  return (
    <L.Div _demoStory>
      <L.H4 _title>Slider</L.H4>
      <br />
      <L.Div>Basic</L.Div>
      <L.Slider
        _basic
        max={20}
        value={firstSliderValue}
        onChange={(ev): void => {
          console.log('Slider onChange', ev);
          setFirstSliderValue(ev.component.value);
        }}
        _width50
        labelType="current"
        unitsRender={(): string => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(ev): void => {
          console.log('Slider onMove', ev);
          setFirstSliderValue(ev.component.value);
        }}
      />
      <br />
      <br />
      <L.Button
        name="reset"
        _warning
        onClick={(): void => {
          setFirstSliderValue(10);
        }}
      >
        Обновить value слайдера
      </L.Button>{' '}
      <br />
      <br />
      <br />
      <L.Div>Disabled</L.Div>
      <L.Slider
        _disable
        isDisabled
        max={20}
        value={firstSliderValue}
        onChange={(ev): void => {
          console.log('Slider onChange', ev);
          setFirstSliderValue(ev.component.value);
        }}
        _width50
        labelType="current"
        unitsRender={(): string => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(ev): void => {
          console.log('Slider onMove', ev);
          setFirstSliderValue(ev.component.value);
        }}
      />
      <br />
      <br />
      <br />
      <L.Div>Измененный тип value</L.Div>
      <L.Slider
        _multi
        max={20}
        value={secondSliderValue}
        onChange={(ev): void => {
          console.log('Slider onChange', ev);
          setSecondSliderValue(ev.component.value);
        }}
        _width50
        labelType="current"
        unitsRender={(): string => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(ev): void => {
          console.log('Slider onMove', ev);
          setSecondSliderValue(ev.component.value);
        }}
      />
      <br />
      <br />
      <br />
      <L.Div>Slider with default value</L.Div>
      <L.Slider
        _default
        labelType="current"
        defaultValue={40}
        hasTooltip
        _width40
      />
      <br />
      <br />
      <br />
      <L.Div>Slider with minmax label type</L.Div>
      <L.Slider
        _minmaxLabelType
        min={10}
        max={90}
        labelType="minmax"
        defaultValue={40}
        hasTooltip
        _width40
      />
    </L.Div>
  );
};
