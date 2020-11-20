import * as React from 'react';
import * as L from '../../../leda';
import { FileDropError } from '../../../leda/components/FileDrop/types';
import { useInterval } from '../../../leda/utils';

export const FileDrop = () => {
  const [file1, setFile1] = React.useState<File | null>(null);
  const [error1, setError1] = React.useState<FileDropError>(null);
  const [file2, setFile2] = React.useState<File | null>(null);
  const [error2, setError2] = React.useState<FileDropError>(null);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loaded, setLoaded] = React.useState<number>(0);
  
  const handleChange1 = () => {
    setError1('some custom error');
  };
    
  const handleChange2 = (ev) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false);
      setLoaded(0);
      setFile2(ev.component.value)
    }, 2000);
  };

  useInterval(() => {
    setLoaded(loaded + 5);
  }, isLoading ? 100 : null);

  return (
    <L.Div _width40 _marginAuto _marginY>
      <L.FileDrop
        onChange={handleChange1}
        value={file1}
        error={error1}
        isRequired
        name="someName"
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
      />
      <L.Button name="loading" _warning onClick={() => {setIsLoading(!isLoading)}}>Loading</L.Button>
    </L.Div>
  );
};
