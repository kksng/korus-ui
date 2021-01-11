
// функция валидации СНИЛС по контрольной сумме


export const validateSnils = (snils: number | string = ''): boolean => {
  if (typeof snils === 'number') return validateSnils(`${snils}`);

  const indexArray: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const pureSnils: string[] = [...snils.replace(/[^\d]/g, '')];

  if (pureSnils.length !== 11) return false;

  const checkSumm: number = +pureSnils.splice(-2, 2).join('');
  const snilsNumber: number[] = pureSnils.map((num) => +num);

  const firstSumm: number = snilsNumber.reduce((acc, num, idx) => acc + (num * indexArray[idx]), 0);

  const compareWithCheckSum = (summ: number): boolean => {
    if (summ > 101) {
      return compareWithCheckSum(summ % 101);
    }
    if (summ < 100) {
      return checkSumm === summ;
    }
    return checkSumm === 0;
  };

  return compareWithCheckSum(firstSumm);
};
