import { componentSrc } from './index';

export const Api = {
  liveDemo: `
const Api = () => {

  return (
    <L.Menu
      tabRender={({ Element, elementProps }) => {
        return <Element {...elementProps} style={{ whiteSpace: "nowrap" }} />;
      }}
    >
      <L.MenuItem 
        menuItemKey={0}
        title="Tab 1"
      >
        <L.Ul>
          <L.Li>
            <L.A>Item 1</L.A>
          </L.Li>
          <L.Li>
            <L.A>Item 2</L.A>
          </L.Li>
          <L.Li>
            <L.A>Item 3</L.A>
          </L.Li>
        </L.Ul>
      </L.MenuItem>
      <L.MenuItem 
        menuItemKey={1}
        title="Very looooooong tab naaaaame"
      >
        <L.Ul>
          <L.Li>
            <L.A>Item 1</L.A>
          </L.Li>
          <L.Li>
            <L.A>Item 2</L.A>
          </L.Li>
        </L.Ul>
      </L.MenuItem>
      <L.MenuItem 
        menuItemKey={2}
        title="Very looooooong tab naaaaame"
      >
        <L.Ul>
          <L.Li>
            <L.A>Item 1</L.A>
          </L.Li>
        </L.Ul>
      </L.MenuItem>
      <L.MenuItem 
        menuItemKey={3}
        title="Very looooooong tab naaaaame"
      />
      <L.MenuItem 
        menuItemKey={4}
        title="Very looooooong tab naaaaame"
      />
      <L.MenuItem
        menuItemKey={5} 
        title="Very looooooong tab naaaaame"
      />
      <L.MenuItem
        menuItemKey={6} 
        title="Very looooooong tab naaaaame"
      />
    </L.Menu>
  );
};

render(<Api />);
`,
  source: componentSrc,
};
