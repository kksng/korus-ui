
// функции валидации ИНН на соответствие длине и контрольной сумме

const checksumIndexes: number[] = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

const calculateChecksum = (validatedPart: string, validationIndexes: number[]): number => validatedPart.split('')
  .reduce((acc, num, idx) => acc + (validationIndexes[idx] * Number(num)), 0)
  % 11 % 10;

// валидация ИНН физического лица
export const validateInnPrivate = (inn: number | string): boolean => {
  const innString: string = typeof inn === 'string' ? inn : inn.toString();

  const matchRegExp: boolean = /^\d{12}$/.test(innString);

  if (!matchRegExp) {
    return matchRegExp;
  }

  const validatedPart11: string = innString.substr(0, 10);
  const validationIndexes11: number[] = checksumIndexes.slice(1);
  const checksum11: number = calculateChecksum(validatedPart11, validationIndexes11);

  const validatedPart12: string = innString.substr(0, 11);
  const validationIndexes12: number[] = checksumIndexes.slice(0);
  const checksum12: number = calculateChecksum(validatedPart12, validationIndexes12);

  const matchChecksum: boolean = innString[10] === checksum11.toString() && innString[11] === checksum12.toString();

  return matchChecksum;
};

// валидация ИНН юридического лица
export const validateInnCorp = (inn: number | string): boolean => {
  const innString: string = typeof inn === 'string' ? inn : inn.toString();

  const matchRegExp: boolean = /^\d{10}$/.test(innString);

  if (!matchRegExp) {
    return matchRegExp;
  }

  const validatedPart: string = innString.substr(0, 9);
  const validationIndexes: number[] = checksumIndexes.slice(2);
  const checksum: number = calculateChecksum(validatedPart, validationIndexes);

  const matchChecksum: boolean = innString[9] === checksum.toString();

  return matchChecksum;
};

// универсальная валидация
export const validateInn = (innNumber: string | number): boolean => validateInnCorp(innNumber) || validateInnPrivate(innNumber);
