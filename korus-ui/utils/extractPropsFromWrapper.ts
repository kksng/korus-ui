// функция для получения враппера, переданного в виде JSX, без потомков

import * as React from 'react';

export const extractPropsFromWrapper = <T, P>(wrapper: React.ReactElement): Pick<P, Exclude<keyof P, 'children'>> => {
  const {
    props: {
      children,
      ...wrapperProps
    },
  } = wrapper;

  return { ...wrapperProps };
};
