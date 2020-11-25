/* eslint-disable no-alert, no-console,import/no-extraneous-dependencies */
import * as React from 'react';
import shortId from 'shortid';
import * as L from '../../../leda';
import { Item } from '../../../leda/components/Notifications/types';
import { StoryProps } from '../../types';

const hooks1 = {
  text: `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
`,
  delay: 1200,
};

const ActionButton = (props: { item: L.NotificationsTypes.Item, onClose: (id: string | number) => void }) => {
  switch (props.item.type) {
    case 'accept': {
      return (
        <L.Button _success onClick={() => props.onClose(props.item.id)}>
          Принять
        </L.Button>
      );
    }
    case 'reject': {
      return <L.Button _warning>Отклонить</L.Button>;
    }
    default:
      return null;
  }
};

export const Minimal = (storyProps: StoryProps) => {
  const [items, setItems] = React.useState<Item[]>([]);

  const handleClose = (id: string | number) => {
    const newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
  };

  return (
    <L.Div>
      <L.Notifications
        value={items}
        onChange={(ev) => {
          console.log('change', ev.component);
          setItems(ev.component.value);
        }}
        contentRender={({ elementProps }) => <L.Div {...elementProps} _txtWarning />}
        iconRender={({ elementProps }) => <L.I {...elementProps} _txtSuccess />}
        actionButtonRender={({ componentProps }) => <ActionButton item={componentProps.item} onClose={handleClose} />}
        _notificationsTop
      />
      <br />
      <L.Button
        _warning
        onClick={() => setItems([
          ...items,
          { ...hooks1, id: shortId.generate() },
        ])}
      >
        Добавить уведомление
      </L.Button>
    </L.Div>
  );
};
