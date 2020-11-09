import { MaskRules } from './types';

export const baseMaskRules: MaskRules = {
  '#': {
    validate: (char: string) => /\d/.test(char),
  },
  C: {
    transform: (char: string) => char.toUpperCase(),
    validate: (char: string) => /[а-яА-Я]/.test(char),
  },
  L: {
    transform: (char: string) => char.toUpperCase(),
    validate: (char: string) => /[a-zA-Z]/.test(char),
  },
  c: {
    validate: (char: string) => /[а-яА-Я]/.test(char),
  },
  l: {
    validate: (char: string) => /[a-zA-Z]/.test(char),
  },
  w: {
    validate: (char: string) => /[0-9a-zA-Z]/.test(char),
  },
  x: {
    validate: () => true,
  },
  z: {
    validate: (char: string) => /[0-9a-zA-Zа-яА-Я]/.test(char),
  },
};

export enum INPUT_METHODS {
  add = 'add',
  // метод, обозначающий отсутствие изменений
  nothing = 'nothing',
  remove = 'remove',
  replace = 'replace'
}

export const DEFAULT_PLACEHOLDER_CHAR = '_';
