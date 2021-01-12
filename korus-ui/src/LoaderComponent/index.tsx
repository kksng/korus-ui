import * as React from 'react';
import { isNil } from 'lodash';
import { ProgressLoader } from './ProgressLoader';
import { Span } from '../../components/Span';
import { LoadingComponentProps } from './types';
import {
  getClassNames, useElement, useProps, useTheme,
} from '../../utils';
import { Div } from '../../components/Div';
import { LedaContext } from '../../components/LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { defaultText } from './constants';


export const LoaderComponent = (props: LoadingComponentProps) => {
  const {
    className,
    theme: themeProp,
    text: textProp,
    isLoading,
    loadingProgress,
    loadingViewRender,
    ...restProps
  } = useProps(props);

  const context = React.useContext(LedaContext);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.loaderComponent);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    loadingViewRender || context.renders[COMPONENTS_NAMESPACES.loaderComponent].loadingViewRender,
    props,
  );

  const wrapperClassName = getClassNames(
    className,
    [theme.wrapper],
  );

  if (!isLoading) return null;

  const text = isNil(textProp) ? defaultText : textProp;

  return (
    <Wrapper className={wrapperClassName} {...restProps}>
      <ProgressLoader loadingProgress={loadingProgress} isLoading theme={theme} />
      <Span>{text}</Span>
    </Wrapper>
  );
};

LoaderComponent.displayName = 'LoaderComponent';
