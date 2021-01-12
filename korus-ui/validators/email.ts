
const emailRegExp = /^(\w|-|\.)+@(\w|-)+\.((\w|-)+\.)*\w+$/;

export const validateEmail = (value: string): boolean => emailRegExp.test(value);
