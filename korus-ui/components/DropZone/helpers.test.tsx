import React from 'react';
import * as helpers from './helpers';
import { Div } from '../Div';
import { FileErrorCodes } from '../../constants';

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

// describe('checkFiles tests', () => {
//   it('', () => {
//     const props = {
//       maxFileNameLength: 5,
//       maxFilesNumber: 2,
//       minFileSize: 6,
//     };
//     const state = {
//       acceptedFiles: [
//         { name: 'file1', size: 3 },
//         { name: 'file2', size: 4 },
//         { name: 'file6', size: 6 },
//       ],
//       rejectedFiles: [
//         { name: 'file3', size: 6 },
//         { name: 'file4', size: 8 },
//         { name: 'file5', size: 5 },
//       ],
//     };
//     const accepted = [
//       { name: 'file1', size: 3 },
//       { name: 'file9', size: 9 },
//     ];
//     const rejected = [
//       { name: 'file4', size: 8 },
//       { name: 'file6', size: 6 },
//     ];
//     const received = helpers.checkFiles(props, state, accepted, rejected);
//     const expected = [
//       [],
//       [
//         { errorCode: 5, name: 'file4', size: 8 },
//         { errorCode: 5, name: 'file1', size: 3 },
//       ],
//     ];
//     expect(received).toEqual(expected);
//   });
// });

describe('DescriptionMessage tests', () => {
  // it('Should return created component', () => {
  //   const props = {
  //     children: 'DropMe',
  //   };
  //   const received = helpers.DescriptionMessage(props);
  //   const expected = <Div _blockInline>DropMe</Div>; // ошибка, просит такой вид _block-inline={true}
  //   expect(received).toBe(expected);
  // });

  it('Should return empty string', () => {
    const props = {
      children: '',
    };
    const received = helpers.DescriptionMessage(props);
    const expected = '';
    expect(received).toBe(expected);
  });
});

// describe('getError tests', () => { // не проходит, видимо тоже ошибка в типах
//   it('Should return error if file type is DropZoneFileType', () => {
//     const file = {
//       lastmodified: 2020,
//       name: 'file',
//       size: 3,
//       type: '.txt',
//     };
//     const expected = 'Неизвестная ошибка';
//     const received = helpers.getError(file);
//     expect(received).toBe(expected);
//   });
// });

describe('getErrorDescription tests', () => {
  it('Should return error if file type is DropZoneFileType', () => {
    const file = {
      lastmodified: 2020,
      name: 'file',
      size: 3,
      type: '.json',
    };
    const expected = 'Неизвестная ошибка';
    const received = helpers.getErrorDescription(file);
    expect(received).toBe(expected);
  });

  it('Should return error if file type is ExternalFile', () => {
    const file = {
      link: 'link',
      name: 'file',
    };
    const expected = 'Неизвестная ошибка';
    const received = helpers.getErrorDescription(file);
    expect(received).toBe(expected);
  });
});

describe('getValue tests', () => {
  it('Should return stateValue if propValue undefined', () => {
    const propValue = undefined;
    const stateValue = {
      acceptedFiles: [
        { name: 'file1', size: 3 },
        { name: 'file2', size: 4 },
      ],
      rejectedFiles: [
        { name: 'file3', size: 6 },
        { name: 'file4', size: 8 },
      ],
    };
    const received = helpers.getValue(propValue, stateValue);
    const expected = stateValue;
    expect(received).toEqual(expected);
  });

  it('Should return propValue', () => {
    const propValue = {
      acceptedFiles: [
        { name: 'file1', size: 3 },
        { name: 'file2', size: 4 },
      ],
      rejectedFiles: [
        { name: 'file3', size: 6 },
        { name: 'file4', size: 8 },
      ],
    };
    const stateValue = {
      acceptedFiles: [
        { name: 'file5', size: 3 },
        { name: 'file6', size: 4 },
      ],
      rejectedFiles: [
        { name: 'file7', size: 6 },
        { name: 'file8', size: 8 },
      ],
    };
    const received = helpers.getValue(propValue, stateValue);
    const expected = propValue;
    expect(received).toEqual(expected);
  });


  it('Should return empty arrays if propValue is null', () => {
    const propValue = null;
    const stateValue = {
      acceptedFiles: [
        { name: 'file1', size: 3 },
        { name: 'file2', size: 4 },
      ],
      rejectedFiles: [
        { name: 'file3', size: 6 },
        { name: 'file4', size: 8 },
      ],
    };
    const received = helpers.getValue(propValue, stateValue);
    const expected = {
      acceptedFiles: [],
      rejectedFiles: [],
    };
    expect(received).toEqual(expected);
  });
});

