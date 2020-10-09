import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <L.Div>
      <L.DropDown _button _more>
        <L.Span>...</L.Span>
        <L.Ul _txtLeft>
          <L.Li _level2>
            <L.A>Мармелад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Суфле</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Шоколад</L.A>
          </L.Li>
          <L.Li _level2>
            <L.A>Кексики</L.A>
          </L.Li>
        </L.Ul>
      </L.DropDown>
    </L.Div>
  );
};
render(<Api />);
`,
  source: componentSrc,
};
