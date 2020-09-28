import React from 'react';
import { Ul } from '../Ul';
import { Li } from '../Li';
import { A } from '../A';
import { Span } from '../Span';
import { Tooltip } from '../Tooltip';
import { globalDefaultTheme } from '../LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DropZoneFilesProps, FileType } from './types';

const createDownloadLink = (file: FileType, theme: typeof globalDefaultTheme[typeof COMPONENTS_NAMESPACES.dropZone]): React.ReactElement | null => {
  if (file instanceof File) {
    const isIE = window.navigator && window.navigator.msSaveOrOpenBlob;

    const linkProps = isIE
      ? { onClick: () => window.navigator.msSaveOrOpenBlob(file, file.name) }
      : { href: URL.createObjectURL(file), download: file.name };

    return (
      <A theme={theme.fileDownloadLink} {...linkProps}>
        {file.name}
      </A>
    );
  }

  if (file.link) {
    return (
      <A theme={theme.fileDownloadLink} href={file.link} download={file.name}>
        {file.name}
      </A>
    );
  }

  return null;
};

const renderFiles = ({
  files, theme, onChange, value,
}: DropZoneFilesProps): React.ReactElement[] => files.map((file, index): React.ReactElement => {
  const downloadLink = createDownloadLink(file, theme);

  return (
    <Li key={`${file.name}-${index.toString()}`}>
      <Tooltip title="Удалить" position="top">
        <A
          _pointer
          onClick={(ev: React.MouseEvent<HTMLAnchorElement>): void => onChange(value.acceptedFiles, value.rejectedFiles, ev, file)}
        >
          <i className={theme.fileDeleteIcon} />
        </A>
      </Tooltip>
      {downloadLink ? (
        <Tooltip title="Скачать" position="top">
          {downloadLink}
        </Tooltip>
      ) : (
        <Span>
          {file.name}
        </Span>
      )}
    </Li>
  );
});

export const DropZoneFiles = (props: DropZoneFilesProps): React.ReactElement => (props.shouldRender && (
  <Ul>
    {renderFiles(props)}
  </Ul>
)) as React.ReactElement;
