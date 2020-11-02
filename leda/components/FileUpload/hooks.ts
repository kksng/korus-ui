import * as React from 'react';
import { useElement } from '~/utils';
import { A } from '~/components/A';
import { Span } from '~/components/Span';
import { LedaContext } from '~/components/LedaProvider';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { CustomElements, FileUploadProps } from './types';

export const useCustomElements = (props: FileUploadProps): CustomElements => {
  const { wrapperRender, infoRender } = props;

  const context = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    A,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.fileUpload].wrapperRender,
    props,
  );

  const Info = useElement(
    'Info',
    Span,
    infoRender || context.renders[COMPONENTS_NAMESPACES.fileUpload].infoRender,
    props,
  );

  return {
    Wrapper,
    Info,
  };
};
