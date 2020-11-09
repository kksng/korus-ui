import * as React from 'react';
import * as L from '../../../leda';

const exampleCode = `
export const Customization = (props: { title: string }) => (
  <L.Div _box _inner _demoBg>
    <L.VStepper>
      <L.VStepper.Item
        iconRender={() => <ArrowIcon />}
        _vStepperCustomWrapper
        _marginBottomNone
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        Вручение
      </L.VStepper.Item>
      <L.VStepper.Item
        iconRender={() => <NoIcon />}
        _vStepperCustomWrapper
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        Доставка в место вручения
      </L.VStepper.Item>
      <L.VStepper.Item
        iconRender={() => <NoIcon />}
        _vStepperCustomWrapper
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        Доставка по Росии
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon><L.I style={{ color: 'rgba(170, 178, 183, 0.8)' }} _uiconAircraft /></DataIcon>}
        contentRender={({ componentProps: { titleText, children } }: any) => <OpenedContent title={titleText}>{children}</OpenedContent>}
        statusRender={() => null}
        titleText="Выпущено таможней 15 июля, 15:45 (92г)"
      >
        102976, Марушкинское
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => (
          <DataIcon style={{ border: 'none', backgroundColor: 'transparent' }}>
            <L.I style={{ backgroundColor: 'white', color: 'rgba(170, 178, 183, 0.8)' }} _uiconClock />
          </DataIcon>
        )}
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        6 дней в пути
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>15 Июл</DataIcon>}
        statusRender={() => null}
        key="2"
        contentRender={({ Element, elementProps, componentState }: any) => <Element state={componentState} {...elementProps} style={{ padding: '0 0 0 20px' }} />}
        titleText="Прием на таможню"
      >
        Здесь текст
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>15 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прошло регистрацию"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>14 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прибыло в сортировочный центр"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прибыло на территорию России"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прибыло на границу Китая"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Принято в отделении связи"
      />
    </L.VStepper>
  </L.Div>
);
`;

const Content = ({ children }: any) => <L.Div _txtBold _vStepperCustomContent>{children}</L.Div>;
Content.displayName = 'CustomContent';

const SmallText = ({ children }: any) => <L.Div _txtGray _txtSmall _vStepperCustomContent>{children}</L.Div>;
SmallText.displayName = 'SmallText';

const OpenedContent = ({ children, title }: any) => (
  <L.Div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <L.Div _txtBold _vStepperCustomContent>{title}</L.Div>
    <L.Div _txtGray _txtSmall _vStepperCustomContent>{children}</L.Div>
  </L.Div>
);

const DataIcon = ({ children, style }: any) => <L.Div style={style} _vStepperCustomIcon>{children}</L.Div>;

const NoIcon = () => <L.Div _vStepperCustomIcon style={{ height: '30px', backgroundColor: 'transparent', border: 'none' }} />;

const ArrowIcon = () => (
  <L.Div
    _vStepperCustomIcon
    style={{ backgroundColor: 'transparent', border: 'none' }}
  >
    <L.I style={{ color: 'rgba(170, 178, 183, 0.8)', marginRight: '1px' }} _icon20 _iArrowUp />
  </L.Div>
);

export const Customization = (props: { title: string }) => (
  <L.Div _box _inner _demoBg>
    <L.VStepper>
      <L.VStepper.Item
        iconRender={() => <ArrowIcon />}
        _vStepperCustomWrapper
        _marginBottomNone
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        Вручение
      </L.VStepper.Item>
      <L.VStepper.Item
        iconRender={() => <NoIcon />}
        _vStepperCustomWrapper
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        Доставка в место вручения
      </L.VStepper.Item>
      <L.VStepper.Item
        iconRender={() => <NoIcon />}
        _vStepperCustomWrapper
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        Доставка по Росии
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon><L.I style={{ color: 'rgba(170, 178, 183, 0.8)' }} _uiconAircraft /></DataIcon>}
        contentRender={({ componentProps: { titleText, children } }: any) => <OpenedContent title={titleText}>{children}</OpenedContent>}
        statusRender={() => null}
        titleText="Выпущено таможней 15 июля, 15:45 (92г)"
      >
        102976, Марушкинское
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => (
          <DataIcon style={{ border: 'none', backgroundColor: 'transparent' }}>
            <L.I style={{ backgroundColor: 'white', color: 'rgba(170, 178, 183, 0.8)' }} _uiconClock />
          </DataIcon>
        )}
        contentRender={({ componentProps: { children } }: any) => <SmallText>{children}</SmallText>}
      >
        6 дней в пути
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>15 Июл</DataIcon>}
        statusRender={() => null}
        key="2"
        contentRender={({ Element, elementProps, componentState }: any) => <Element state={componentState} {...elementProps} style={{ padding: '0 0 0 20px' }} />}
        titleText="Прием на таможню"
      >
        Здесь текст
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>15 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прошло регистрацию"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>14 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прибыло в сортировочный центр"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прибыло на территорию России"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Прибыло на границу Китая"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }: any) => <Content>{titleText}</Content>}
        titleText="Принято в отделении связи"
      />
    </L.VStepper>
  </L.Div>
);
