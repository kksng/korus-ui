import { validate } from '../../validators';
import { NormalizedValidatorObject, PredefinedValidator } from './types';

export const PREDEFINED_VALIDATORS: Record<PredefinedValidator, NormalizedValidatorObject> = {
  cadastralNumber: {
    invalidMessage: 'Введите кадастровый номер',
    validator: validate.cadastralNumber,
  },
  email: {
    invalidMessage: 'Введите e-mail',
    validator: validate.email,
  },
  inn: {
    invalidMessage: 'Введите ИНН',
    validator: validate.inn,
  },
  innCorp: {
    invalidMessage: 'Введите ИНН юридического лица',
    validator: validate.innCorp,
  },
  innPrivate: {
    invalidMessage: 'Введите ИНН физического лица',
    validator: validate.innPrivate,
  },
  kpp: {
    invalidMessage: 'Введите КПП',
    validator: validate.kpp,
  },
  ogrn: {
    invalidMessage: 'Введите ОГРН',
    validator: validate.ogrn,
  },
  ogrnIp: {
    invalidMessage: 'Введите ОГРНИП',
    validator: validate.ogrnIp,
  },
  okpo: {
    invalidMessage: 'Введите ОКПО',
    validator: validate.okpo,
  },
  password: {
    invalidMessage: 'Пароль должен содержать не менее 8-и символов, латинские строчные, прописные буквы и цифры',
    validator: validate.password,
  },
  postalCode: {
    invalidMessage: 'Введите почтовый индекс',
    validator: validate.postalCode,
  },
  snils: {
    invalidMessage: 'Введите СНИЛС',
    validator: validate.snils,
  },
  url: {
    invalidMessage: 'Введите URL',
    validator: validate.url,
  },
};
