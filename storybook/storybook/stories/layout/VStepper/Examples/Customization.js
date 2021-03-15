import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

export const Customization = {
  liveDemo: `

const CustomIconStyle = {
  position: 'relative',
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: '100%',
  width: '50px',
  height: '50px',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '5px',
  border: '2px solid lightgrey',
  fontWeight: '500',
  zIndex: '2',
}  

const CustomContentStyle = {
  display: 'flex', 
  alignItems: 'center', 
  marginLeft: '20px',
}

const Content = ({ children }) => <L.Div _txtBold style={CustomContentStyle}>{children}</L.Div>;
Content.displayName = 'CustomContent';

const SmallText = ({ children }) => <L.Div _txtGray _txtSmall style={CustomContentStyle}>{children}</L.Div>;
SmallText.displayName = 'SmallText';

const OpenedContent = ({ children, title }) => (
  <L.Div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <L.Div _txtBold style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>{title}</L.Div>
    <L.Div _txtGray _txtSmall style={CustomContentStyle}>{children}</L.Div>
  </L.Div>
);

const DataIcon = ({ children, style }) => <L.Div style={{...style, ...CustomIconStyle}}>{children}</L.Div>;

const ArrowIcon = () => (
  <L.Div
    style={{ ...CustomIconStyle, backgroundColor: 'transparent', border: 'none' }}
  >
    <L.I style={{ color: 'rgba(170, 178, 183, 0.8)', marginRight: '1px' }} _icon20 _iArrowUp />
  </L.Div>
);

const Customization = () => (
  <L.VStepper>
      <L.VStepper.Item
        iconRender={() => <ArrowIcon />}
        _vStepperCustomWrapper
        _marginBottomNone
        contentRender={({ componentProps: { children } }) => <SmallText>{children}</SmallText>}
      >
        Вручение
      </L.VStepper.Item>
      <L.VStepper.Item
        iconRender={() => <DataIcon />}
        _vStepperCustomWrapper
        contentRender={({ componentProps: { children } }) => <SmallText>{children}</SmallText>}
      >
        Доставка в место вручения
      </L.VStepper.Item>
      <L.VStepper.Item
        iconRender={() => <DataIcon />}
        _vStepperCustomWrapper
        contentRender={({ componentProps: { children } }) => <SmallText>{children}</SmallText>}
      >
        Доставка по Росии
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon><L.I style={{ color: 'rgba(170, 178, 183, 0.8)' }} _uiconAircraft /></DataIcon>}
        contentRender={({ componentProps: { titleText, children } }) => <OpenedContent title={titleText}>{children}</OpenedContent>}
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
        contentRender={({ componentProps: { children } }) => <SmallText>{children}</SmallText>}
      >
        6 дней в пути
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>15 Июл</DataIcon>}
        statusRender={() => null}
        key="2"
        contentRender={({ Element, elementProps, componentState }) => <Element state={componentState} {...elementProps} style={{ padding: '0 0 0 20px' }} />}
        titleText="Прием на таможню"
      >
        Здесь текст
      </L.VStepper.Item>
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>15 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }) => <Content>{titleText}</Content>}
        titleText="Прошло регистрацию"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>14 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }) => <Content>{titleText}</Content>}
        titleText="Прибыло в сортировочный центр"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }) => <Content>{titleText}</Content>}
        titleText="Прибыло на территорию России"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }) => <Content>{titleText}</Content>}
        titleText="Прибыло на границу Китая"
      />
      <L.VStepper.Item
        _vStepperCustomWrapper
        iconRender={() => <DataIcon>11 Июл</DataIcon>}
        contentRender={({ componentProps: { titleText } }) => <Content>{titleText}</Content>}
        titleText="Принято в отделении связи"
      />
    </L.VStepper>
);

render(<Customization />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Для настройки внешнего вида частей компонента используйте методы с
        суффиксом Render:
      </L.P>
      <L.P>
        Для настройки статуса шага используйте <b>statusRender</b>. При работе
        непосредственно с шагами компонента используйте <b>headingRender</b> для
        заголовков, <b>contentRender</b> и <b>iconRender</b> для настройки
        контента и иконок шага.
        <b>wrapperRender</b> - кастомизация враппера шага, применяется к{' '}
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
