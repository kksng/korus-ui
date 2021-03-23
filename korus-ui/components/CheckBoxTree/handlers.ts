import { isFunction } from 'lodash';
import { ChangeEventHandler, HandlerData } from './types';

/**
 * Creates change event handler
 * @param {HandlerProps} props
 *
 * @returns {ChangeEventHandler}
 */
export const createChangeHandler = ({
  onChange,
  selected,
  selectedGroups,
}: HandlerData): ChangeEventHandler => () => {
  if (!isFunction(onChange)) return;

  const customEvent = {
    component: {
      selected,
      selectedGroups,
    },
  };

  onChange(customEvent);
};
