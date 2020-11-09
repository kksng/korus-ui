import * as React from 'react';
import * as L from '../../../leda';
import { FileDropError } from '../../../leda/components/FileDrop/types';

export const ErrorFileDrop = (props: { title: string }) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<FileDropError>(null);

  const handleChange = () => {
    setError('some custom error');
  };

  return (
    <L.Div _width40 _marginAuto _marginY>
      <L.FileDrop
        onChange={handleChange}
        value={file}
        error={error}
        isRequired
        name="someName"
      />
    </L.Div>
  );
};
