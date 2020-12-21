/* eslint-disable no-alert, no-console,import/no-extraneous-dependencies */
import * as React from 'react';
import shortId from 'shortid';
import * as L from '../../../leda';
import { Item } from '../../../leda/components/Notifications/types';
import { StoryProps } from '../../types';

const hook = {
  text: `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
`,
};

export const Minimal = (storyProps: StoryProps) => {
  const [items, setItems] = React.useState<Item[]>([]);

  return (
    <L.Div>
      <L.Notifications
        value={items}
        onChange={(ev) => {
          console.log('change', ev.component);
          setItems(ev.component.value);
        }}
      />
      <br />
      <L.Button
        _warning
        onClick={() => setItems([
          ...items,
          { ...hook, id: shortId.generate() },
        ])}
      >
        Add Notification
      </L.Button>
    </L.Div>
  );
};
