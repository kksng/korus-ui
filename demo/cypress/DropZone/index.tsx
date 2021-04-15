import { isNil } from 'lodash';
import * as React from 'react';
import * as L from '../../../korus-ui';
import { useElementRef, useInterval } from '../../../korus-ui/utils';

export const DropZone = (): React.ReactElement => {
  const [value, setValue] = React.useState<L.DropZoneTypes.DropZoneFiles | null>({
    acceptedFiles: [{ link: 'external file link', name: 'external file' }],
    rejectedFiles: [],
  });
  const [value1, setValue1] = React.useState<L.DropZoneTypes.DropZoneFiles | null>({
    acceptedFiles: [{ link: 'external file link', name: 'external file' }],
    rejectedFiles: [{ link: 'rejected file link', name: 'rejected file' }],
  });
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = React.useState<number | undefined>(undefined);
  const [isCustomLoader, setIsCustomLoader] = React.useState<boolean>(false);

  const [Element, ref] = useElementRef();

  useInterval(() => {
    setLoadingProgress((progress): number | undefined => {
      if (progress === undefined) return undefined;
      if (progress === 100) return 0;
      return progress + 5;
    });
  }, !isNil(loadingProgress) ? 100 : null);

  return (
    <L.Div _demoStory>
      <L.Span>Uncontrolled, without validation</L.Span>
      <L.DropZone />

      <L.Span>Uncontrolled, with required validation</L.Span>
      <L.DropZone
        form="dropzone-form"
        name="uncontrolledWithValidation"
        isRequired
        requiredMessage="Files are required!"
        onChange={(): void => console.log('File attached')}
      />

      <L.Button id="submit" form="dropzone-form">Submit</L.Button>

      <br />

      <L.Span>Controlled</L.Span>
      <L.DropZone
        _underliningClassName
        className="controlledDZ"
        id="controlledDZ"
        value={value}
        isLoading={isLoading}
        loadingProgress={loadingProgress}
        loadingViewRender={isCustomLoader ? ((): React.ReactElement => <L.Span _txtSuccess>Custom loader...</L.Span>) : undefined}
        onChange={(ev: L.DropZoneTypes.ChangeEvent): void => setValue(ev.component.value)}
        isRequired
        isDisabled={isDisabled}
      />
      <br />
      <L.Button _warning id="stateAsNull" onClick={(): void => setValue(null)}>Set state as null</L.Button>
      <br />
      <br />
      <L.Button _warning id="disable" onClick={(): void => setIsDisabled(!isDisabled)}>Disable / Enable</L.Button>
      <br />
      <br />
      <L.Button _warning id="loader" onClick={(): void => setIsLoading(!isLoading)}>Show/hide loader</L.Button>
      <br />
      <br />
      <L.Button _warning id="progressLoader" onClick={(): void => { setLoadingProgress((progress) => (isNil(progress) ? 0 : undefined)); setIsLoading(!isLoading); }}>Show/hide progress</L.Button>
      <br />
      <br />
      <L.Button _warning id="customLoader" onClick={(): void => { setIsCustomLoader(!isCustomLoader); setIsLoading(!isLoading); }}>Set/remove Custom Loader</L.Button>
      <br />

      <L.Span>Uncontrolled (prop value is null)</L.Span>
      <L.DropZone
        form="dropzone-null"
        name="dropzone"
        value={null}
        isRequired
        requiredMessage="Files are required!"
        onClick={(): void => console.log('Clicked')}
      />
      <br />
      <L.Button id="nullValue" form="dropzone-null">Submit null value</L.Button>
      <br />
      <L.Span>Customized</L.Span>
      <L.DropZone
        _width-50
        form="dropzoneCustom"
        name="dropzoneCustom"
        isRequired
        dropZoneFilesNode={Element || undefined}
        uploadButtonRender={(): React.ReactElement => <L.Button _customizedButton>Drop Me</L.Button>}
        infoRender={(): React.ReactElement => <L.Span _customizedDropzone>Drop here</L.Span>}
      />
      <br />
      <L.Span>Rendering file list</L.Span>
      <L.DropZone
        name="renderedFileList"
        form="renderedFileList"
        value={value1}
      />
      <br />
      <L.Span>For onChange handler when file removed</L.Span>
      <L.DropZone
        form="forOnChange"
        name="forOnChange"
        onChange={(): void => console.log('File removed')}
      />
      <br />
      <br />
      <br />
      <L.Div _dropZoneFilesNode ref={ref} />
    </L.Div>
  );
};
