import React from 'react';
import { Span } from '~/components/Span';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { getClassNames } from '~/utils';
import { Ul } from '~/components/Ul';
import { Li } from '~/components/Li';
import { A } from '~/components/A';
import { Tooltip } from '~/components/Tooltip';
import { globalDefaultTheme } from '~/components/LedaProvider';
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
  files, theme, onChange, value, isDisabled,
}: DropZoneFilesProps): React.ReactElement[] => files.map((file, index): React.ReactElement => {
  const downloadLink = createDownloadLink(file, theme);

  const deleteIconClassNames = getClassNames(
    theme.fileDeleteIconWrapper,
    { [theme.disabled]: isDisabled },
  );

  return (
    <Li key={`${file.name}-${index.toString()}`}>
      <Tooltip title="Удалить" position="top">
        <A
          className={deleteIconClassNames}
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
