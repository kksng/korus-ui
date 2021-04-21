import React from 'react';
import * as helpers from './helpers';
import { Div } from '../Div';
import { FileErrorCodes } from '../../constants';
import { EMPTY_DROP_ZONE_FILES } from './constants';

const firstFile = {
  ...new Blob(),
  lastModified: 1618496879591,
  name: 'first',
  size: 100,
};
const secondFile = {
  ...new Blob(),
  lastModified: 1618496879592,
  name: 'second',
  size: 100,
};
const props = {
  value: undefined,
};
const state = {
  acceptedFiles: [firstFile, secondFile],
  rejectedFiles: [],
};

describe('compareFiles tests', () => {
  it('Should return true if size of files is the same and lastModified time is different', () => {
    expect(helpers.compareFiles(firstFile, secondFile)).toBeTruthy();
  });

  it('Should return false if size of files is different', () => {
    const newFirstFile = { ...firstFile, size: 100 };
    const newSecondFile = { ...secondFile, size: 1000 };

    expect(helpers.compareFiles(newFirstFile, newSecondFile)).toBeFalsy();
  });
  // todo: possibly compareFiles should return true if lastModified time is the same
  it('Should return false if lastModified time is the same', () => {
    const lastModified = new Date().getTime();
    const newFirstFile = { ...firstFile, lastModified };
    const newSecondFile = { ...secondFile, lastModified };

    expect(helpers.compareFiles(newFirstFile, newSecondFile)).toBeFalsy();
  });
});

describe('checkForAddedFile tests', () => {
  it('Should check accepted files in state if value is undefined', () => {
    expect(helpers.checkForAddedFile(props, state, firstFile)).toBeTruthy();
  });

  it('Should check accepted files in state if value is null', () => {
    const newProps = { ...props, value: null };

    expect(helpers.checkForAddedFile(newProps, state, firstFile)).toBeTruthy();
  });

  it('Should check accepted files in props.value if provided', () => {
    const newProps = {
      ...props,
      value: {
        acceptedFiles: [],
        rejectedFiles: [],
      },
    };

    expect(helpers.checkForAddedFile(newProps, state, firstFile)).toBeFalsy();
  });

  it('Should compare files by size and lastModified time, if file was found by name', () => {
    const differentSizeFile = { ...firstFile, size: 1000 };
    // todo: possibly should return false if files size is different
    expect(helpers.checkForAddedFile(props, state, differentSizeFile)).toBeTruthy();

    const differentModifyTimeFile = { ...firstFile, lastModified: new Date().getTime() };

    expect(helpers.checkForAddedFile(props, state, differentModifyTimeFile)).toBeFalsy();
  });
});

describe('getErrorCode tests', () => {
  const testFile = {
    ...new Blob(),
    lastModified: 1618496879593,
    name: 'test',
    size: 100,
    type: '.png',
  };
  const lastDropped = 1;

  it('Should return error code 0 if no errors were found', () => {
    expect(helpers.getErrorCode(props, state, testFile, lastDropped)).toBe(FileErrorCodes.None);
  });

  it('Should return error code 1 if file is too small', () => {
    const newProps = {
      ...props,
      minFileSize: 1000,
    };

    expect(helpers.getErrorCode(newProps, state, testFile, lastDropped)).toBe(FileErrorCodes.FileIsTooSmall);
  });

  it('Should return error code 2 if file is too big', () => {
    const newProps = {
      ...props,
      maxFileSize: 10,
    };

    expect(helpers.getErrorCode(newProps, state, testFile, lastDropped)).toBe(FileErrorCodes.FileIsTooBig);
  });

  it('Should return error code 3 if file format is wrong', () => {
    const newProps = {
      ...props,
      allowedFiles: '.txt',
    };

    expect(helpers.getErrorCode(newProps, state, testFile, lastDropped)).toBe(FileErrorCodes.WrongFileFormat);
  });

  it('Should return error code 4 if file is already loaded', () => {
    const newProps = {
      ...props,
      value: {
        acceptedFiles: [testFile],
        rejectedFiles: [],
      },
    };

    expect(helpers.getErrorCode(newProps, state, testFile, lastDropped)).toBe(FileErrorCodes.AlreadyLoaded);
  });

  it('Should return error code 5 if too many files were uploaded', () => {
    const newProps = {
      ...props,
      maxFilesNumber: 1,
    };

    expect(helpers.getErrorCode(newProps, state, testFile, lastDropped)).toBe(FileErrorCodes.TooManyFiles);
  });

  it('Should return error code 6 if filename is too long', () => {
    const newProps = {
      ...props,
      maxFileNameLength: 2,
    };

    expect(helpers.getErrorCode(newProps, state, testFile, lastDropped)).toBe(FileErrorCodes.NameIsTooLong);
  });
});

