import * as React from 'react';
import { debounce, isNil } from 'lodash';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import { Div } from '../Div';
import {
  createOverlaySvgPath, getModalPositionStyles, removeActiveClass, setActiveClass,
} from './helpers';
import { TourProps, TourStepItem } from './types';
import { useTheme } from '../../utils';
import { COMPONENTS_NAMESPACES } from '../../constants';

/**
 * Tour component - highlights items and shows tooltips
 * @param {TourProps} props
 *
 * @returns {React.ReactElement | null}
 */
export const Tour = (props: TourProps): React.ReactElement | null => {
  const {
    data, activeStepKey, onChange, theme: themeProp, stepDelay,
  } = props;

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.tour);
  const activeItem = data.find((item) => item.stepKey === activeStepKey);

  const borderRadius = activeItem?.borderRadius ?? 15;
  const padding = activeItem?.padding ?? 0;

  const [svgPath, setSvgPath] = React.useState<string>(createOverlaySvgPath(activeItem?.element ?? null, borderRadius, padding));
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect((): (() => void) | void => {
    if (isNil(activeStepKey)) return undefined;
    if (isNil(stepDelay)) return undefined;

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, stepDelay);

    return () => clearTimeout(timer);
  }, [activeStepKey, stepDelay]);

  React.useEffect((): (() => void) | void => {
    if (!activeItem?.element) {
      return undefined;
    }

    const resizeHandler = debounce(() => {
      setSvgPath(createOverlaySvgPath(activeItem.element, borderRadius, padding));
      setActiveClass(activeItem?.element, theme.activeElement);
    }, 100);

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  React.useEffect((): () => void => {
    const prevOverflow = document.body.style.overflow; // implementation as in Modal

    if (activeItem?.element) {
      const scrollOffsetTop = activeItem.offsetTop ?? 200;
      const viewportOffsetTop = Math.ceil(activeItem.element.getBoundingClientRect().top);
      const documentOffsetTop = viewportOffsetTop + window.scrollY;
      const shiftedDocumentOffsetTop = documentOffsetTop > scrollOffsetTop ? documentOffsetTop - scrollOffsetTop : documentOffsetTop; // позиция элемента со смещением
      const bodyScrollHeight = document.body.scrollHeight;
      const availableScrollLength = bodyScrollHeight - (window.scrollY + window.innerHeight);
      const neededToScrollAmount = shiftedDocumentOffsetTop - window.scrollY;

      document.body.style.overflow = 'hidden';

      if (
        bodyScrollHeight <= window.innerHeight // if body height is less than screen height, there is no scroll
        || window.scrollY === shiftedDocumentOffsetTop // the page is already scrolled to the element
        || neededToScrollAmount >= availableScrollLength // the page is scrolled to the end and cannot be scrolled further
      ) { // no need to scroll - display the tour immediately
        setSvgPath(createOverlaySvgPath(activeItem?.element, borderRadius, padding));
        setActiveClass(activeItem?.element, theme.activeElement);
      } else { // otherwise display the tour after scrolling
        setIsScrolling(true);
        setSvgPath(createOverlaySvgPath(null, borderRadius, padding));

        const scrollHandler = debounce(() => {
          // scrolling is over
          setSvgPath(createOverlaySvgPath(activeItem?.element, borderRadius, padding));
          setActiveClass(activeItem?.element, theme.activeElement);
          setIsScrolling(false);

          window.removeEventListener('scroll', scrollHandler); // remove listener
        }, 100);

        window.addEventListener('scroll', scrollHandler);

        if (stepDelay) {
          setTimeout(() => window.scrollTo({ behavior: 'smooth', left: 0, top: shiftedDocumentOffsetTop }), stepDelay);
        } else {
          window.scrollTo({ behavior: 'smooth', left: 0, top: shiftedDocumentOffsetTop });
        }
      }
    } else {
      setSvgPath(createOverlaySvgPath(null, borderRadius, padding));
    }

    return () => {
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  const contentProps = React.useMemo(() => {
    data?.forEach((stepItem) => removeActiveClass(stepItem?.element, theme.activeElement));

    const triggerOnChange = (item?: TourStepItem) => {
      onChange({
        component: {
          item: item ?? null,
          value: item?.stepKey ?? null,
        },
      });
    };

    return {
      goTo: (stepKey: string | number) => triggerOnChange(data.find((item) => item.stepKey === stepKey)),
      next: () => {
        const currentIndex = data.findIndex((item) => item.stepKey === activeItem?.stepKey);

        if (currentIndex === data.length - 1) {
          triggerOnChange();
          return;
        }

        triggerOnChange(data[currentIndex + 1]);
      },
      prev: () => {
        const currentIndex = data.findIndex((item) => item.stepKey === activeItem?.stepKey);

        if (currentIndex === 0) {
          triggerOnChange();
          return;
        }

        triggerOnChange(data[currentIndex - 1]);
      },
      stopTour: () => triggerOnChange(),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, activeItem, onChange]);

  if (!activeItem || !activeItem.element) {
    return null;
  }

  const style = getModalPositionStyles(activeItem.position, activeItem.element.getBoundingClientRect(), isScrolling);

  const content = (
    <>
      <svg
        className={cx(theme.overlay, { [theme.overlayLoading]: isLoading })}
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={svgPath}
        />
      </svg>
      {!isLoading
        && (
          <Div className={`${theme.modal} ${activeItem.position}`} style={style}>
            {activeItem.content(contentProps)}
          </Div>
        )}
    </>
  );
  return ReactDOM.createPortal(content, document.body);
};

Tour.displayName = 'Tour';
