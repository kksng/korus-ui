import * as React from 'react';
import * as L from '../../../leda';
import { useInterval } from '../../../leda/utils';
import { FileDropError } from '../../../leda/components/FileDrop/types';
import { DescriptionMessage } from '../../../leda/components/FileDrop/helpers';
import * as messages from '../../../leda/messages';

export const ControlledFileDrop = (props: { title: string }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<FileDropError>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [shouldError, setShouldError] = React.useState<boolean>(false);
  const [loaded, setLoaded] = React.useState<number>(0);
  const [isDisabledUploading, setIsDisabledUploading] = React.useState<boolean>(false);

  useInterval(() => {
    setLoaded(loaded + 5);
  }, isLoading ? 100 : null);

  return (
    <L.Div _box _inner>
      <L.FileDrop
        allowedFiles=".jpg, .gif, .png"
        value={file}
        form="fa-drop"
        name="file"
        isRequired
        requiredMessage="Файл обязателен, сэр"
        maxFileSize={1000000}
        isLoading={isLoading}
        isDisabled={isDisabledUploading}
        loadingProgress={loaded}
        error={error}
        maxFileNameLength={250}
        onChange={(ev) => {
          console.log('droped', ev.component);
          setFile(ev.component.value);
          setError(ev.component.error);
          if (ev.component.value) {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              setLoaded(0);
              if (shouldError) {
                setError('Server error');
                setFile(null);
              }
            }, 2000);
          }
        }}
      />
      <br />
      <br />
      <L.Switcher value={shouldError} onChange={() => setShouldError(!shouldError)}>should fail</L.Switcher>
      <br />
      <L.Switcher value={isDisabledUploading} onChange={() => setIsDisabledUploading(!isDisabledUploading)}>no more uploads</L.Switcher>
      <br />
      <br />
      <L.Button
        _warning
        _marginTop
        form="fa-drop"
        onClick={(ev) => {
          alert('success');
          console.log(ev.form);
        }}
      >
        Validate
      </L.Button>
      <br />
      <br />
      <L.Button onClick={() => L.form('fa-drop').reset()}>
        Reset
      </L.Button>
    </L.Div>
  );
};