describe('checkFiles tests', () => {
  const testFile = {
    ...new Blob(),
    lastModified: 1618496879593,
    name: 'test',
    size: 100,
    type: '.png',
  };
  const accepted: File[] = [testFile];
  const rejected: File[] = [];

  it('Should return same accepted and rejected files if no errors were detected and files were not found in state', () => {
    const expected = [accepted, rejected];
    expect(helpers.checkFiles(props, state, accepted, rejected)).toEqual(expected);
  });

  it('Should put files into rejected files array if errors were detected', () => {
    const newProps = {
      ...props,
      maxFileNameLength: 2,
    };
    const newAccepted: File[] = [];
    const newRejected: File[] = [testFile];
    const expected = [newAccepted, newRejected];
    expect(helpers.checkFiles(newProps, state, accepted, rejected)).toEqual(expected);
  });

  it('Should put files into rejected files array if file already exists', () => {
    const newProps = {
      ...props,
      value: {
        acceptedFiles: [testFile],
        rejectedFiles: [],
      },
    };
    const newAccepted: File[] = [];
    const newRejected: File[] = [testFile];
    const expected = [newAccepted, newRejected];
    expect(helpers.checkFiles(newProps, state, accepted, rejected)).toEqual(expected);
  });
});

describe('DescriptionMessage tests', () => {
  const message = 'test';

  it('Should return new component with message', () => {
    const expected = <Div _block-inline>{message}</Div>;
    expect(helpers.DescriptionMessage({ children: message })).toEqual(expected);
  });

  it('Should return empty string if message is empty string', () => {
    expect(helpers.DescriptionMessage({ children: '' })).toBe('');
  });
});

describe('getError tests', () => {
  const testFile = {
    ...new Blob(),
    lastModified: 1618496879593,
    name: 'test',
    size: 100,
    type: '.png',
  };

  it('Should return undefined if no errors', () => {
    expect(helpers.getError(testFile)).toBeUndefined();
  });

  it('Should return proper error object for too small file', () => {
    const tooSmallFile = {
      ...testFile,
      errorCode: 1,
    };

    const expected = {
      errorCode: FileErrorCodes.FileIsTooSmall,
      message: 'Файл меньше допустимого размера',
    };
    expect(helpers.getError(tooSmallFile)).toEqual(expected);
  });

  it('Should return proper error object for too big file', () => {
    const tooBigFile = {
      ...testFile,
      errorCode: 2,
    };

    const expected = {
      errorCode: FileErrorCodes.FileIsTooBig,
      message: 'Превышен максимальный размер файла',
    };
    expect(helpers.getError(tooBigFile)).toEqual(expected);
  });


  it('Should return proper error object for file with wrong format', () => {
    const wrongFormatFile = {
      ...testFile,
      errorCode: 3,
    };

    const expected = {
      errorCode: FileErrorCodes.WrongFileFormat,
      message: 'Недопустимый формат файла',
    };
    expect(helpers.getError(wrongFormatFile)).toEqual(expected);
  });

  it('Should return proper error object for already loaded file', () => {
    const alreadyLoadedFile = {
      ...testFile,
      errorCode: 4,
    };

    const expected = {
      errorCode: FileErrorCodes.AlreadyLoaded,
      message: 'Файл уже загружен',
    };
    expect(helpers.getError(alreadyLoadedFile)).toEqual(expected);
  });

  it('Should return proper error object if too many files were uploaded', () => {
    const tooManyFiles = {
      ...testFile,
      errorCode: 5,
    };

    const expected = {
      errorCode: FileErrorCodes.TooManyFiles,
      message: 'Превышено максимальное количество файлов',
    };
    expect(helpers.getError(tooManyFiles)).toEqual(expected);
  });

  it('Should return proper error object if name of file is too long', () => {
    const tooLongNameFile = {
      ...testFile,
      errorCode: 6,
    };

    const expected = {
      errorCode: FileErrorCodes.NameIsTooLong,
      message: 'Превышена максимальная длина имени файла',
    };
    expect(helpers.getError(tooLongNameFile)).toEqual(expected);
  });
});

