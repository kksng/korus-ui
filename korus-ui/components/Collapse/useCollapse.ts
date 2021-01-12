import * as React from 'react';

const getHeight = (content: React.MutableRefObject<HTMLElement | undefined>) => {
  if (content?.current?.scrollHeight) {
    return `${content.current.scrollHeight}px`;
  }

  return '0px';
};

export interface UseCollapseProps {
  content: React.MutableRefObject<HTMLElement | undefined>,
  isOpen: boolean,
}

export const useCollapse = ({
  content, isOpen,
}: UseCollapseProps) => {
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [height, setHeight] = React.useState(isOpen ? 'auto' : '0');
  const [overflow, setOverflow] = React.useState(isOpen ? 'visible' : 'hidden');
  const [visibility, setVisibility] = React.useState(isOpen ? 'visible' : 'hidden');

  const setIsCollapsedStyle = React.useCallback(() => {
    setVisibility('hidden');
  }, []);

  const setIsExpandedStyle = React.useCallback(() => {
    setHeight('auto');
    setOverflow('visible');
    setVisibility('visible');
  }, []);

  React.useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    setHeight(getHeight(content));

    if (isOpen) {
      setVisibility('visible');
    } else {
      setOverflow('hidden');
      // set collapsed style after setting height to enable smooth transition based on height
      window.requestAnimationFrame(() => {
        // setting these properties will start transition from measured height to 0
        setTimeout(() => {
          // setting these properties will start transition from measured height to 0
          setHeight('0');
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, isOpen]);

  const style = React.useMemo(() => ({
    height,
    overflow,
    visibility,
  }), [height, overflow, visibility]);

  return {
    setIsCollapsedStyle,
    setIsExpandedStyle,
    style,
  };
};
