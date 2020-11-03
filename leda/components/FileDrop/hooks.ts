import * as React from 'react';
import { useElement, useProps } from '~/utils';
import { Div } from '~/components/Div';
import { Button } from '~/components/Button';
import { LedaContext } from '~/components/LedaProvider';
import { COMPONENTS_NAMESPACES } from '~/constants';
import {
  CustomElements, FileDropProps, UploadButtonProps,
} from './types';

export const useCustomElements = (props: FileDropProps): CustomElements => {
  const {
    errorViewRender,
    infoRender,
    loadingViewRender,
    successViewRender,
    uploadButtonRender,
    wrapperRender,
  } = props;

  const context = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.dropZone].wrapperRender,
    props,
  );

  const ErrorItem = useElement(
    'ErrorItem',
    Div,
    errorViewRender || context.renders[COMPONENTS_NAMESPACES.dropZone].errorViewRender,
    props,
  );

  const LoadingItem = useElement(
    'LoadingItem',
    Div,
    loadingViewRender || context.renders[COMPONENTS_NAMESPACES.dropZone].loadingViewRender,
    props,
  );

  const SuccessItem = useElement(
    'SuccessItem',
    Div,
    successViewRender || context.renders[COMPONENTS_NAMESPACES.dropZone].successViewRender,
    props,
  );

  const DefaultItem = useElement(
    'DefaultItem',
    Div,
    infoRender || context.renders[COMPONENTS_NAMESPACES.dropZone].infoRender,
    props,
  );

  const UploadButton = useElement<FileDropProps, {}, UploadButtonProps>(
    'UploadButton',
    Button,
    uploadButtonRender || context.renders[COMPONENTS_NAMESPACES.dropZone].uploadButtonRender,
    props,
  );

  return {
    DefaultItem,
    ErrorItem,
    LoadingItem,
    SuccessItem,
    UploadButton,
    Wrapper,
  };
};

export const useFileDropRestProps = (props: FileDropProps): {} => {
  const {
    // не должно попасть в restProps
    acceptedFilesRender,
    allowedFiles,
    className,
    dropZoneFilesNode,
    errorViewRender,
    forbiddenFiles,
    invalidMessage,
    invalidMessageRender,
    isDisabled,
    isLoading,
    isRequired,
    isValid,
    loadingData,
    loadingProgress,
    loadingViewRender,
    maxFileNameLength,
    maxFileSize,
    maxFilesNumber,
    minFileSize,
    onChange,
    onDrop,
    onRemove,
    rejectedFilesRender,
    requiredMessage,
    shouldValidateUnmounted,
    infoRender,
    successViewRender,
    theme,
    uploadButtonRender,
    validator,
    value,
    // конец того, что не должно попасть в restProps
    ...restProps
  } = useProps(props);

  return restProps;
};
