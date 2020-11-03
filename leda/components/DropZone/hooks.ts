import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useElement, useProps } from '~/utils';
import { Div } from '~/components/Div';
import { Span } from '~/components/Span';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { Ul } from '~/components/Ul';
import { Button } from '~/components/Button';
import { LedaContext } from '~/components/LedaProvider';
import {
  AcceptedFilesProps, CustomElements, DropZoneProps, DropZoneState, UploadButtonProps,
} from './types';

const defaultAccepted = (elProps: AcceptedFilesProps): React.ReactElement => (elProps.dropZoneFilesNode
  ? ReactDOM.createPortal(elProps.children, elProps.dropZoneFilesNode)
  : elProps.children as React.ReactElement);

defaultAccepted.displayName = 'AcceptedFiles';

export const useCustomElements = (props: DropZoneProps, state: DropZoneState): CustomElements => {
  const {
    acceptedFilesRender, rejectedFilesRender, infoRender, uploadButtonRender, wrapperRender,
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
    Button,
    uploadButtonRender || context.renders[COMPONENTS_NAMESPACES.dropZone].uploadButtonRender,
    props,
    state,
  );

  return {
    AcceptedFiles,
    RejectedFiles,
    UploadButton,
    Info,
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
