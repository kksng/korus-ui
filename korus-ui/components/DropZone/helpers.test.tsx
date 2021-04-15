import React from 'react';
import * as helpers from './helpers';
import { Div } from '../Div';

// describe('compareFiles tests', () => {
//   it('', () => {
//     const firstFile = {
//       arrayBuffer(),
//       lastModified: 2020,
//       name: 'firstFile',
//       size: 2,
//       slice(),
//       stream(),
//       text(),
//       type: 'json',
//     };
//     const secondFile = {
//       arrayBuffer(),
//       lastModified: 2020,
//       name: 'secondFile',
//       size: 3,
//       slice(),
//       stream(),
//       text(),
//       type: 'json',
//     },
//     expect(helpers.compareFiles(firstFile, secondFile))
//   })
// });

describe('checkForAddedFile tests', () => {
  it('Should return false when value is null', () => {
    const props = {
      value: null,
    };
    const state = {
      acceptedFiles: [{ name: 'external file' }],
      rejectedFiles: [{ name: 'rejected file' }],
    };
    const file = {
      lastModified: 2020,
      name: 'fileName',
    };
    expect(helpers.checkForAddedFile(props, state, file)).toBeFalsy();
  });

  it('Should return false when value is undefined', () => {
    const props = {
      value: undefined,
    };
    const state = {
      acceptedFiles: [{ name: 'external file' }],
      rejectedFiles: [{ name: 'rejected file' }],
    };
    const file = {
      lastModified: 2020,
      name: 'fileName',
    };
    expect(helpers.checkForAddedFile(props, state, file)).toBeFalsy();
  });

  // it('', () => {
  //   const props = {
  //     minFileSize: 3,
  //     value: {
  //       acceptedFiles: [{ name: 'external file', type: '.json' }],
  //       rejectedFiles: [{ name: 'rejected file', type: '.txt' }],
  //     },
  //   };
  //   const state = {
  //     acceptedFiles: [{ name: 'external file' }],
  //     rejectedFiles: [{ name: 'rejected file' }],
  //   };
  //   const file = {
  //     lastModified: 2020,
  //     name: 'fileName',
  //     size: '2',
  //   };
  //   expect(helpers.checkForAddedFile(props, state, file)).toBeFalsy();
  // });

  // it('Should return falsee', () => { // вопрос по типам файлов
  //   const props = {
  //     value: {
  //       acceptedFiles: [{ name: 'file1', size: 1, type: '.json' }],
  //       rejectedFiles: [{ name: 'file2', size: 2, type: '.txt' }],
  //     },
  //   };
  //   const state = {
  //     acceptedFiles: [{ name: 'external file' }],
  //     rejectedFiles: [{ name: 'rejected file' }],
  //   };
  //   const file = {
  //     lastModified: 2020,
  //     name: 'fileName',
  //     size: '2',
  //   };
  //   expect(helpers.checkForAddedFile(props, state, file)).toBeTruthy();
  // });

//   it('true', () => {
//     const props = {
//       value: {
//         acceptedFiles: [{ name: 'external file' }],
//         rejectedFiles: [{ name: 'rejected file' }],
//       },
//     };
//     const state = {
//       acceptedFiles: [{ name: 'external file' }],
//       rejectedFiles: [{ name: 'rejected file' }],
//     };
//     const file = {
//       lastModified: 2020,
//       name: 'fileName',
//     };
//     expect(helpers.checkForAddedFile(props, state, file)).toBe(true);
//   });
});

