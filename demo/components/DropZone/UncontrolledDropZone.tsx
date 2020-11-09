import * as React from 'react';
import * as L from '../../../leda';

const Accepted = ({ onChange, value }: { onChange?: Function, value: { acceptedFiles: File[], rejectedFiles: File[]}}) => (
  <L.Ul _listItem>
    {value.acceptedFiles.map((file: File) => (
      <L.Li key={file.name}>
        <L.Span _txtSuccess>{file.name}</L.Span>
        {' '}
        <L.Tooltip title="Скачать?">
          <L.A href={URL.createObjectURL(new Blob([file], { type: file.type }))} download={file.name}>
            <L.I _uiconDocCheck />
          </L.A>
        </L.Tooltip>
        <L.Tooltip title="Удолить?">
          <L.A>
            <L.I
              _uiconDocOverdue
              onClick={(ev: any) => (onChange ? onChange(value.acceptedFiles, value.rejectedFiles, ev, file) : undefined)}
            />
          </L.A>
        </L.Tooltip>
      </L.Li>
    ))}
  </L.Ul>
);

interface UncontrolledDropZoneProps {
  title?: string,
}

export const UncontrolledDropZone = (props: UncontrolledDropZoneProps) => (
  <L.Div _box _inner>
    <L.DropZone
      allowedFiles=".jpg, .gif, .png"
      maxFilesNumber={2}
      infoRender={({ Element, elementProps, componentProps: { maxFilesNumber } }: any) => (
        <Element {...elementProps}>
          Кастомный description для компонента. Не более {maxFilesNumber} файлов.
        </Element>
      )}
      maxFileSize={1000000}
      maxFileNameLength={25}
      uploadButtonRender={({ elementProps }: any) => <L.Button {...elementProps} _warning>Загрузить!</L.Button>}
      acceptedFilesRender={({ componentState, elementProps }: any) => <Accepted {...elementProps} value={componentState} />}
    />
  </L.Div>
);
