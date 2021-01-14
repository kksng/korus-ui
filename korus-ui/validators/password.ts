// a password length must be more than 8 symbols
// a password must contain digits and latin letters, both capital and lowercase
export const validatePassword = (value: string): boolean => {
  if (value.length < 8) return false;
  if (!/\d/.test(value)) return false;
  if (!/[A-Z]/.test(value)) return false;
  if (!/[a-z]/.test(value)) return false;
  return true;
};
