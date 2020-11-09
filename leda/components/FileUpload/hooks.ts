import * as React from 'react';
import { CustomElements, FileUploadProps } from './types';
import { useElement } from '../../utils';
import { A } from '../A';
import { Span } from '../Span';
import { LedaContext } from '../LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';

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
