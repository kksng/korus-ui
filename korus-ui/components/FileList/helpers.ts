import { FileExtensions, FileExtensionsIconClassList } from './types';

/**
 * Хелпер получения класса иконки по расширению файла
 * @param {string} name имя файла с расширением или без
 * @returns {string} имя класса иконки
 */
export const getFileIconClass = (name: string): FileExtensionsIconClassList => {
  const fileExtension = name.split('.').pop();

  switch (fileExtension) {
    case FileExtensions.oneC: return FileExtensionsIconClassList.oneC;

    case FileExtensions.csv: return FileExtensionsIconClassList.csv;

    case FileExtensions.doc: return FileExtensionsIconClassList.doc;

    case FileExtensions.pdf: return FileExtensionsIconClassList.pdf;

    case FileExtensions.xls: return FileExtensionsIconClassList.xls;

    case FileExtensions.xml: return FileExtensionsIconClassList.xml;

    default: return FileExtensionsIconClassList.default;
  }
};