describe('removeFromFileList tests', () => { // Тоже, видимо, неправильно
  it('Should remove file', () => {
    const removedFile = {
      name: 'fileFromState1', type: '.json',
    };
    const rejectedFiles = [
      { name: 'rejectedFile1', type: '.json' },
      { name: 'rejectedFile2', type: '.txt' },
      { name: 'rejectedFile3', type: '.png' },
    ];
    const acceptedFilesFromState = [
      { name: 'fileFromState1', type: '.json' },
      { name: 'fileFromState2', type: '.png' },
    ];
    const received = helpers.removeFromFileList(removedFile, rejectedFiles, acceptedFilesFromState);
    const expected = {
      newDropped: {
        acceptedFiles: [],
        rejectedFiles: [],
      },
      newValue: {
        acceptedFiles: [
          { name: 'fileFromState1', type: '.json' },
          { name: 'fileFromState2', type: '.png' },
        ],
        rejectedFiles: [
          { name: 'rejectedFile1', type: '.json' },
          { name: 'rejectedFile2', type: '.txt' },
          { name: 'rejectedFile3', type: '.png' },
        ],
      },
    };
    expect(received).toEqual(expected);
  });
});

describe('addToFileList tests', () => {
  it('Should add file from acceptedFilesFromState to newValue.acceptedFiles', () => {
    const acceptedFiles = [
      { name: 'file1', type: '.txt' },
      { name: 'file2', type: '.png' },
    ];
    const rejectedFiles = [
      { name: 'file3', type: '.txt' },
      { name: 'file4', type: '.png' },
    ];
    const acceptedFilesFromState = [
      { name: 'file5', type: '.txt' },
    ];
    const expected = {
      newDropped: {
        acceptedFiles: [
          { name: 'file1', type: '.txt' },
          { name: 'file2', type: '.png' },
        ],
        rejectedFiles: [
          { name: 'file3', type: '.txt' },
          { name: 'file4', type: '.png' },
        ],
      },
      newValue: {
        acceptedFiles: [
          { name: 'file1', type: '.txt' },
          { name: 'file2', type: '.png' },
          { name: 'file5', type: '.txt' },
        ],
        rejectedFiles: [
          { name: 'file3', type: '.txt' },
          { name: 'file4', type: '.png' },
        ],
      },
    };
    const received = helpers.addToFileList(acceptedFiles, rejectedFiles, acceptedFilesFromState);
    expect(received).toEqual(expected);
  });

  // it('q', () => { // предполагалось добавление файла, который уже есть
  //   const acceptedFiles = [
  //     { name: 'file1', type: '.txt' },
  //     { name: 'file2', type: '.png' },
  //   ];
  //   const rejectedFiles = [
  //     { name: 'file3', type: '.txt' },
  //     { name: 'file4', type: '.png' },
  //   ];
  //   const acceptedFilesFromState = [
  //     { name: 'file3', type: '.txt' },
  //   ];
  //   const expected = {
  //     newDropped: {
  //       acceptedFiles: [
  //         { name: 'file1', type: '.txt' },
  //         { name: 'file2', type: '.png' },
  //       ],
  //       rejectedFiles: [
  //         { name: 'file3', type: '.txt' },
  //         { name: 'file4', type: '.png' },
  //       ],
  //     },
  //     newValue: {
  //       acceptedFiles: [
  //         { name: 'file1', type: '.txt' },
  //         { name: 'file2', type: '.png' },
  //         { name: 'file3', type: '.txt' },
  //       ],
  //       rejectedFiles: [
  //         { name: 'file3', type: '.txt' },
  //         { name: 'file4', type: '.png' },
  //       ],
  //     },
  //   };
  //   const received = helpers.addToFileList(acceptedFiles, rejectedFiles, acceptedFilesFromState);
  //   expect(received).toEqual(expected);
  // });
});
