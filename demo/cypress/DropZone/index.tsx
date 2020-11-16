import { isNil } from 'lodash';
import * as React from 'react';
import * as L from '../../../leda';
import { useInterval } from '../../../leda/utils';

export const DropZone = (): React.ReactElement => {
  const [value, setValue] = React.useState<L.DropZoneTypes.DropZoneFiles | null>({
    acceptedFiles: [{ name: 'external file', link: 'external file link' }],
    rejectedFiles: [],
  });
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = React.useState<number | undefined>(undefined);
  const [isCustomLoader, setIsCustomLoader] = React.useState<boolean>(false);

  useInterval(() => {
    setLoadingProgress((progress) => progress === 100 ? 0 : progress + 5);
  }, !isNil(loadingProgress) ? 100 : null);
  
  return (
    <L.Div _demoStory>
      <L.Span>Uncontrolled, without validation</L.Span>
      <L.DropZone />

      <L.Span>Uncontrolled, with required validation</L.Span>
      <L.DropZone
        form="dropzone-form"
        name="dropzone"
        isRequired
        requiredMessage="Files are required!"
      />

      <L.Button form="dropzone-form" >Submit</L.Button>

      <br />

      <L.Span>Controlled</L.Span>
      <L.DropZone
        className="controlledDZ"
        value={value}
        isLoading={isLoading}
        loadingProgress={loadingProgress}
        loadingViewRender={isCustomLoader && (() => <L.Span _txtSuccess>Custom loader...</L.Span>)}
        onChange={({ component: { value } }) => setValue(value)}
        isRequired
        isDisabled={isDisabled}
      />
      <br />
      <L.Button _warning onClick={() => setValue(null)}>Set state as null</L.Button>
      <br />
      <br />
      <L.Button _warning name="disable" onClick={() => setIsDisabled(!isDisabled)}>Disable / Enable</L.Button>
      <br />
      <br />
      <L.Button _warning name="loader" onClick={() => setIsLoading(!isLoading)}>Show/hide loader</L.Button>
      <br />
      <br />
      <L.Button _warning name="progressLoader" onClick={() => {setLoadingProgress(progress => isNil(progress) ? 0 : undefined); setIsLoading(!isLoading); }}>Show/hide progress</L.Button>
      <br />
      <br />
      <L.Button _warning name="customLoader" onClick={() => {setIsCustomLoader(!isCustomLoader); setIsLoading(!isLoading); }}>Set/remove Custom Loader</L.Button>
      <br />

      <L.Span>Uncontrolled (prop value is null)</L.Span>
      <L.DropZone
        form="dropzone-null"
        name="dropzone"
        value={null}
        isRequired
        requiredMessage="Files are required!"
      />
      <br />
      <L.Button form="dropzone-null" >Submit null value</L.Button>
    </L.Div>
  );
};
