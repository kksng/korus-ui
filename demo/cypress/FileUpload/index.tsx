import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';
import { RenderEvent } from '../../../korus-ui/commonTypes';

export const FileUpload = (storyProps: StoryProps) => {
  const [props, setProps] = React.useState({});
  const MyOwnWrapper = ({ someCustomPropHere, ...props }: any) => <L.Button _warning {...props} />;
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
    <L.Div _box _inner>
      <L.Div _inner>
        <L.H4>Controlled mode</L.H4>
        <L.FileUpload
          _controlled
          allowedFiles=".jpg, .gif, .png, .txt, .jpeg"
          maxFileNameLength={10}
          id="controlledFileUpload"
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
      </L.Div>
      <L.Div _inner>
        <L.H4>Customization mode</L.H4>
        <L.FileUpload
          _custom
          allowedFiles=".jpg, .gif, .png"
          id="customFileUpload"
          wrapperRender={({ elementProps, componentProps: { isLoading } }: any) => <MyOwnWrapper {...elementProps} someCustomPropHere="blah-blah-blah" isLoading={isLoading} />}
          infoRender={({ elementProps, componentProps: { isLoading } }: any) => <MyOwnInfo {...elementProps}>{isLoading ? 'Идёт загрузка...' : 'Загрузить?'}</MyOwnInfo>}
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
      <L.Div _inner>
        <L.H4>Partial customization</L.H4>
        <L.FileUpload
          _partialcustom
          allowedFiles=".jpg, .gif, .png, .jpeg"
          id="partialCustomFileUpload"
          wrapperRender={({ Element, elementProps }: any) => (
            <>
              <Element
                {...elementProps}
                _inner
                _block
                _width10
                style={{
                  backgroundColor: '#1d9d59',
                  borderRadius: '10px',
                  color: 'white',
                  cursor: 'pointer',
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
      <L.Div _inner>
        <L.H4>Work with isLoading prop</L.H4>
        <L.FileUpload
          _loaded
          _underlining
          className="className"
          isLoading
          onClick={() => console.log('Clicked')}
          infoRender={({ elementProps, componentProps: { isLoading } }: any) => <MyOwnInfo {...elementProps}>{isLoading ? 'Идёт загрузка...' : 'Загрузить?'}</MyOwnInfo>}
        />
      </L.Div>
    </L.Div>
  );
};
