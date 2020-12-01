import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => (
  <L.Div>
    <L.Header>Header</L.Header>
    <L.Nav>
      <L.Ul>
        <L.Li>Li</L.Li>
        <L.Li>Li</L.Li>
        <L.Li>Li</L.Li>
      </L.Ul>
      <L.Ol>
        <L.Li>Li</L.Li>
        <L.Li>Li</L.Li>
        <L.Li>Li</L.Li>
      </L.Ol>
    </L.Nav>
    <L.Main>
      <L.H1>H1</L.H1>
      <L.H2>H2</L.H2>
      <L.H3>H3</L.H3>
      <L.H4>H4</L.H4>
      <L.H5>H5</L.H5>
      <L.H6>H6</L.H6>
      <L.P>Lorem ipsum dolor sit <L.Span>amet,</L.Span> consectetuer <L.I>adipiscing elit,</L.I> sed <L.Small>diam nonummy</L.Small> nibh</L.P>
      <L.Dl _list _w20 _width70 _box>
        <L.Dt><L.B>Акира</L.B></L.Dt>
        <L.Dd>
          — полнометражный аниме-фильм 1988 года режиссёра Кацухиро Отомо, производства студии TMS Entertainment, создан по мотивам одноимённой манги.
          <L.Blockquote>В 1988 году Токио был уничтожен ядерным взрывом, что привело к началу <L.Mark>Третьей мировой войны</L.Mark>. К 2019 году война закончена. Токио восстановлен как Нео-Токио, но страдает от коррупции, антиправительственных протестов, терроризма и бандитского насилия...</L.Blockquote>
        </L.Dd>
      </L.Dl>
      <L.Section>
        Section
        <L.Article>Article</L.Article>
      </L.Section>
      <L.Figure>
        <L.Img _box alt="cat" height={300} width={350} src="http://memesmix.net/media/created/rpi0j5.jpg" />
        <L.Figcaption>The Cat</L.Figcaption>
      </L.Figure>
      <L.Label>Label</L.Label>
    </L.Main>
    <L.Aside>Aside</L.Aside>
    <L.Footer>Footer</L.Footer>
  </L.Div>
);
