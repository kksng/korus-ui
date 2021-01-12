
const postalCodeRegExp = /^\d{6}$/;

export const validatePostalCode = (value: string | number): boolean => postalCodeRegExp.test(value.toString());
