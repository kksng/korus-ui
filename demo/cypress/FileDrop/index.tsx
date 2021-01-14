import * as React from 'react';
import * as L from '../../../korus-ui';
import { FileDropError } from '../../../korus-ui/components/FileDrop/types';
import { useInterval } from '../../../korus-ui/utils';

export const FileDrop = () => {
  const [file1, setFile1] = React.useState<File | null>(null);
  const [error1, setError1] = React.useState<FileDropError>(null);
  const [file2, setFile2] = React.useState<File | null>(null);
  const [error2, setError2] = React.useState<FileDropError>(null);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loaded, setLoaded] = React.useState<number>(0);

  const handleChange1 = (ev) => {
    setError1('some custom error');
    console.log(ev.component);
  };

  const handleChange2 = (ev) => {
    console.log(ev.component);

    if (ev.component.value) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setLoaded(0);
        setFile2(ev.component.value);
      }, 2000);
    } else {
      setFile2(ev.component.value);
    }
  };

  useInterval(
    () => {
      setLoaded(loaded + 5);
    },
    isLoading ? 100 : null
  );

  return (
    <L.Div _width40 _marginAuto _marginY>
      <L.FileDrop
        onChange={handleChange1}
        value={file1}
        error={error1}
        isRequired
        name="FDwithError"
        form="file-drop"
      />
      <br />
      <br />
      <br />
      <L.FileDrop
        onChange={handleChange2}
        value={file2}
        error={error2}
        isLoading={isLoading}
        loadingProgress={loaded}
        loadingText="Loading..."
        name="FDwithLoader"
        form="file-drop"
      />{' '}
      <L.Button
        name="loading"
        _warning
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        Loading
      </L.Button>{' '}
      <L.Button
        name="reset"
        onClick={() => {
          L.form('file-drop').reset();
          setError1(null);
        }}
      >
        Reset
      </L.Button>
    </L.Div>
  );
};
