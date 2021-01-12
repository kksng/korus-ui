import * as React from 'react';
import { isFunction, isNil } from 'lodash';
import { SwitcherProps } from './types';

export const createClickHandler = (props: SwitcherProps, stateValue: boolean, setStateValue: React.Dispatch<React.SetStateAction<boolean>>) => (ev: React.MouseEvent<HTMLDivElement>): void => {
  const {
    isDisabled, onClick, onChange, name, value: valueProp,
  } = props;

  if (isDisabled) return;

  // Проверяем, контролируемый ли компонент через наличие пропсы value
  const isControlled = !isNil(valueProp);

  // Если компонент контролируемый, берем value из пропсы, если нет - из стейта и инвертируем значение
  const value = isControlled ? !valueProp : !stateValue;

  // Обрабатываем неконтролируемый режим
  if (!isControlled) setStateValue(value);

  if (isFunction(onClick)) onClick(ev);

  if (isFunction(onChange)) {
    const customEvent = {
      ...ev,
      component: {
        name,
        value,
      },
    };

    onChange(customEvent);
  }
};
