import * as React from 'react';
import { DropzoneRef, useDropzone } from 'react-dropzone';
import { bindFunctionalRef, useProps } from '../../utils';
import { MAX_FILE_SIZE, MIN_FILE_SIZE } from '../../constants';
import { Div } from '../Div';
import { createChangeHandler, createClickHandler, createLoadHandler } from './handlers';
import { FileUploadProps, FileUploadRefCurrent } from './types';
import { useCustomElements } from './hooks';
import { useValidation } from '../Validation';

export const FileUpload = React.forwardRef((props: FileUploadProps, ref: React.Ref<FileUploadRefCurrent>): React.ReactElement => {
  const {
    allowedFiles,
    forbiddenFiles,
    className,
    isLoading,
    maxFileSize = MAX_FILE_SIZE,
    minFileSize = MIN_FILE_SIZE,
    onChange,
    onClick,
    onFileLoad,
    ref: refProp, // exclude from restProps
    infoRender,
    wrapperRender,
    validator,
    shouldValidateUnmounted,
    isValid: isValidProp,
    isRequired,
    invalidMessage,
    invalidMessageRender,
    requiredMessage,
    ...restProps
  } = useProps(props);

  const fileUploadRef = React.useRef<DropzoneRef | undefined>();

  const handleClick = createClickHandler({ ...props, fileUploadRef });

  const handleLoad = createLoadHandler(props);
  const handleChange = createChangeHandler(props);

  const state = React.useMemo(() => ({ }), []);

  const extra = React.useMemo(() => ({ reset: () => handleLoad([], []) }), [handleLoad]);

  const { isValid, InvalidMessage, validateCurrent } = useValidation(props, state, extra);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: allowedFiles,
    maxSize: maxFileSize,
    minSize: minFileSize,
    multiple: false,
    onDrop: (acceptedFiles, rejectedFiles) => {
      const newValue = handleLoad(acceptedFiles, rejectedFiles);
      validateCurrent(newValue);
      handleChange(acceptedFiles, rejectedFiles);
    },
  });

  fileUploadRef.current = { open };

  const { Wrapper, Info } = useCustomElements(props);

  const rootProps = getRootProps();

  return (
    <>
      <Wrapper
        className={className}
        onClick={handleClick}
        aria-invalid={!isValid}
        ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
          wrapper: component.wrapper || component,
        }))}
      >
        <Info>
          {isLoading ? 'Загрузка...' : 'Загрузить'}
        </Info>
        <Div
          {...rootProps}
          ref={(component) => {
            rootProps.ref.current = component ? component.wrapper : null;
          }}
        >
          <input {...restProps} {...getInputProps()} />
        </Div>
      </Wrapper>
      <InvalidMessage />
    </>
  );
}) as React.FC<FileUploadProps>;

FileUpload.displayName = 'FileUpload';
