import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Tabs = (storyProps: StoryProps) => {
  const [selected, setSelected] = React.useState<string | number>(0);

  return (
    <L.Div _inner>
      <L.Tabs
        activeTabKey={selected}
        onChange={(ev) => setSelected(ev.component.value)}
      >
        <L.Tab title={<L.Div _txt-success>Tab 1</L.Div>} tabKey={0}>
          <L.Div _inner>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Non sodales neque sodales ut etiam sit. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Morbi blandit cursus risus at.
            Accumsan sit amet nulla facilisi morbi tempus iaculis. Feugiat nibh sed pulvinar proin gravida hendrerit. Nulla facilisi etiam dignissim diam
            quis enim lobortis. Leo integer malesuada nunc vel risus commodo viverra maecenas. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames. Non odio euismod lacinia at quis risus. Nibh nisl condimentum id venenatis a condimentum.
          </L.Div>
        </L.Tab>
        <L.Tab title={<div>Tab 2</div>} tabKey={1}>
          <L.Div _inner>
            Volutpat blandit aliquam etiam erat. Diam maecenas sed enim ut. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Vitae auctor eu
            augue ut lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. Neque egestas congue quisque egestas diam. Aliquet enim
            tortor at auctor urna nunc id cursus metus. Ut enim blandit volutpat maecenas volutpat. Ac turpis egestas maecenas pharetra convallis. Varius
            morbi enim nunc faucibus a pellentesque sit. Pellentesque habitant morbi tristique senectus et. Porta non pulvinar neque laoreet suspendisse
            interdum consectetur libero id. Molestie at elementum eu facilisis sed odio. Consequat semper viverra nam libero justo laoreet sit. Sit amet
            luctus venenatis lectus magna fringilla urna porttitor. Mattis ullamcorper velit sed ullamcorper morbi. Ultrices vitae auctor eu augue ut lectus
            arcu bibendum. Ut tellus elementum sagittis vitae et leo duis ut diam. Aliquam etiam erat velit scelerisque in dictum non consectetur a.
          </L.Div>
        </L.Tab>
        <L.Tab title="Tab 3" isDisabled tabKey={2}>
          <L.Div _inner>
            Volutpat blandit aliquam etiam erat. Diam maecenas sed enim ut. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Vitae auctor eu
            augue ut lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. Neque egestas congue quisque egestas diam. Aliquet enim
            tortor at auctor urna nunc id cursus metus. Ut enim blandit volutpat maecenas volutpat. Ac turpis egestas maecenas pharetra convallis. Varius
            morbi enim nunc faucibus a pellentesque sit. Pellentesque habitant morbi tristique senectus et. Porta non pulvinar neque laoreet suspendisse
            interdum consectetur libero id. Molestie at elementum eu facilisis sed odio. Consequat semper viverra nam libero justo laoreet sit. Sit amet
            luctus venenatis lectus magna fringilla urna porttitor. Mattis ullamcorper velit sed ullamcorper morbi. Ultrices vitae auctor eu augue ut lectus
            arcu bibendum. Ut tellus elementum sagittis vitae et leo duis ut diam. Aliquam etiam erat velit scelerisque in dictum non consectetur a.
          </L.Div>
        </L.Tab>
        <L.Tab
          title=""
          tabKey={3}
          tabRender={({ Element, elementProps }) => (
            <Element
              {...elementProps}
              onClick={() => {
                alert('Good!');
              }}
            >
              <img
                alt=""
                height="20"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACRFdLHAAABqElEQVQ4Ea2VO07DQBCGHZ4Vr4IKkDgAEhRRyigVQiDRcAAiGu7AAVJwAig5AhTUUUreQhwgBYiGAkGHxOP7zBhsA0Kg/NK3O7OeGe96HKeS/KxBLs3DAqxG2AHzBVzCU6z9Og0QsQHH8PoDJxFjbEGVgpck0/i7sBzrR8wd6IY/y1yHWviHzJtwHX5hmsI7B3d1CkvwZQex5jVjjDXH3IKG8LybAfswAb/JGGPNMdcaH2pieeEMxiGvfpxWoJ2XseaY24RUw4wuPsNiulIcRnHvAu2yzDHXGtZKqvACNqC8A5aSEbgJtMsyx1xrVPsY5sBut8E7ZXI3Y+CxjBNt1/I7NacN1pizi2uguun4PrSY1sO30GTY2U5092Ar1rsxrxncczWpaJe2S5WzI8+wfhtol49smrlppz3yVTgNZh9w9hwfsJUPW9Q9PKbW52BOAyxorbTVttxCvgJludM/vTYWaIJ3sLCdzMsd2CTRzstYc9Lj5i8M4fT0p2fxnnwcvvt87VB8xTsg37sOdEHNQh1qoDzVJnz7+TJA2fkN6MkH1oKZ/vUX8AZKZHKOVNf5OQAAAABJRU5ErkJggg=="
                width="20"
              />
            </Element>
          )}
        />
      </L.Tabs>
    </L.Div>
  );
};
