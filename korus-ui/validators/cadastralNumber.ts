
const cadastralNumberRegexp = /^\d{2}:\d{2}:\d{6,7}:\d+$/;

export const validateCadastralNumber = (value: string): boolean => cadastralNumberRegexp.test(value);
