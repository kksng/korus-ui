import React from 'react';
import { I } from '~/components/I';
import { PasswordVisibilityIconProps } from './types';

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
