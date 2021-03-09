import * as React from 'react';
import { debounce } from 'lodash';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { useElement, useElementRef } from '../../utils';
import { Div } from '../Div';
import { LedaContext } from '../LedaProvider';
import { Ul } from '../Ul';
import {
  CustomElements, TabsProps, TabsScroll, TabsScrollProps,
} from './types';
import { ContentElement } from './ContentElement';

export const useCustomElements = (props: TabsProps, state: { activeTabKey: string | number }): CustomElements => {
  const { renders: { [COMPONENTS_NAMESPACES.tabs]: tabsRenders } } = React.useContext(LedaContext);

  const {
    wrapperRender, contentRender, headingRender,
  } = props;

  const Wrapper = useElement(
    'Wrapper',
    Div,
    wrapperRender || tabsRenders.wrapperRender,
    props,
    state,
  );

  const Content = useElement(
    'Content',
    ContentElement,
    contentRender || tabsRenders.contentRender,
    props,
    state,
  );

  const Heading = useElement(
    'Heading',
    Ul,
    headingRender || tabsRenders.headerRender,
    props,
    state,
  );

  return {
    Content,
    Heading,
    Wrapper,
  };
};

export const useTabsScroll = ({ shouldScrollTabs, theme }: TabsScrollProps): TabsScroll => {
  const [Element, containerRef] = useElementRef();
  const [hasScroll, setHasScroll] = React.useState(false);
  const [hasLeftArrow, setHasLeftArrow] = React.useState(false);
  const [hasRightArrow, setHasRightArrow] = React.useState(false);
  const mainElementRect = Element?.getBoundingClientRect();
  const tabsContainer = Element?.querySelector(`.${theme.tabsBar}`);
  const tabs = Element?.querySelectorAll(`.${theme.tab}`);
  const elementRect = Element?.getBoundingClientRect();
  const tabsContainerScrollWidth = tabsContainer?.scrollWidth;

  const setScrollControls = () => {
    if (shouldScrollTabs && Element && elementRect && tabsContainer && tabsContainerScrollWidth) {
      const tabsContainerRect = tabsContainer.getBoundingClientRect();

      if (tabsContainerScrollWidth > elementRect.width) {
        setHasScroll(true);

        setHasLeftArrow(tabsContainerRect.left < elementRect.left);
        setHasRightArrow(Math.round(tabsContainerScrollWidth + tabsContainerRect.left) > elementRect.right);
      }
    }
  };

  const onRightClick = () => {
    if (tabsContainer == null || mainElementRect == null) return;

    const tabCrossingRightBorder = [...tabs].find((el) => el.getBoundingClientRect().right > mainElementRect.right);
    if (tabCrossingRightBorder == null) return;

    const tabShift = tabCrossingRightBorder.getBoundingClientRect().right - mainElementRect.right;
    const leftShift = Math.abs(tabsContainer.getBoundingClientRect().left - mainElementRect.left);

    Element?.scrollTo({
      behavior: 'smooth',
      left: mainElementRect.left + tabShift + leftShift,
      top: mainElementRect.top,
    });
  };

  const onLeftClick = () => {
    if (tabsContainer == null || mainElementRect == null) return;

    const tabCrossingLeftBorder = [...tabs].reverse().find((el) => el.getBoundingClientRect().left < mainElementRect.left);
    if (tabCrossingLeftBorder == null) return;

    const tabShift = Math.ceil(Math.abs(tabCrossingLeftBorder.getBoundingClientRect().left - mainElementRect.left));
    const leftShift = Math.abs(tabsContainer.getBoundingClientRect().left - mainElementRect.left);

    Element?.scrollTo({
      behavior: 'smooth',
      left: leftShift - tabShift,
      top: mainElementRect.top,
    });
  };

  React.useEffect(setScrollControls, [tabsContainerScrollWidth]);

  const debounceSetScrollControls = debounce(setScrollControls, 100);

  React.useEffect(() => {
    Element?.addEventListener('scroll', debounceSetScrollControls);

    return () => {
      Element?.removeEventListener('scroll', debounceSetScrollControls);
    };
  });

  return {
    containerRef,
    hasLeftArrow,
    hasRightArrow,
    hasScroll,
    onLeftClick,
    onRightClick,
  };
};
