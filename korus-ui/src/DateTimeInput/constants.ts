export const COMPONENT_TYPES = {
  DATE_ONLY: 'date-only',
  DATE_TIME: 'date-time',
  TIME_ONLY: 'time-only',
} as const;

export const HOURS_LIMITS = [0, 23];

export const MINUTES_LIMITS = [0, 59];

export const MONTHS_IN_ROW = 4;

export const YEARS_IN_ROW = 4;

export const DAYS_IN_WEEK = 7;

export const KEYS = {
  DOWN: 'ArrowDown',
  DOWN_IE: 'Down',
  ENTER: 'Enter',
  ESC: 'Escape',
  ESC_IE: 'Esc',
  LEFT: 'ArrowLeft',
  LEFT_IE: 'Left',
  RIGHT: 'ArrowRight',
  RIGHT_IE: 'Right',
  TAB: 'Tab',
  UP: 'ArrowUp',
  UP_IE: 'Up',
} as const;

export const DEFAULT_FORMAT = 'dd.MM.yyyy hh:mm';
