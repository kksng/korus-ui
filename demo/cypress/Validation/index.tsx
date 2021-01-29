import * as React from 'react';
import * as L from '../../../korus-ui';
import { FileDropError } from '../../../korus-ui/components/FileDrop/types';

export const Validation = () => {
  const [isValid, setIsValid] = React.useState(true);
  const [message, setMessage] = React.useState('');

  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<FileDropError>(null);

  return (
    <L.Div _box _inner>
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

      <L.Div _inner>
        <L.H2>Controlled validation form</L.H2>
        <L.Div _inner>
          <L.Input
            isValid={isValid}
            invalidMessage="The app decides component to have invalid content"
            form="formIsValid"
            name="InputCV"
            placeholder="outer isValid"
          />
          <L.Button name="Toggle" onClick={() => setIsValid(!isValid)} _warning>
            Toggle isValid
          </L.Button>
        </L.Div>
        <L.Div _inner>
          <L.Button
            _warning
            name="SubmitCV"
            form="formIsValid"
            onClick={() => setMessage('Submitted')}
            onValidationFail={() => setMessage('Submit failed')}
          >
            Submit
          </L.Button>
        </L.Div>
      </L.Div>

      <L.Div _inner>
        <L.Div name="Message">{message}</L.Div>
      </L.Div>

      <L.Div style={{ height: '1000px' }} />

      <L.Div _inner>
        <L.Button
          _warning
          shouldScrollToInvalidFields
          name="SubmitScroll"
          form="scroll"
          onClick={() => setMessage('Submitted')}
          onValidationFail={() => setMessage('Submit failed')}
        >
          Submit scroll form
        </L.Button>
      </L.Div>
    </L.Div>
  );
};
