import * as React from 'react';
import * as L from '../../../korus-ui';

export const Menu = () => {

  return (
    <L.Div _inner>
      <L.Menu
        tabRender={({ Element, elementProps }) => {
          return <Element {...elementProps} style={{ whiteSpace: 'nowrap' }} />;
        }}
      >
        <L.MenuItem 
          title="Hello Click"
        >
          <L.Ul>
            <L.Li>
              <L.A>Мармелад</L.A>
            </L.Li>
            <L.Li>
              <L.A>Суфле</L.A>
            </L.Li>
            <L.Li>
              <L.A>Шоколад</L.A>
            </L.Li>
          </L.Ul>
        </L.MenuItem>
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        >
          <L.Ul>
            <L.Li>
              <L.A>Мармелад</L.A>
            </L.Li>
            <L.Li>
              <L.A>Суфле</L.A>
            </L.Li>
          </L.Ul>
        </L.MenuItem>
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        >
          <L.Ul>
            <L.Li>
              <L.A>Мармелад</L.A>
            </L.Li>
            <L.Li>
              <L.A>Суфле</L.A>
            </L.Li>
            <L.Li>
              <L.A>Шоколад</L.A>
            </L.Li>
          </L.Ul>
        </L.MenuItem>
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
        <L.MenuItem 
          title="Very looooooong tab naaaaame"
        />
      </L.Menu>
    </L.Div>
  );
};