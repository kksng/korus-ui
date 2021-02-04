import * as React from 'react';
import { FileDropError } from '../../../../korus-ui/components/FileDrop/types';
import * as L from '../../../../korus-ui';

export const ScrollForm = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<FileDropError>(null);

  return (
    <L.Div _inner>
      <L.H2>Scroll to invalid fields form</L.H2>
      <L.Div _inner>
        <L.FileDrop
          className="fileDropScroll"
          value={file}
          error={error}
          onChange={(ev) => {
            if (!ev.component.error) {
              setFile(ev.component.value);
            }
            setError(ev.component.error);
          }}
          form="scroll"
          name="fileDropScroll"
          isRequired
        />
      </L.Div>
      <L.Div _inner>
        <L.DropZone
          className="dropZoneScroll"
          allowedFiles=".jpg, .gif, .png"
          form="scroll"
          name="dropZoneScroll"
          isRequired
        />
      </L.Div>
    </L.Div>
  );
};

export const SubmitScrollForm = () => {
  return (
    <L.Div _inner>
      <L.Button
        _warning
        shouldScrollToInvalidFields
        name="SubmitScroll"
        form="scroll"
        onClick={() => console.log('Submitted')}
        onValidationFail={() => console.log('Submit failed')}
      >
        Submit scroll form
      </L.Button>
    </L.Div>
  );
};
