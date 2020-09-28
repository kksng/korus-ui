import { WizardStepItem } from './types';

/**
 * Helper checks if item is active
 * @param {number} currIndex - index of current item
 * @param {number} index - index of rendered item
 *
 * @returns {boolean}
 */
export const isActive = (currIndex: number, index: number): boolean => currIndex === index;

/**
 * Helper checks if item should have success class
 * @param {number} currIndex - index of current item
 * @param {number} index - index of rendered item
 *
 * @returns {boolean}
 */
export const isSuccess = (currIndex: number, index: number): boolean => !!(currIndex && currIndex > index);

/**
 * Helper gets index of current value
 * @param {string | WizardStepItem | undefined} value - value of current item
 * @param {WizardStepItem[] | string[]} data - array of values
 *
 * @returns {number} - index of current value
 */
export const getCurrentIndex = (value: string | WizardStepItem | undefined, data: WizardStepItem[] | string[]): number => {
  const currentIndex = value && (data as (string | WizardStepItem)[]).indexOf(value);
  return Number(currentIndex);
};
