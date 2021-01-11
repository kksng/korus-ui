import * as React from 'react';
import * as L from '../../../korus-ui';
import { MainContext } from '../components/MainContext';
import { Langs } from '../../lang/types';
import { getIsSidebarOpen, setIsSidebarOpen } from '../helpers';
import { LangSwitcher, ThemeSwitcher } from '../components';

export interface SideNavigationProps {
  children: React.ReactElement | React.ReactElement[],
}

export const SideNavigation = (props: SideNavigationProps): React.ReactElement => {
  const { children } = props;
  const [isOpen, setIsOpen] = React.useState(getIsSidebarOpen());

  const { lang, setCurrentLanguage } = React.useContext(MainContext);

  return (
    <L.Div _bsidePanel _opened={isOpen}>
      <L.Div
        _bside
      >
        <L.Span
          _fas
          _faArrowCircleLeft
          _menuIcon
          _marginRight
          _r180={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
            setIsSidebarOpen(!isOpen);
          }}
        />
        <L.Div _storyMenu>
          <L.Div>
            <LangSwitcher />
            <ThemeSwitcher />
          </L.Div>
          <L.H5 _title>
            {lang.sidebar.title}
          </L.H5>
          <L.Div _storyListContainer>
            <L.Ul _storyList>
              {children}
            </L.Ul>
          </L.Div>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};

SideNavigation.displayName = 'SideNavigation';
