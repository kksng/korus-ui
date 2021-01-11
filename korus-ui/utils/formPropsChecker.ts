type CheckFormProps = {
  form?: string,
  name?: [string | undefined, string | undefined] | string,
};
/**
 * Выводить ошибку при переданном form и не переданном name
 * @param { name?: string, form?: string } название формы и имя поля
 */
export const checkFormProps = ({ name, form }: CheckFormProps): void => {
  if (!name && form) {
    // eslint-disable-next-line no-console
    // console.trace();
    console.error('prop "name" must be provided with "form"');
  }
};
