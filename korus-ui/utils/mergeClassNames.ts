import { isString } from 'lodash';
import { getClassNames } from './helpers';
import { SomeObject } from '../commonTypes';
import { UnderscoreClasses } from '../components/LedaProvider/underscoreClasses';
import { underscorePropToClassName } from './underscorePropToClassName';

// собирает все _классы и объединяет их с классами из props.className и записывает в props.className
export const mergeClassNames = <Props>(props: Props, { underscoreClassesTransform }: { underscoreClassesTransform: UnderscoreClasses }): Props & { className?: string } => {
  const classNames: Set<string> = new Set();
  const restProps: {[prop: string]: unknown} = {};
  const componentProps = props as unknown as SomeObject;

  Object.keys(componentProps)
    .forEach((prop: string): void => {
      // Если атрибут начинается со специального символа _ и он = true
      if (componentProps[prop] && prop[0] === '_' && componentProps[prop] === true) {
        const transformedClassName = underscorePropToClassName(prop, underscoreClassesTransform);

        // добавить в classNames
        classNames.add(transformedClassName);

        // если атрибут = false, но начинается с _, то ничего не делаем или если это className
      } else if ((componentProps[prop] === false && prop[0] === '_')) {

        // остальные атрибуты передаём без изменений
      } else {
        restProps[prop] = componentProps[prop];
      }
    });

  const restClassName = isString(restProps.className) ? restProps.className : null;

  const propsWithoutUnderscore: Props = restProps as unknown as Props;

  return {
    ...propsWithoutUnderscore,
    className: getClassNames(...classNames, restClassName),
  };
};
