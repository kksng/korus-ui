import { MaskRules } from './types';

export const baseMaskRules: MaskRules = {
  '#': {
    validate: (char: string): boolean => /\d/.test(char),
  },
  C: {
    transform: (char: string): string => char.toUpperCase(),
    validate: (char: string): boolean => /[а-яА-Я]/.test(char),
  },
  L: {
    transform: (char: string): string => char.toUpperCase(),
    validate: (char: string): boolean => /[a-zA-Z]/.test(char),
  },
  c: {
    validate: (char: string): boolean => /[а-яА-Я]/.test(char),
  },
  l: {
    validate: (char: string): boolean => /[a-zA-Z]/.test(char),
  },
  w: {
    validate: (char: string): boolean => /[0-9a-zA-Z]/.test(char),
  },
  x: {
    validate: (): boolean => true,
  },
  z: {
    validate: (char: string): boolean => /[0-9a-zA-Zа-яА-Я]/.test(char),
  },
};

export enum INPUT_METHODS {
  add = 'add',
  // method indicating browser default autocomplete
  autocomplete = 'autocomplete',
  // method indicating no changes
  nothing = 'nothing',
  remove = 'remove',
  replace = 'replace'
}

export const DEFAULT_PLACEHOLDER_CHAR = '_';
