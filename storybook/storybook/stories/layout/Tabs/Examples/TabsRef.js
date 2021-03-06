import * as React from 'react';
import * as L from '@korus/leda';
import { componentSrc } from './index';

/* eslint-disable react/no-unescaped-entities */
export const TabsRef = {
  liveDemo: `
const TabsNode = () => {
  const [selected, setSelected] = React.useState(0);
  const [Element, ref] = L.utils.useElementRef();

  return (
    <L.Div _inner>
      <L.Tabs
        activeTabKey={selected}
        onChange={(ev) => setSelected(ev.component.value)}
        tabContentNode={Element}
      >
        <L.Tab title="Tab 1" tabKey={0}>
          <L.Div _inner>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Non sodales neque sodales ut etiam sit. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Morbi blandit cursus risus at.
            Accumsan sit amet nulla facilisi morbi tempus iaculis. Feugiat nibh sed pulvinar proin gravida hendrerit. Nulla facilisi etiam dignissim diam
            quis enim lobortis. Leo integer malesuada nunc vel risus commodo viverra maecenas. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames. Non odio euismod lacinia at quis risus. Nibh nisl condimentum id venenatis a condimentum.
          </L.Div>
        </L.Tab>
        <L.Tab title="Tab 2" tabKey={1}>
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
        <L.Tab title="Tab 3" tabKey={2}>
          <L.Div _inner>
             Diam maecenas sed enim ut. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Vitae auctor eu
             augue ut lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. Neque egestas congue quisque egestas diam. Aliquet enim
             tortor at auctor urna nunc id cursus metus. Ut enim blandit volutpat maecenas volutpat. Ac turpis egestas maecenas pharetra convallis. Varius
             morbi enim nunc faucibus a pellentesque sit. Pellentesque habitant morbi tristique senectus et. Porta non pulvinar neque laoreet suspendisse
             interdum consectetur libero id. Molestie at elementum eu facilisis sed odio. Consequat semper viverra nam libero justo laoreet sit. Sit amet
             luctus venenatis lectus magna fringilla urna porttitor. Mattis ullamcorper velit sed ullamcorper morbi. Ultrices vitae auctor eu augue ut lectus
             arcu bibendum. Ut tellus elementum sagittis vitae et leo duis ut diam. Aliquam etiam erat velit scelerisque in dictum non consectetur a.
          </L.Div>
        </L.Tab>
      </L.Tabs>

      <L.Div _inner _txt-success >
        Here goes some content which does not change
      </L.Div>

      <L.Div
        _inner
        _box
        ref={ref}
      />

    </L.Div>
  );
};

render(<TabsNode />);
`,
  text: (
    <L.Div _block>
      <L.P>
        Используйте <b>tabContentNode</b> для того, чтобы поместить контент вкладки в произвольное место на странице.
      </L.P>
    </L.Div>
  ),
  source: componentSrc,
};
