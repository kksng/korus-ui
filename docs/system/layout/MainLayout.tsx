import * as React from 'react';
import * as L from '../../../korus-ui';
import { Content } from './Content';
import { SideNavigation } from './SideNavigation';

export interface MainLayoutProps {
  children: React.ReactElement | React.ReactElement[],
}

export const MainLayout = (props: MainLayoutProps): React.ReactElement => {
  const { children } = props;

  return (
    <L.Div _mainLayout>
      <Content>
        {children}
      </Content>
      <SideNavigation>
        {children}
      </SideNavigation>
    </L.Div>
  );
};

MainLayout.displayName = 'MainLayout';
