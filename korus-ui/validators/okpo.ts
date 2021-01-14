export const validateOkpo = (okpo: string | number): boolean => {
  if (!/^(\d{8}|\d{10})$/.test(okpo.toString())) return false;

  const okpoString = okpo.toString().slice(0, -1);

  const controlNumber = Number.parseInt(okpo.toString().slice(-1), 10);

  const checkSum = okpoString
    .split('')
    .map((item) => Number.parseInt(item, 10))
    .reduce((accum, value, index) => accum + value * (index + 1), 0);

  return checkSum % 11 === controlNumber;
};
