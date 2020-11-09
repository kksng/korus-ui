import React from 'react';
import { isNil } from 'lodash';
import { Div } from '../Div';
import { NotificationItemProps } from './types';
import { getClassNames, useElement } from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { LedaContext } from '../LedaProvider';
import { ChangeMethods, DEFAULT_NOTIFICATION_LIFETIME } from './constants';

export const NotificationItem = (props: NotificationItemProps): React.ReactElement => {
  const {
    item,
    onChange,
    theme,
    contentRender,
    iconRender,
    actionButtonRender,
  } = props;

  const timeIdRef = React.useRef<number | undefined>();

  const handleChange = (method: ChangeMethods) => {
    clearTimeout(timeIdRef.current);

    onChange(item, method);
  };

  React.useEffect((): void | (() => void) => {
    const delay = (() => {
      if (isNil(item.delay)) return DEFAULT_NOTIFICATION_LIFETIME;
      return item.delay;
    })();

    // let the notification with zero delay stay until close icon is clicked
    if (delay > 0) {
      timeIdRef.current = setTimeout(() => handleChange(ChangeMethods.Delay), delay) as unknown as number;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { renders: { [COMPONENTS_NAMESPACES.notifications]: notificationsRenders } } = React.useContext(LedaContext);

  const Content = useElement(
    'Content',
    Div,
    contentRender || notificationsRenders.contentRender,
    props,
  );

  const Icon = useElement(
    'Icon',
    Div,
    iconRender || notificationsRenders.iconRender,
    props,
  );

  const ActionButton = useElement(
    'ActionButton',
    (data) => <>{data.children}</>,
    actionButtonRender || notificationsRenders.actionButtonRender,
    props,
  );

  const wrapperClassNames = getClassNames(theme.notificationWrapper, item.className);

  const iconClassNames = getClassNames(theme.notificationIcon, item.iconClassName);

  return (
    <Div className={wrapperClassNames}>
      <Icon className={iconClassNames} />
      <Content className={theme.notificationContent}>
        <Div dangerouslySetInnerHTML={{ __html: item.text }} />
        <ActionButton />
      </Content>
      <Div className={theme.notificationCloseIcon} onClick={() => handleChange(ChangeMethods.CloseIconClick)} />
    </Div>
  );
};
