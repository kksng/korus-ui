import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  AcceptedFilesProps, CustomElements, DropZoneProps, DropZoneState, UploadButtonProps,
} from './types';
import { useElement, useProps } from '../../utils';
import { Div } from '../Div';
import { Span } from '../Span';
import { Ul } from '../Ul';
import { A } from '../A';
import { LedaContext } from '../LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';

const defaultAccepted = (elProps: AcceptedFilesProps): React.ReactElement => (elProps.dropZoneFilesNode
  ? ReactDOM.createPortal(elProps.children, elProps.dropZoneFilesNode)
  : elProps.children as React.ReactElement);

defaultAccepted.displayName = 'AcceptedFiles';

export const useCustomElements = (props: DropZoneProps, state: DropZoneState): CustomElements => {
  const {
    acceptedFilesRender, rejectedFilesRender, infoRender, uploadButtonRender, wrapperRender, loadingViewRender,
  } = props;

  const context = React.useContext(LedaContext);

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || context.renders[COMPONENTS_NAMESPACES.dropZone].wrapperRender,
    props,
    state,
  );

  const AcceptedFiles = useElement(
    'AcceptedFiles',
    defaultAccepted,
    acceptedFilesRender || context.renders[COMPONENTS_NAMESPACES.dropZone].acceptedFilesRender,
    props,
    state,
  );

  const RejectedFiles = useElement(
    'RejectedFiles',
    Ul,
    rejectedFilesRender || context.renders[COMPONENTS_NAMESPACES.dropZone].rejectedFilesRender,
    props,
    state,
  );

  const Info = useElement(
    'Info',
    Span,
    infoRender || context.renders[COMPONENTS_NAMESPACES.dropZone].infoRender,
    props,
    state,
  );

  const UploadButton = useElement<DropZoneProps, DropZoneState, UploadButtonProps>(
    'UploadButton',
    A,
    uploadButtonRender || context.renders[COMPONENTS_NAMESPACES.dropZone].uploadButtonRender,
    props,
    state,
  );

  return {
    AcceptedFiles,
    Info,
    RejectedFiles,
    UploadButton,
    Wrapper,
  };
};

export const useDropZoneRestProps = (props: DropZoneProps): {} => {
  const {
    // не должно попасть в restProps
    acceptedFilesRender,
    allowedFiles,
    className,
    dropZoneFilesNode,
    forbiddenFiles,
    infoRender,
    loadingProgress,
    loadingViewRender,
    maxFileNameLength,
    maxFileSize,
    maxFilesNumber,
    minFileSize,
    onDrop,
    onRemove,
    onChange,
    rejectedFilesRender,
    theme: themeProp,
    uploadButtonRender,
    value,
    isDisabled,
    requiredMessage,
    invalidMessageRender,
    invalidMessage,
    isLoading,
    isRequired,
    isValid,
    shouldValidateUnmounted,
    validator,
    wrapperRender,
    // конец того, что не должно попасть в restProps
    ...restProps
  } = useProps(props);

  return restProps;
};
