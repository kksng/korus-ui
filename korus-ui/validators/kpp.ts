export const validateKpp = (kpp: string | number): boolean => {
  const kppString = kpp.toString();

  if (kppString.length !== 9) return false;

  return /^\d{4}[\dA-Z]{2}\d{3}$/.test(kppString);
};
