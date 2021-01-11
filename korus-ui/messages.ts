import { getFileWordEnding } from './utils';
import { FILE_SIZE_RUS_UNITS } from './constants';


// Текст о запрещенном типе файлов берется из props.forbiddenFiles
// Например: "Запрещенный тип файлов: .jpg, .gif"
export const getForbiddenFormatsDescription = (forbiddenFiles?: string): string => (forbiddenFiles ? `Запрещенный тип файлов: ${forbiddenFiles}.` : '');

// Текст о типе файлов. Тип файлов берется из props.accept.
// Например: "Тип файлов: .jpg, .gif"
export const getFormatsDescription = (acceptProp?: string): string => (acceptProp ? `Тип файлов: ${acceptProp}.` : '');

// Если заданы props.maxSize или props.minSize то собираем (из minSizeDescription и maxSizeDescription) надпись о размере файла.
// Например: "Размер: от 1Мб до 10Мб."
export const getFileSizeDescription = (minSize: number | undefined, maxSize: number | undefined, fileSizeUnit: keyof typeof FILE_SIZE_RUS_UNITS): string => {
  // Получение сообщения о максимальном размере файла
  const maxSizeDesc = maxSize ? `до ${maxSize} ${FILE_SIZE_RUS_UNITS[fileSizeUnit]}` : '';
  // Получение сообщения о минимальном размере файла. Пробел чтобы не было 2 пробела при отсутствии minSize
  const minSizeDesc = minSize ? `от ${minSize} ${FILE_SIZE_RUS_UNITS[fileSizeUnit]}` : '';

  return minSize || maxSize ? `Размер: ${minSizeDesc} ${maxSizeDesc}.`.replace(/  +/g, ' ') : '';
};

// Текст о максимальном количестве файлов
// Например: "Не более 2 файлов."
export const getMaxFilesDescription = (maxFiles?: number): string => (maxFiles ? `Не более ${maxFiles} файл${getFileWordEnding(maxFiles)}.` : '');
