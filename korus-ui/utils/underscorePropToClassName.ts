import { kebabCase } from 'lodash';
import { UnderscoreClasses } from '../components/LedaProvider/underscoreClasses';


export const underscorePropToClassName = (prop: string, underscoreClassesTransform: UnderscoreClasses): string => {
  if (underscoreClassesTransform === UnderscoreClasses.CamelCaseTransform) {
    return kebabCase(prop.slice(1));
  }
  if (underscoreClassesTransform === UnderscoreClasses.NoTransform) {
    return prop.slice(1);
  }
  return prop.slice(1);
};
