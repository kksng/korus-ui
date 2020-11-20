import React from 'react';
import { DropzoneRef, useDropzone } from 'react-dropzone';
import {
  bindFunctionalRef, getClassNames, getIsEmptyAndRequired, useProps, useTheme,
} from '../../utils';
import { MAX_FILE_SIZE } from '../../constants';
import { Div } from '../Div';
import { createChangeHandler, createClickHandler } from './handlers';
import {
  FileDropProps, FileDropRefCurrent,
} from './types';
import { useCustomElements, useFileDropRestProps } from './hooks';
import { SingleFileView } from './SingleFileView';
import { useValidation } from '../Validation';

export const FileDrop = React.forwardRef((props: FileDropProps, ref: React.Ref<FileDropRefCurrent>): React.ReactElement => {
  const {
    allowedFiles,
    className,
    error,
    isDisabled,
    isRequired,
    maxFileSize = MAX_FILE_SIZE,
    value,
  } = useProps(props);

  const fileDropRef = React.useRef<DropzoneRef | null>(null);

  const theme = useTheme(props.theme, 'fileDrop');

  const handleChange = createChangeHandler(props);

  const state = React.useMemo(() => ({ }), []);

  const extra = React.useMemo(() => ({ reset: () => handleChange([], []) }), [handleChange]);

  const { isValid, InvalidMessage, validateCurrent } = useValidation(props, state, extra);

  const handleClick = createClickHandler(props, fileDropRef);

  const combinedContentClassNames = getClassNames(theme.content, { [theme.disabled]: isDisabled });

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: allowedFiles,
    disabled: isDisabled,
    maxSize: maxFileSize,
    multiple: false,
    onDrop: (acceptedFiles, rejectedFiles, event) => {
      const newValue = handleChange(acceptedFiles, rejectedFiles, event as React.DragEvent<HTMLDivElement>);
      validateCurrent(error ? null : newValue);
    },
  });

  const combinedClassNames = getClassNames(
    className,
    theme.wrapper,
    {
      [theme.disabled]: isDisabled,
      [theme.invalid]: !isValid || error != null,
      [theme.required]: getIsEmptyAndRequired(value, isRequired),
    },
  );

  fileDropRef.current = { open };

  const {
    ErrorItem, SuccessItem, DefaultItem, UploadButton, Wrapper,
  } = useCustomElements(props);

  const rootProps = getRootProps();

  const restProps = useFileDropRestProps(props);

  const inputProps = { ...getInputProps(), ...restProps };

  return (
    <>
      <Wrapper
        className={combinedClassNames}
        ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
          input: component.wrapper && component.wrapper.querySelector('input'),
          wrapper: component.wrapper,
        }))}
      >
        <Div
          {...rootProps}
          onClick={handleClick}
          className={combinedContentClassNames}
          ref={(component) => {
            rootProps.ref.current = component ? component.wrapper : null;
          }}
        >
          <input {...inputProps} />
          {' '}
          <SingleFileView
            {...props}
            theme={theme}
            value={value}
            UploadButton={UploadButton}
            ErrorItem={ErrorItem}
            SuccessItem={SuccessItem}
            DefaultItem={DefaultItem}
          />
        </Div>
      </Wrapper>
      <InvalidMessage />
    </>
  );
}) as React.FC<FileDropProps>;

FileDrop.displayName = 'FileDrop';
