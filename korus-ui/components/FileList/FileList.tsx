import React from 'react';
import { Div } from '../Div';
import {
  Table,
  Col,
  ColGroup,
  TBody,
  Td,
  Tr,
} from '../Table';
import { I } from '../I';
import { Button } from '../Button';
import { getFileIconClass } from './helpers';
import { getClassNames, useProps, useTheme } from '../../utils';
import { FileListProps } from './types';


/**
 * @param {FileListProps} props Пропсы компонента
 * @returns {React.ReactElement} Компонент отображения списка загруженных файлов
 */
export const FileList = (props: FileListProps): React.ReactElement => {
  const {
    data, onDeleteFile, onDownloadFile,
  } = useProps(props);

  const theme = useTheme(props.theme, 'fileList');

  return (
    <Div className={theme.fileListWrapper}>
      <Div className={theme.fileList}>
        <Table>
          <ColGroup>
            <Col style={{ width: '4.4rem' }} />
            <Col style={{ width: '6.2rem' }} />
            <Col />
            <Col style={{ width: '16rem' }} />
            <Col style={{ width: '5rem' }} />
            <Col style={{ width: '5rem' }} />
          </ColGroup>
          <TBody>
            {data.map((fileInList, index) => {
              const {
                id,
                name,
                size,
                status,
                statusDescription,
                canDeleteFile = false,
                canDownloadFile = false,
                statusColor,
                fileSizeUnit,
              } = fileInList;
              return (
                <Tr id={id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <I className={getFileIconClass(name)} />
                  </Td>
                  <Td>
                    {name}
                    <Div className={theme.subtitle}>{`Размер файла ${size} ${fileSizeUnit}`}</Div>
                  </Td>
                  <Td>
                    <Div className={getClassNames([theme.fileListTag, statusColor])}>
                      {status}
                      <Div className={theme.subtitle}>{statusDescription}</Div>
                    </Div>
                  </Td>
                  <Td _withButton>
                    {canDownloadFile && onDownloadFile && (
                      <Button
                        _blank
                        _more
                        onClick={(): void => onDownloadFile(fileInList)}
                      >
                        <I className={theme.fileListDownloadIcon} />
                      </Button>
                    )}
                  </Td>
                  <Td _withButton>
                    {canDeleteFile && onDeleteFile && (
                      <Button
                        _blank
                        _more
                        onClick={(): void => onDeleteFile(fileInList)}
                      >
                        <I className={theme.fileListDeleteIcon} />
                      </Button>
                    )}
                  </Td>
                </Tr>
              );
            })}
          </TBody>
        </Table>
      </Div>
    </Div>
  );
};

FileList.displayName = 'FileList';
