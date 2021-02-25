import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const BasicUsage = (storyProps: StoryProps) => {

  return (
    <L.Div _inner>
      <L.Menu
        tabRender={({ Element, elementProps }) => {
          return <Element {...elementProps} style={{ whiteSpace: "nowrap" }} />;
        }}
      >
        <L.MenuItem 
          menuItemKey={0}
          title="Hello Click"
        >
          <L.Ul>
            <L.Li>
              <L.A>'Мармелад'</L.A>
            </L.Li>
            <L.Li>
              <L.A>'Суфле'</L.A>
            </L.Li>
            <L.Li>
              <L.A>'Шоколад'</L.A>
            </L.Li>
          </L.Ul>
        </L.MenuItem>
        <L.MenuItem 
          menuItemKey={1}
          title="Very looooooong tab naaaaame"
        >
          <L.Ul>
            <L.Li>
              <L.A>'Мармелад'</L.A>
            </L.Li>
            <L.Li>
              <L.A>'Суфле'</L.A>
            </L.Li>
          </L.Ul>
        </L.MenuItem>
        <L.MenuItem 
          menuItemKey={2}
          title="Very looooooong tab naaaaame"
        >
          <L.Ul>
            <L.Li>
              <L.A>'Мармелад'</L.A>
            </L.Li>
            <L.Li>
              <L.A>'Суфле'</L.A>
            </L.Li>
            <L.Li>
              <L.A>'Шоколад'</L.A>
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
    </L.Div>
  );
};
