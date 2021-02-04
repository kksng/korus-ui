import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'currentStepProgress',
    type: 'number',
    required: false,
    description: 'Процент завершенности текущего шага',
  },
  {
    name: 'data',
    type: (  
      <L.Span>
        <L.Tooltip title={(
          <pre>{`
{[x: string]: unknown}
          `}
          </pre>
        )}
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        {'[] | string[]'}
      </L.Span>  
    ),
    required: true,
    description: 'Массив объектов или строк, которые представляют собой шаги',
  },
  {
    name: 'itemRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация шагов компонента',
  },
  {
    name: 'textField',
    type: 'string',
    required: false,
    description: 'Атрибут из которого извлекается текст для лейбла, обязателен, если в data массив объектов',
  },
  {
    name: 'theme',
    type: (
      <L.Tooltip title={(
        <pre>{`
{
  label:                    'bottom',
  wizardItemActive:         'active',
  wizardItemFirst:          'first',
  wizardItemLast:           'last',
  wizardItemProgress:       'progress',
  wizardItemSuccess:        'success',
  wizardLine:               'line',
  wizardLineProgress:       'progress-line',
  wizardStep:               'step',
  wrapper:                  'wizard',
}
        `}
        </pre>
      )}
      >
        <L.Span _txt-success>DefaultWizardTheme</L.Span>
      </L.Tooltip>
    ),
    required: false,
    description: 'Тема',
  },
  {
    name: 'value',
    type: (  
      <L.Span>
        <L.Tooltip title={(
          <pre>{`
{[x: string]: unknown}
          `}
          </pre>
        )}
        >
          <L.Span _txt-success>DataObject</L.Span>
        </L.Tooltip>
        {' | string'}
      </L.Span>  
    ),
    required: true,
    description: 'Текущий шаг',
  },
];
