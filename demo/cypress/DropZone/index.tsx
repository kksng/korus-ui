import * as React from 'react';
import * as L from '../../../leda';

export const DropZone = (): React.ReactElement => {
  const [value, setValue] = React.useState<L.DropZoneTypes.DropZoneFiles | null>({
    acceptedFiles: [{ name: 'external file', link: 'external file link' }],
    rejectedFiles: [],
  });
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

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
        value={value}
        onChange={({ component: { value } }) => setValue(value)}
        isRequired
        isDisabled={isDisabled}
      />
      <br />
      <L.Button onClick={() => setValue(null)}>Set state as null</L.Button>
      <br />
      <L.Button name="disable" onClick={() => setIsDisabled(!isDisabled)}>Disable / Enable</L.Button>
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
