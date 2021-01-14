import { isFunction, kebabCase } from 'lodash';
import { svgNamespacesDictionary } from '../../utils';
import { SvgProps } from './types';

export const extractIdAndNamespace = (props: SvgProps): SvgProps & { id: string, namespace: string } => Object.keys(props).reduce((acc, attr) => {
  if (svgNamespacesDictionary.includes(attr)) {
    return { ...acc, namespace: attr };
  }

  if (!isFunction((props as { [x: string]: unknown})[attr]) && attr !== 'style') { // исключить из поиска обработчики (onClick etc.)
    // не нужно передавать id, namespace дальше в элемент
    return { ...acc, id: kebabCase(attr) };
  }

  return { ...acc, [attr]: props[attr] };
}, {}) as SvgProps & { id: string, namespace: string };
