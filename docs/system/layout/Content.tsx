import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as L from '../../../korus-ui';
import { Group, Story } from '../components';
import { StoryProps } from '../components/Story';
import { Main } from '../../../korus-ui';
import { MainContext } from '../components/MainContext';

export interface ContentProps {
  children: React.ReactNode | React.ReactNode[],
}

const extractStories = (children: React.ReactNode | React.ReactNode[]): React.ReactElement<StoryProps>[] => React
  .Children
  .toArray(children)
  .map((child) => {
    if (React.isValidElement(child) && child.type === Group) {
      return extractStories(child.props.children);
    }
    return child;
  })
  .flat(10)
  .filter((child) => React.isValidElement(child) && child.type === Story);

export const Content = (props: ContentProps): React.ReactElement => {
  const { children } = props;

  const content = extractStories(children);

  const { stories } = React.useContext(MainContext);

  return (
    <L.Div _content>
      <Switch>
        {content?.map((child) => {
          const context = stories[child.props.url];
          const header = context ? [...context.groupNames, child.props.name].join(' / ') : child.props.name;

          return (
            <Route path={child.props.url} exact key={child.props.url}>
              <L.H1 _header>{header}</L.H1>
              <L.Div _storyWrapper>
                {child.props.children}
              </L.Div>
            </Route>
          );
        })}
        <Route>
          text
        </Route>
      </Switch>
    </L.Div>
  );
};

Content.displayName = 'Content';
