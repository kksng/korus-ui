import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';
import { StateButtonGroup } from '../StateButtonGroup';

export const Controlled = (storyProps: StoryProps) => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.FileUpload
        allowedFiles=".jpg, .gif, .png"
        maxFileSize={1500000000}
        maxFileNameLength={10}
        onChange={(ev) => {
          console.log('ev.component', ev.component);
          setProps({ isLoading: true });
          setTimeout(() => {
            setProps({ isLoading: false });
            alert(ev.component.error == null ? 'Файл загружен!' : ev.component.error.errorMessage);
          }, 2000);
        }}
        {...props}
      />
      <br />
      <br />
      <StateButtonGroup
        data={[
          {
            text: 'Default',
            props: {},
          },
          {
            text: 'Loading',
            props: { isLoading: true },
          },
        ]}
        setProps={setProps}
      />
    </L.Div>
  );
};
