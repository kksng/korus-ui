/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StateButtonGroup } from '../StateButtonGroup';

const exampleCode = `
export const FullCustomized = () => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.FileUpload
        allowedFiles=".jpg, .gif, .png"
        wrapperRender={({ elementProps, componentProps: { isLoading } }: any) => <MyOwnWrapper {...elementProps} someCustomPropHere="blah-blah-blah" isLoading={isLoading} />}
        infoRender={({ elementProps, componentProps: { isLoading } }: any) => <MyOwnInfo {...elementProps}>{isLoading ? 'Идёт загрузка...' : 'Загрузить?'}</MyOwnInfo>}
        maxFileSize={1500}
        onFileLoad={(ev: any) => {
          console.log('Вы загрузили файл!', ev.component.acceptedFiles, ev.component.rejectedFiles);
          setProps({ isLoading: true });
          setTimeout(() => {
            setProps({ isLoading: false });
            alert(ev.component.acceptedFiles.length !== 0 ? 'Файл загружен!' : 'При загрузке возникла ошибка!');
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

`;

const MyOwnWrapper = ({ someCustomPropHere, ...props }: any) => <L.Button _warning {...props} />;

const MyOwnInfo = (props: any) => <L.Span {...props} />;

export const FullCustomized = (componentProps: any) => {
  const [props, setProps] = React.useState({});

  return (
    <L.Div _box _inner _demoBg>
      <L.FileUpload
        allowedFiles=".jpg, .gif, .png"
        wrapperRender={({ elementProps, componentProps: { isLoading } }: any) => <MyOwnWrapper {...elementProps} someCustomPropHere="blah-blah-blah" isLoading={isLoading} />}
        infoRender={({ elementProps, componentProps: { isLoading } }: any) => <MyOwnInfo {...elementProps}>{isLoading ? 'Идёт загрузка...' : 'Загрузить?'}</MyOwnInfo>}
        maxFileSize={1500}
        onFileLoad={ev => {
          console.log('Вы загрузили файл!', ev.component.value.acceptedFiles, ev.component.value.rejectedFiles);
          setProps({ isLoading: true });
          setTimeout(() => {
            setProps({ isLoading: false });
            alert(ev.component.value.acceptedFiles.length !== 0 ? 'Файл загружен!' : 'При загрузке возникла ошибка!');
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
