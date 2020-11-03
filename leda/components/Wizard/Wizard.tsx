import * as React from 'react';

import {
  getClassNames, useTheme, bindFunctionalRef, useProps,
} from '~/utils';
import { COMPONENTS_NAMESPACES } from '~/constants';
import { Div } from '~/components/Div';
import {
  WizardProps, WizardValue, WizardRefCurrent,
} from './types';
import {
  getLabelText,
  getDataType,
} from '../StatusBar/helpers';
import { WizardItem } from './WizardItem';
import { isActive, isSuccess, getCurrentIndex } from './helpers';

/**
 * Wizard component shows process of filling data step by step
 * provides progress bar for current step
 * @param {WizardProps} props
 *
 * @returns {React.ReactElement}
 */
export const Wizard: React.FC<WizardProps> = React.forwardRef((props: WizardProps, ref?: React.Ref<WizardRefCurrent>): React.ReactElement => {
  const {
    theme: themeProp,
    className,
    textField,
    data,
    value,
    currentStepProgress,
    itemRender,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.wizard);

  const dataType = getDataType(data);

  const currentIndex = getCurrentIndex(value, data);

  return (
    <Div
      className={getClassNames(theme.wrapper, className)}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
      {...restProps}
    >
      {(data as WizardValue[]).map((item, index) => {
        const labelText = getLabelText(dataType, item, textField);

        return (
          <WizardItem
            key={index.toString()}
            isFirst={index === 0}
            isLast={index === data.length - 1}
            isSuccess={isSuccess(currentIndex, index)}
            isActive={isActive(currentIndex, index)}
            theme={theme}
            labelText={labelText}
            itemRender={itemRender}
            currentStepProgress={currentStepProgress}
          />
        );
      })}

    </Div>
  );
});

Wizard.displayName = 'Wizard';
