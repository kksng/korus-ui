import accept from 'attr-accept';
import { FileErrorCodes, MAX_FILE_SIZE, MIN_FILE_SIZE } from '../../constants';
import { FileUploadProps } from './types';

export const getErrorCode = (file: File, props: FileUploadProps): number => {
  const {
    allowedFiles, forbiddenFiles, minFileSize = MIN_FILE_SIZE, maxFileSize = MAX_FILE_SIZE,
  } = props;
  // проверка на тип передаваемого файла
  if (allowedFiles) {
    const isAccepted = accept({
      name: file.name,
      type: file.type,
    }, allowedFiles);

    if (!isAccepted) return FileErrorCodes.WrongFileFormat;
  }
  // Проверка на запрещенные типы файлов
  if (forbiddenFiles) {
    const isAcceptedForbiddenFiles = accept({
      name: file.name,
      type: file.type,
    }, forbiddenFiles);

    if (isAcceptedForbiddenFiles) return FileErrorCodes.WrongFileFormat;
  }

  if (file.size < minFileSize) return FileErrorCodes.FileIsTooSmall;
  if (file.size > maxFileSize) return FileErrorCodes.FileIsTooBig;

  return FileErrorCodes.None; // неизвестная ошибка
};
