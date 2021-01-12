import { TransitionOptions } from './types';

export const generateTransitionProperty = (options: TransitionOptions): string => {
  const {
    duration,
    animation,
    delay = 0,
  } = options;

  const durationString = typeof duration === 'string' ? duration : `${duration}ms`;
  const delayString = typeof delay === 'string' ? delay : `${delay}ms`;

  const properties = ['height', durationString, animation, delayString];

  return properties.join(' ');
};
