import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { GroupContext } from './GroupContext';
import * as L from '../../../korus-ui';
import { MainContext } from './MainContext';

export interface StoryProps {
  name: string,
  children?: React.ReactNode | React.ReactNode[],
  url: string,
}

export const Story = (props: StoryProps): React.ReactElement => {
  const { name, url } = props;

  const { groupNames } = React.useContext(GroupContext);
  const { setStoryContext, lang } = React.useContext(MainContext);

  React.useEffect((): void => {
    setStoryContext(url, groupNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <L.Li className={`level-${groupNames.length} story-list-item`}>
      <NavLink to={url} exact className="story-link">
        {name}
      </NavLink>
    </L.Li>
  );
};

Story.displayName = 'Story';
