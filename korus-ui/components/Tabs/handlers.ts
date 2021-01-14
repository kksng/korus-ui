import { isNil } from 'lodash';
import { CreateSelectHandler } from './types';

export const createSelectHandler: CreateSelectHandler = (props, activeTabKeyState, setActiveTabKeyState) => (ev, tabKey) => {
  const { activeTabKey, onChange } = props;
  // Если не передано activeTabKey - использовать стейт
  if (isNil(activeTabKey)) {
    setActiveTabKeyState(tabKey);
  }
  if (onChange) {
    const customEvent = {
      ...ev,
      component: {
        value: tabKey,
      },
    };

    onChange(customEvent);
  }
};
