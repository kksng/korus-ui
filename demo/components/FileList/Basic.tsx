import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

/** @returns {React.ReactElement} Базовое использование компонента FileList */
export const Basic = (storyProps: StoryProps): React.ReactElement => {
  const data: L.FileListTypes.FileInList[] = [
    {
      canDeleteFile: true,
      canDownloadFile: true,
      fileSizeUnit: L.FileListTypes.FileSizeUnits.mb,
      id: '1',
      name: 'test.dt',
      size: '123',
      status: 'Успешно',
      statusDescription: 'Тестовое пояснение к статусу',
    },
    {
      canDeleteFile: true,
      canDownloadFile: false,
      fileSizeUnit: L.FileListTypes.FileSizeUnits.mb,
      id: '2',
      name: 'test.test',
      size: '444',
      status: 'Ошибка',
      statusColor: L.FileListTypes.StatusColorsClassNames.danger,
      statusDescription: 'Тестовое пояснение к статусу',
    },
    {
      canDeleteFile: true,
      canDownloadFile: false,
      fileSizeUnit: L.FileListTypes.FileSizeUnits.mb,
      id: '3',
      name: 'test.csv',
      size: '666',
      status: 'Успешно',
      statusColor: L.FileListTypes.StatusColorsClassNames.success,
      statusDescription: 'Тестовое пояснение к статусу',
    },
  ];

  const handleDeleteFile = (fileInList: L.FileListTypes.FileInList): void => {
    console.log('delete file', fileInList);
  };

  const handleDownloadFile = (fileInList: L.FileListTypes.FileInList): void => {
    console.log('download file', fileInList);
  };

  return (
    <L.FileList
      data={data}
      onDeleteFile={(fileInList): void => handleDeleteFile(fileInList)}
      onDownloadFile={(fileInList): void => handleDownloadFile(fileInList)}
    />
  );
};
