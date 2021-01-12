import { isFunction, isNil } from 'lodash';
import { CustomEventHandler, SetState } from '../../commonTypes';
import { ChangeEvent, SliderValue } from './types';

export const createChangeHandler = ({
  onMove, setValueState, name,
}: {
  name?: string,
  onMove?: (event: ChangeEvent) => void,
  setValueState: SetState<SliderValue>,
}): CustomEventHandler<SliderValue | null | undefined> => (value: SliderValue | null | undefined): void => {
  if (isFunction(onMove)) {
    const customEvent = {
      component: {
        name,
        value,
      },
    };
    onMove(customEvent);
  }

  if (isNil(value)) setValueState(0);
  else setValueState(value);
};

export const createAfterChangeHandler = ({
  name,
  onChange,
}: {
  name?: string,
  onChange?: (event: ChangeEvent) => void,
}): CustomEventHandler<SliderValue | null | undefined> => (value: SliderValue | null | undefined): void => {
  if (isFunction(onChange)) {
    const customEvent = {
      component: {
        name,
        value,
      },
    };
    onChange(customEvent);
  }
};
