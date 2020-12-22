/* eslint-disable no-alert, no-console */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Slider = () => {
  const [firstSliderValue, setFirstSliderValue] = React.useState<
    number | number[] | null | undefined
  >(10);
  const [secondSliderValue, setSecondSliderValue] = React.useState<
    number | number[] | null | undefined
  >([2, 10, 15]);
  return (
    <L.Div _demoStory>
      <L.H4 _title>Slider</L.H4>
      <br />
      <L.Div>Basic</L.Div>
      <L.Slider
        max={20}
        value={firstSliderValue}
        onChange={(ev) => {
          console.log('Slider onChange', ev);
          setFirstSliderValue(ev.component.value);
        }}
        _width50
        labelType="current"
        unitsRender={() => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(ev) => {
          console.log('Slider onMove', ev);
          setFirstSliderValue(ev.component.value);
        }}
      />
      <br />
      <br />
      <L.Button
        _warning
        onClick={() => {
          setFirstSliderValue(10);
        }}
      >
        Обновить value слайдера
      </L.Button>{' '}
      <br />
      <br />
      <br />
      <L.Div>Disable</L.Div>
      <L.Slider
        max={20}
        value={firstSliderValue}
        onChange={(ev) => {
          console.log('Slider onChange', ev);
          setFirstSliderValue(ev.component.value);
        }}
        _width50
        labelType="current"
        unitsRender={() => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(ev) => {
          console.log('Slider onMove', ev);
          setFirstSliderValue(ev.component.value);
        }}
      />
      <br />
      <br />
      <br />
      <L.Div>Измененный тип value</L.Div>
      <L.Slider
        max={20}
        value={secondSliderValue}
        onChange={(ev) => {
          console.log('Slider onChange', ev);
          setSecondSliderValue(ev.component.value);
        }}
        _width50
        labelType="current"
        unitsRender={() => 'млн.руб.'}
        name="Slider 1"
        hasTooltip
        onMove={(ev) => {
          console.log('Slider onMove', ev);
          setSecondSliderValue(ev.component.value);
        }}
      />
    </L.Div>
  );
};
