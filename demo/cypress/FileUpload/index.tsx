import * as React from 'react';
import * as L from '../../../korus-ui';
import { Story } from '../../components/Story';
import { StoryProps } from '../../types';
import { RenderEvent } from '../../../korus-ui/commonTypes';
import { FileLoadEvent } from '../../../korus-ui/components/FileUpload/types';
import { StateButtonGroup } from '../../components/StateButtonGroup';

export const FileUpload = () => (
  <Story title="FileUpload">
    <Controlled title="Usage" />
  </Story>
);

export const Controlled = (storyProps: StoryProps) => {
  const [props, setProps] = React.useState({});
  const MyOwnWrapper = ({ someCustomPropHere, ...props }: any) => (
    <L.Button _warning {...props} />
  );

  const MyOwnInfo = (props: any) => <L.Span {...props} />;
  const infoRender = ({
    Element,
    elementProps,
    componentProps: { isLoading },
  }: RenderEvent<{ isLoading?: boolean }>) => (
    <Element {...elementProps} props={elementProps}>
      {isLoading ? 'Я загружаю!' : 'Я частично изменен!'}
    </Element>
  );
  return (
    <L.Div _box _inner _demoBg>
      <L.Div _controlled>
        <L.FileUpload
          allowedFiles=".jpg, .gif, .png, .txt, .jpeg"
          maxFileNameLength={10}
          name="controlledFileUpload"
          onChange={(ev) => {
            console.log('ev.component', ev.component);
            setProps({ isLoading: true });
            setTimeout(() => {
              setProps({ isLoading: false });
              alert(
                ev.component.error == null
                  ? 'Файл загружен!'
                  : ev.component.error.errorMessage
              );
            }, 2000);
          }}
          {...props}
        />
      </L.Div>

      <br />
      <br />
      <L.Div _custom>
        <L.FileUpload
          allowedFiles=".jpg, .gif, .png"
          name="customFileUpload"
          wrapperRender={({
            elementProps,
            componentProps: { isLoading },
          }: any) => (
            <MyOwnWrapper
              {...elementProps}
              someCustomPropHere="blah-blah-blah"
              isLoading={isLoading}
            />
          )}
          infoRender={({
            elementProps,
            componentProps: { isLoading },
          }: any) => (
            <MyOwnInfo {...elementProps}>
              {isLoading ? 'Идёт загрузка...' : 'Загрузить?'}
            </MyOwnInfo>
          )}
          maxFileSize={1500}
          onChange={(ev) => {
            setProps({ isLoading: true });
            setTimeout(() => {
              setProps({ isLoading: false });
              alert(
                ev.component.error == null
                  ? 'Файл загружен!'
                  : ev.component.error.errorMessage
              );
            }, 2000);
          }}
          {...props}
        />
      </L.Div>

      <br />
      <br />
      <L.Div _partialcustom>
        <L.FileUpload
          allowedFiles=".jpg, .gif, .png, .jpeg"
          name="partialCustomFileUpload"
          wrapperRender={({ Element, elementProps }: any) => (
            <>
              <Element
                {...elementProps}
                _inner
                _block
                _width10
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#1d9d59',
                  color: 'white',
                  borderRadius: '10px',
                }}
              >
                {React.Children.toArray(elementProps.children)[0]}
              </Element>
              {React.Children.toArray(elementProps.children)[1]}
            </>
          )}
          infoRender={infoRender}
          minFileSize={1500}
          maxFileSize={2000}
          onChange={(ev) => {
            setProps({ isLoading: true });
            setTimeout(() => {
              setProps({ isLoading: false });
              alert(
                ev.component.error == null
                  ? 'Файл загружен!'
                  : ev.component.error.errorMessage
              );
            }, 2000);
          }}
          {...props}
        />
      </L.Div>
    </L.Div>
  );
};
