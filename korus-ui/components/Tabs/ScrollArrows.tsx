import React from 'react';
import { ArrowProps } from './types';

export const ArrowRight = ({ onClick, theme }: ArrowProps) => (
  <i
    className={theme?.arrowRight}
    onClick={onClick}
  />
);

export const ArrowLeft = ({ onClick, theme }: ArrowProps) => (
  <i
    onClick={onClick}
    className={theme?.arrowLeft}
  />
);
