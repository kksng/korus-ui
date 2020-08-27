import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { ControlledDate } from './ControlledDate';
import { DisabledDates } from './DisabledDates';
import { MinMax } from './MinMax';
import { Customization } from './Customization';
import { Positioned } from './Positioned';
import { Controlled } from './Controlled';

export const DatePicker = () => (
  <Story title="DatePicker">
    <BasicUsage title="Простейшее использование" />
    <Controlled title="Контролируемый компонент" />
    <ControlledDate title="Контролирование только date" />
    <MinMax title="Ограничение даты min-max" />
    <Customization title="Кастомизация" />
    <DisabledDates title="Disabled dates" />
    <Positioned title="Позиционирование" />
  </Story>
);
