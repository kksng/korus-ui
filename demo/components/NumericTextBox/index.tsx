import * as React from 'react';
import { Story } from '../Story';
import { BasicUsage } from './BasicUsage';
import { CommaSeparator } from './CommaSeparator';
import { TrailingZeros } from './TrailingZeros';
import { DynamicMinMaxValidation } from './DynamicMinMaxValidation';

export const NumericTextBox = () => (
  <Story title="NumericTextBox">
    <BasicUsage title="Простейшее использование" />
    <CommaSeparator title="Запятая в качестве разделителя" />
    <TrailingZeros title="Удаление нулей на конце дроби" />
    <DynamicMinMaxValidation title="Динамическая валидация по min/max"/>
  </Story>
);
