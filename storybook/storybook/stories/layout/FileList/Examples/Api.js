import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const data = [
    {
      canDeleteFile: true,
      canDownloadFile: true,
      fileSizeUnit: L.FileListTypes.FileSizeUnits.mb,
      id: '1',
      name: 'test.dt',
      size: '123',
      status: 'Успешно',
      statusDescription: 'Тестовое пояснение к статусу'
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
      statusDescription: 'Тестовое пояснение к статусу'
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
      statusDescription: 'Тестовое пояснение к статусу'
    }
  ];

  const handleDeleteFile = (fileInList) => {
    console.log('delete file', fileInList);
  };

  const handleDownloadFile = (fileInList) => {
    console.log('download file', fileInList);
  };

  return (
    <L.Div>
      <L.FileList
      data={data}
      onDeleteFile={(fileInList) => handleDeleteFile(fileInList)}
      onDownloadFile={(fileInList) => handleDownloadFile(fileInList)}
    />
    </L.Div>
  );
};
render(<Api />);
`,
  source: componentSrc,
};
