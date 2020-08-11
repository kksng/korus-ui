export const COMPONENT_TYPES = {
  DATE_ONLY: 'date-only',
  TIME_ONLY: 'time-only',
  DATE_TIME: 'date-time',
} as const;

export const HOURS_LIMITS: [number, number] = [0, 23];

export const MINUTES_LIMITS: [number, number] = [0, 59];

export const MONTHS_IN_ROW = 4;

export const YEARS_IN_ROW = 4;

export const DAYS_IN_WEEK = 7;

export const KEYS = {
  LEFT: 'ArrowLeft',
  LEFT_IE: 'Left',
  RIGHT: 'ArrowRight',
  RIGHT_IE: 'Right',
  UP: 'ArrowUp',
  UP_IE: 'Up',
  DOWN: 'ArrowDown',
  DOWN_IE: 'Down',
  ENTER: 'Enter',
  ESC: 'Escape',
  ESC_IE: 'Esc',
  TAB: 'Tab',
} as const;
