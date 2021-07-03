import { getFileIconClass } from './helpers';
import { FileExtensionsIconClassList } from './types';

describe('getFileIconClass tests', () => {
  it('return oneC class name', () => {
    const fileName = 'test.dt';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.oneC);
  });

  it('return pdf class name', () => {
    const fileName = 'test.pdf';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.pdf);
  });

  it('return xml class name', () => {
    const fileName = 'test.xml';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.xml);
  });

  it('return csv class name', () => {
    const fileName = 'test.csv';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.csv);
  });

  it('return xls class name', () => {
    const fileName = 'test.xls';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.xls);
  });

  it('return doc class name', () => {
    const fileName = 'test.doc';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.doc);
  });

  it('return default class name', () => {
    const fileName = 'test.test';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.default);
  });

  it('return default class name for double dot in fileName', () => {
    const fileName = 'test.pdf.test';
    const fileIconClass = getFileIconClass(fileName);
    expect(fileIconClass).toEqual(FileExtensionsIconClassList.default);
  });
});
