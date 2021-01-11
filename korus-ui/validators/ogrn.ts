
const checkOgrn = (ogrn: string | number, validLength: number): boolean => {
  const ogrnString = String(ogrn);

  const ogrnRegExp = `^\\d{${validLength}}$`;
  const isValidString: boolean = new RegExp(ogrnRegExp).test(ogrnString);

  if (!isValidString) {
    return false;
  }

  const ogrnPart: number = +ogrnString.substr(0, validLength - 1);
  const ogrnLastNumber: string = ogrnString.substr(-1);
  const checkNumber: string = (ogrnPart % (validLength - 2)).toString().substr(-1);

  const isValidOgrn: boolean = ogrnLastNumber === checkNumber;

  return isValidOgrn;
};

// функция валидации ОГРН юридического лица по контрольному числу
export const validateOgrn = (ogrnNumber: string | number): boolean => checkOgrn(ogrnNumber, 13);

// функция валидации ОГРНИП по контрольному числу
export const validateOgrnIp = (ogrnNumber: string | number): boolean => checkOgrn(ogrnNumber, 15);
