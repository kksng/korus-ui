export const NO_DATA_TEMPLATES = {
  default: 'default' as const,
};

export const FILE_SIZE_UNITS = {
  GB: 'GB' as const,
  MB: 'MB' as const,
  TB: 'TB' as const,
  byte: 'byte' as const,
  kB: 'kB' as const,
};

export const FILE_SIZE_RUS_UNITS = {
  [FILE_SIZE_UNITS.byte]: 'байт' as const,
  [FILE_SIZE_UNITS.kB]: 'Кб' as const,
  [FILE_SIZE_UNITS.MB]: 'Мб' as const,
  [FILE_SIZE_UNITS.GB]: 'Гб' as const,
  [FILE_SIZE_UNITS.TB]: 'Тб' as const,
};

export const MAX_FILE_SIZE = 100 * 1024 * 1024;
export const MIN_FILE_SIZE = 0;

export const COMPONENTS_NAMESPACES = {
  autoComplete: 'autoComplete',
  button: 'button',
  buttonGroup: 'buttonGroup',
  checkBox: 'checkBox',
  collapse: 'collapse',
  collapseBody: 'collapseBody',
  collapseHeading: 'collapseHeading',
  collapsePanel: 'collapsePanel',
  currency: 'currency',
  dateTimeInput: 'dateTimeInput',
  dateTimeInputRange: 'dateTimeInputRange',
  dropDown: 'dropDown',
  dropDownLink: 'dropDownLink',
  dropDownSelect: 'dropDownSelect',
  dropZone: 'dropZone',
  fileDrop: 'fileDrop',
  fileUpload: 'fileUpload',
  input: 'input',
  loader: 'loader',
  maskedInput: 'maskedInput',
  modal: 'modal',
  modalBody: 'modalBody',
  modalFooter: 'modalFooter',
  modalHeader: 'modalHeader',
  multiSelect: 'multiSelect',
  notifications: 'notifications',
  numericRange: 'numericRange',
  numericTextBox: 'numericTextBox',
  pagination: 'pagination',
  password: 'password',
  progressBar: 'progressBar',
  radio: 'radio',
  rating: 'rating',
  slider: 'slider',
  statusBar: 'statusBar',
  stickyPanel: 'stickyPanel',
  suggestionList: 'suggestionList',
  switcher: 'switcher',
  tabs: 'tabs',
  tags: 'tags',
  textarea: 'textarea',
  tooltip: 'tooltip',
  tour: 'tour',
  vstepper: 'vstepper',
  wizard: 'wizard',
} as const;

/** Error codes for DropZone, FileDrop и FileUpload */
export enum FileErrorCodes {
  None,
  FileIsTooSmall,
  FileIsTooBig,
  WrongFileFormat,
  AlreadyLoaded,
  TooManyFiles,
  NameIsTooLong,
}

/** Ошибки DropZone, FileDrop и FileUpload */
export const ERROR_MESSAGES = [
  { errorCode: FileErrorCodes.FileIsTooSmall, message: 'Файл меньше допустимого размера' },
  { errorCode: FileErrorCodes.FileIsTooBig, message: 'Превышен максимальный размер файла' },
  { errorCode: FileErrorCodes.WrongFileFormat, message: 'Недопустимый формат файла' },
  { errorCode: FileErrorCodes.AlreadyLoaded, message: 'Файл уже загружен' },
  { errorCode: FileErrorCodes.TooManyFiles, message: 'Превышено максимальное количество файлов' },
  { errorCode: FileErrorCodes.NameIsTooLong, message: 'Превышена максимальная длина имени файла' },
];

export const predefinedAllowedSymbols = {
  numbers: /\d/,
};

export const predefinedForbiddenSymbols = {
  numbers: /\d/,
};
