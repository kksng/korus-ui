import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {
  const tagIconClickHandler = ev => {
    console.log(ev.component.closest('.tags-item').textContent)
  }

  return (
    <L.Div>
      <L.Tags>
        <L.Tag
          onIconClick={tagIconClickHandler}
        >
          <b>Москва</b>
        </L.Tag>
        <L.Tag>Санкт-Петербург</L.Tag>
        <L.Tag>Воронеж</L.Tag>
        <L.Tag>Старый Оскол</L.Tag>
      </L.Tags>
    </L.Div>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
