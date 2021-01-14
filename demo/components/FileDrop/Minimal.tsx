import * as React from 'react';
import * as L from '../../../korus-ui';
import { FileDropError } from '../../../korus-ui/components/FileDrop/types';
import { StoryProps } from '../../types';

export const MinimalFileDrop = (storyProps: StoryProps) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<FileDropError>(null);

  return (
    <L.Div>
      <L.FileDrop
        value={file}
        error={error}
        onChange={(ev) => {
          console.log('droped', ev.component);
          console.log('ev.component.value', ev.component.value)
          if (!ev.component.error) {
            setFile(ev.component.value);
          }
          setError(ev.component.error);
        }}
      />
    </L.Div>
  );
};