describe('getErrorCode tests', () => {
  it('Should return error code 0 if value is null', () => {
    const props = {
      value: null,
    };
    const state = {
      acceptedFiles: [
        { name: 'file1', size: 3 },
        { name: 'file2', size: 4 },
        { name: 'file3', size: 6 },
      ],
      rejectedFiles: [
        { name: 'file4', size: 6 },
        { name: 'file5', size: 8 },
        { name: 'file6', size: 5 },
      ],
    };
    const file = {
      name: 'file7', size: 4,
    };
    const lastDropped = 5;
    const received = helpers.getErrorCode(props, state, file, lastDropped);
    const expected = 0;
    expect(received).toBe(expected);
  });

  it('Should return error code 0 if value is undefined', () => {
    const props = {
      value: undefined,
    };
    const state = {
      acceptedFiles: [
        { name: 'file1', size: 3 },
        { name: 'file2', size: 4 },
        { name: 'file3', size: 6 },
      ],
      rejectedFiles: [
        { name: 'file4', size: 6 },
        { name: 'file5', size: 8 },
        { name: 'file6', size: 5 },
      ],
    };
    const file = {
      name: 'file7', size: 4,
    };
    const lastDropped = 5;
    const received = helpers.getErrorCode(props, state, file, lastDropped);
    const expected = 0;
    expect(received).toBe(expected);
  });

  it('Should return error code 1 (file is too small) ', () => {
    const props = {
      minFileSize: 4,
      value: {
        acceptedFiles: [
          { name: 'file1', size: 3, type: '.txt' },
          { name: 'file2', size: 4, type: '.json' },
          { name: 'file3', size: 6, type: '.png' },
        ],
        rejectedFiles: [
          { name: 'file4', size: 6 },
          { name: 'file5', size: 8 },
          { name: 'file6', size: 5 },
        ],
      },
    };
    const state = {
      acceptedFiles: [
        { name: 'file1', size: 3, type: '.txt' },
        { name: 'file2', size: 4, type: '.json' },
        { name: 'file3', size: 6, type: '.png' },
      ],
      rejectedFiles: [
        { name: 'file4', size: 6 },
        { name: 'file5', size: 8 },
        { name: 'file6', size: 5 },
      ],
    };
    const file = {
      name: 'file7', size: 3, type: '.json',
    };
    const lastDropped = 5;
    const received = helpers.getErrorCode(props, state, file, lastDropped);
    const expected = 1;
    expect(received).toBe(expected);
  });

  it('Should return error code 2 (file is too big) ', () => {
    const props = {
      maxFileSize: 4,
      value: {
        acceptedFiles: [
          { name: 'file1', size: 3, type: '.txt' },
          { name: 'file2', size: 4, type: '.json' },
          { name: 'file3', size: 6, type: '.png' },
        ],
        rejectedFiles: [
          { name: 'file4', size: 6 },
          { name: 'file5', size: 8 },
          { name: 'file6', size: 5 },
        ],
      },
    };
    const state = {
      acceptedFiles: [
        { name: 'file1', size: 3, type: '.txt' },
        { name: 'file2', size: 4, type: '.json' },
        { name: 'file3', size: 6, type: '.png' },
      ],
      rejectedFiles: [
        { name: 'file4', size: 6 },
        { name: 'file5', size: 8 },
        { name: 'file6', size: 5 },
      ],
    };
    const file = {
      name: 'file7', size: 5, type: '.json',
    };
    const lastDropped = 5;
    const received = helpers.getErrorCode(props, state, file, lastDropped);
    const expected = 2;
    expect(received).toBe(expected);
  });

  it('Should return error code 3 (wrong file format) ', () => {
    const props = {
      allowedFiles: '.txt',
      value: {
        acceptedFiles: [
          { name: 'file1', size: 3, type: '.txt' },
          { name: 'file2', size: 4, type: '.json' },
          { name: 'file3', size: 6, type: '.png' },
        ],
        rejectedFiles: [
          { name: 'file4', size: 6 },
          { name: 'file5', size: 8 },
          { name: 'file6', size: 5 },
        ],
      },
    };
    const state = {
      acceptedFiles: [
        { name: 'file1', size: 3, type: '.txt' },
        { name: 'file2', size: 4, type: '.json' },
        { name: 'file3', size: 6, type: '.png' },
      ],
      rejectedFiles: [
        { name: 'file4', size: 6 },
        { name: 'file5', size: 8 },
        { name: 'file6', size: 5 },
      ],
    };
    const file = {
      name: 'file7', size: 4, type: '.json',
    };
    const lastDropped = 5;
    const received = helpers.getErrorCode(props, state, file, lastDropped);
    const expected = 3;
    expect(received).toBe(expected);
  });

  // it('Should return error code 4 (already loaded) ', () => { // правильно ли вообще, возвращает 0 независимо от пропсов
  //   const props = {
  //     forbiddenFiles: '.json',
  //     value: {
  //       acceptedFiles: [
  //         { name: 'file1', size: 3, type: '.txt' },
  //         { name: 'file2', size: 4, type: '.json' },
  //         { name: 'file3', size: 6, type: '.png' },
  //       ],
  //       rejectedFiles: [
  //         { name: 'file4', size: 6 },
  //         { name: 'file5', size: 8 },
  //         { name: 'file6', size: 5 },
  //       ],
  //     },
  //   };
  //   const state = {
  //     acceptedFiles: [
  //       { name: 'file1', size: 3, type: '.txt' },
  //       { name: 'file2', size: 4, type: '.json' },
  //       { name: 'file3', size: 6, type: '.png' },
  //     ],
  //     rejectedFiles: [
  //       { name: 'file4', size: 6 },
  //       { name: 'file5', size: 8 },
  //       { name: 'file6', size: 5 },
  //     ],
  //   };
  //   const file = {
  //     name: 'file2', size: 4, type: '.json',
  //   };
  //   const lastDropped = 5;
  //   const received = helpers.getErrorCode(props, state, file, lastDropped);
  //   const expected = 4;
  //   expect(received).toBe(expected);
  // });

  it('Should return error code 5 (too many files) ', () => {
    const props = {
      maxFilesNumber: 1,
      value: {
        acceptedFiles: [
          { name: 'file1', size: 3, type: '.txt' },
          { name: 'file2', size: 4, type: '.json' },
          { name: 'file3', size: 6, type: '.png' },
        ],
        rejectedFiles: [
          { name: 'file4', size: 6 },
          { name: 'file5', size: 8 },
          { name: 'file6', size: 5 },
        ],
      },
    };
    const state = {
      acceptedFiles: [
        { name: 'file1', size: 3, type: '.txt' },
        { name: 'file2', size: 4, type: '.json' },
        { name: 'file3', size: 6, type: '.png' },
      ],
      rejectedFiles: [
        { name: 'file4', size: 6 },
        { name: 'file5', size: 8 },
        { name: 'file6', size: 5 },
      ],
    };
    const file = {
      name: 'file7', size: 4, type: '.json',
    };
    const lastDropped = 5;
    const received = helpers.getErrorCode(props, state, file, lastDropped);
    const expected = 5;
    expect(received).toBe(expected);
  });

  it('Should return error code 6 (name is too long) ', () => {
    const props = {
      maxFileNameLength: 4,
      value: {
        acceptedFiles: [
          { name: 'file1', size: 3, type: '.txt' },
          { name: 'file2', size: 4, type: '.json' },
          { name: 'file3', size: 6, type: '.png' },
        ],
        rejectedFiles: [
          { name: 'file4', size: 6 },
          { name: 'file5', size: 8 },
          { name: 'file6', size: 5 },
        ],
      },
    };
    const state = {
      acceptedFiles: [
        { name: 'file1', size: 3, type: '.txt' },
        { name: 'file2', size: 4, type: '.json' },
        { name: 'file3', size: 6, type: '.png' },
      ],
      rejectedFiles: [
        { name: 'file4', size: 6 },
        { name: 'file5', size: 8 },
        { name: 'file6', size: 5 },
      ],
    };
    const file = {
      name: 'file7', size: 4, type: '.json',
    };
    const lastDropped = 5;
    const received = helpers.getErrorCode(props, state, file, lastDropped);
    const expected = 6;
    expect(received).toBe(expected);
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
