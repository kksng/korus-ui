import * as helpers from './helpers';
import { FileErrorCodes as error } from '../../constants';

describe('getErrorCode tests', () => {
  const file = {
    ...new Blob(),
    lastModified: 1618496879593,
    name: 'test',
    size: 100,
    type: 'image/png',
  };
  it('Should return error code 0 if file name length is less than the maximum', () => {
    const props = {
      maxFileNameLength: 5,
    };
    const expected = error.None;
    expect(helpers.getErrorCode(file, props)).toBe(expected);
  });

  it('Should return error code 0 if the file size meets the requirements', () => {
    const props = {
      maxFileSize: 101,
      minFileSize: 99,
    };
    const expected = error.None;
    expect(helpers.getErrorCode(file, props)).toBe(expected);
  });

  it('Should return error code 1 if file is too small', () => {
    const props = {
      minFileSize: 101,
    };
    const expected = error.FileIsTooSmall;
    expect(helpers.getErrorCode(file, props)).toBe(expected);
  });

  it('Should return error code 2 if file is too big', () => {
    const props = {
      maxFileSize: 99,
    };
    const expected = error.FileIsTooBig;
    expect(helpers.getErrorCode(file, props)).toBe(expected);
  });

  it('Should return error code 3 if file format is wrong when allowedFiles is used', () => {
    const props = {
      allowedFiles: 'image/jpeg',
    };
    const expected = error.WrongFileFormat;
    expect(helpers.getErrorCode(file, props)).toBe(expected);
  });

  it('Should return error code 3 if file format is wrong when forbiddenFiles is used', () => {
    const props = {
      forbiddenFiles: 'image/png',
    };
    const expected = error.WrongFileFormat;
    expect(helpers.getErrorCode(file, props)).toBe(expected);
  });

  it('Should return error code 6 if file name is too long', () => {
    const props = {
      maxFileNameLength: 3,
    };
    const expected = error.NameIsTooLong;
    expect(helpers.getErrorCode(file, props)).toBe(expected);
  });
});
