import * as React from 'react';
import * as L from '../../leda';

export const Story = (props: {
  children: React.ReactNode,
  title: string,
}) => (
  <L.Div _demoStory>
    <L.H4 _storyTitle>{props.title}</L.H4>
    <L.Tabs>
      {React.Children.map(props.children, (child, index) => (
        // @ts-ignore
        <L.Tab tabKey={index} key={index.toString()} title={child?.props.title || child?.type.name}>
          {child}
        </L.Tab>
      ))}
    </L.Tabs>
  </L.Div>
);