describe('getErrorDescription tests', () => {
  const rejectedFile = {
    ...new Blob(),
    lastModified: 1618496879593,
    name: 'test',
    size: 100,
    type: '.png',
  };

  it('Should return message \'Неизвестная ошибка\' if error was not detected', () => {
    const expected = 'Неизвестная ошибка';
    expect(helpers.getErrorDescription(rejectedFile)).toBe(expected);
  });

  it('Should return corresponding message if error was detected', () => {
    const newRejectedFile = {
      ...rejectedFile,
      errorCode: 1,
    };

    const expected = 'Файл меньше допустимого размера';
    expect(helpers.getErrorDescription(newRejectedFile)).toBe(expected);
  });
});

describe('getValue tests', () => {
  it('Should return state if value in props undefined', () => {
    expect(helpers.getValue(props.value, state)).toEqual(state);
  });

  it('Should return EMPTY_DROP_ZONE_FILES if value in props is null', () => {
    const newProps = {
      ...props,
      value: null,
    };

    expect(helpers.getValue(newProps.value, state)).toEqual(EMPTY_DROP_ZONE_FILES);
  });

  it('Should return  value from props if it is not undefined or null', () => {
    const newProps = {
      ...props,
      value: {
        acceptedFiles: [firstFile],
        rejectedFiles: [secondFile],
      },
    };

    expect(helpers.getValue(newProps.value, state)).toEqual(newProps.value);
  });
});

describe('removeFromFileList tests', () => {
  const rejectedFile = {
    ...new Blob(),
    lastModified: 1618496879593,
    name: 'test',
    size: 100,
    type: '.png',
  };

  it('Should return new accepted files with provided file removed and store rejected files', () => {
    const removedFile = firstFile;
    const rejectedFiles = [rejectedFile];

    const expected = {
      newDropped: {
        acceptedFiles: [],
        rejectedFiles: [],
      },
      newValue: {
        acceptedFiles: [secondFile],
        rejectedFiles: [...rejectedFiles],
      },
    };

    expect(helpers.removeFromFileList(removedFile, rejectedFiles, state.acceptedFiles)).toEqual(expected);
  });
});

describe('addToFileList tests', () => {
  const acceptedFile = {
    ...new Blob(),
    lastModified: 1618496879593,
    name: 'test',
    size: 100,
    type: '.png',
  };

  it('Should add file to accepted files', () => {
    const acceptedFiles = [acceptedFile];
    const rejectedFiles: File[] = [];


    const expected = {
      newDropped: {
        acceptedFiles,
        rejectedFiles,
      },
      newValue: {
        acceptedFiles: [...acceptedFiles, ...state.acceptedFiles],
        rejectedFiles,
      },
    };
    expect(helpers.addToFileList(acceptedFiles, rejectedFiles, state.acceptedFiles)).toEqual(expected);
  });
});
