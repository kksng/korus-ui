import * as React from 'react';
import * as L from '@korus/leda';
import { RenderEvent } from '../../../propsHelpers';

/* eslint-disable max-len, react/no-unescaped-entities */
export const propsDesc = [
  {
    name: 'allowedFiles',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Разрешенные типы файлов: расширения или
          {' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank">
            mime-типы
          </a>
          {' '}
          через запятую: <i>.png, image/jpeg</i>.
        </L.P>
        <L.P>
          <b>allowedFiles</b> и <b>forbiddenFiles</b> нельзя использовать вместе.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'forbiddenFiles',
    type: 'string',
    required: false,
    description: (
      <L.Div>
        <L.P>
          Запрещённые типы файлов: расширения или
          {' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types" target="_blank">
            mime-типы
          </a>
          {' '}
          через запятую: <i>.png, image/jpeg</i>.
        </L.P>
        <L.P>
          <b>allowedFiles</b> и <b>forbiddenFiles</b> нельзя использовать вместе.
        </L.P>
      </L.Div>
    ),
  },
  {
    name: 'infoRender',
    type: (
      <L.Span>
        <RenderEvent /> => React.ReactNode
      </L.Span>
    ),
    required: false,
    description: 'Кастомизация текста "Загрузить/Загрузка...".',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    required: false,
    description: 'Состояние загрузки. В состоянии загрузки компонент не реагирует на клики.',
  },
  {
    name: 'maxFileSize',
    type: 'number',
    required: false,
    description: 'Максимальный размер файла, в байтах.',
  },
  {
    name: 'minFileSize',
    type: 'number',
    required: false,
    description: 'Минимальный размер файла, в байтах.',
  },
  {
    name: 'onChange',
    type: (
      <L.Span>(event:
        {' '}
        <L.Tooltip
          position="bottom"
          title={(
            <pre>
              {`
interface ChangeEvent {
  component: {
    error: FileUploadError | null,
    name?: string,
    value: File | null,
  },
}              `}
            </pre>
          )}
        >
          <L.Span _txt-success>L.FileUploadTypes.ChangeEvent</L.Span>
        </L.Tooltip>
        ) => void
      </L.Span>
    ),
    required: false,
    description: 'Обработчик события изменения значения компонента.',
  },
];
