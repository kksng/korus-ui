import * as React from 'react';
import { LedaContext } from '../components/LedaProvider';
import { mergeClassNames } from './mergeClassNames';

export const useProps = <Props>(props: Props) => {
  const { underscoreClassesTransform } = React.useContext(LedaContext);

  // собирает все _классы и объединяет их с классами из props.className и записывает в props.className
  return mergeClassNames(props, { underscoreClassesTransform });
};
