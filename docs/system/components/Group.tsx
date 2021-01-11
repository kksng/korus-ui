import * as React from 'react';
import * as L from '../../../korus-ui';
import { GroupContext } from './GroupContext';

export interface GroupProps {
  name: string,
  children: React.ReactElement | React.ReactElement[],
  isDefaultOpen?: boolean,
}

export const Group = (props: GroupProps): React.ReactElement => {
  const { children, name, isDefaultOpen } = props;
  const { groupNames } = React.useContext(GroupContext);

  const isOpen = isDefaultOpen ?? groupNames.length < 2;

  const [activeKeys, setActiveKeys] = React.useState<string[]>(isOpen ? ['1'] : []);

  return (
    <GroupContext.Provider value={{ groupNames: [...groupNames, name] }}>
      <L.Collapse activePanelKey={activeKeys} onSelect={(ev) => setActiveKeys(ev.component.value as string[])}>
        <L.Collapse.Panel panelKey="1" wrapperRender={({ elementProps }) => <L.Li _storyListItem {...elementProps} />}>
          <L.Collapse.Heading iconRender={() => null} wrapperRender={({ elementProps }) => <L.H5 {...elementProps} _groupName />}>
            {name}
          </L.Collapse.Heading>
          <L.Collapse.Body wrapperRender={({ elementProps }) => <L.Ul _storyList {...elementProps} />}>
            {children}
          </L.Collapse.Body>
        </L.Collapse.Panel>
      </L.Collapse>
    </GroupContext.Provider>
  );
};

Group.displayName = 'Group';
