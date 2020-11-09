import React from 'react';
import { PasswordVisibilityIconProps } from './types';
import { I } from '../I';

export const PasswordVisibilityIcon = (props: PasswordVisibilityIconProps) => {
  const { isVisible, theme, onIconClick } = props;

  return (
    <I
      className={isVisible ? theme.isVisibleIcon : theme.isHiddenIcon}
      onClick={(ev) => {
        onIconClick();
      }}
    />
  );
};
