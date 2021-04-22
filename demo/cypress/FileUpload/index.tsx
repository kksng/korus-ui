import * as React from 'react';
import { string } from 'prop-types';
import * as L from '../../../korus-ui';
import { RenderEvent } from '../../../korus-ui/commonTypes';

export const FileUpload = (): React.ReactElement => {
  const [props, setProps] = React.useState({});

  const MyOwnWrapper: React.FC<{isLoading?: boolean, someCustomPropHere: string}> = ({ someCustomPropHere, ...myOwnWrapperProps }) => (
    <L.Button _warning {...myOwnWrapperProps} />
  );
  MyOwnWrapper.propTypes = {
    someCustomPropHere: (string),
  };

  const MyOwnInfo: React.FC<{}> = (myOwnInfoProps) => <L.Span {...myOwnInfoProps} />;

  const infoRender = ({
    Element,
    elementProps,
    componentProps: { isLoading },
  }: RenderEvent<{ isLoading?: boolean }>): React.ReactElement => (
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
          onChange={(ev): void => {
            console.log('ev.component', ev.component);
            setProps({ isLoading: true });
            setTimeout(() => {
              setProps({ isLoading: false });
              // eslint-disable-next-line no-alert
              alert(
                ev.component.error == null
                  ? 'Файл загружен!'
                  : ev.component.error.errorMessage,
              );
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
          wrapperRender={({
            elementProps,
            componentProps: { isLoading },
          }: RenderEvent<{ isLoading?: boolean }>): React.ReactElement => (
            <MyOwnWrapper
              {...elementProps}
              someCustomPropHere="blah-blah-blah"
              isLoading={isLoading}
            />
          )}
          infoRender={({
            elementProps,
            componentProps: { isLoading },
          }: RenderEvent<{ isLoading?: boolean }>): React.ReactElement => (
            <MyOwnInfo {...elementProps}>
              {isLoading ? 'Идёт загрузка...' : 'Загрузить?'}
            </MyOwnInfo>
          )}
          maxFileSize={1500}
          onChange={(ev): void => {
            setProps({ isLoading: true });
            setTimeout(() => {
              setProps({ isLoading: false });
              // eslint-disable-next-line no-alert
              alert(
                ev.component.error == null
                  ? 'Файл загружен!'
                  : ev.component.error.errorMessage,
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
          wrapperRender={({ Element, elementProps }: RenderEvent<{}, {}, {children?: React.ReactElement}>): React.ReactElement => (
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
          onChange={(ev): void => {
            setProps({ isLoading: true });
            setTimeout(() => {
              setProps({ isLoading: false });
              // eslint-disable-next-line no-alert
              alert(
                ev.component.error == null
                  ? 'Файл загружен!'
                  : ev.component.error.errorMessage,
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
          onClick={(): void => console.log('Clicked')}
          infoRender={({ elementProps, componentProps: { isLoading } }: RenderEvent<{isLoading?: boolean}>): React.ReactElement => <MyOwnInfo {...elementProps}>{isLoading ? 'Идёт загрузка...' : 'Загрузить?'}</MyOwnInfo>}
        />
      </L.Div>
    </L.Div>
  );
};
