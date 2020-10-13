import * as React from 'react';
import { isNil } from 'lodash';

import { LedaContext } from '../LedaProvider';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { WizardItemProps } from './types';
import { getClassNames, useElement } from '../../utils';
import { Div } from '../Div';
import { Label } from '../Label';

/**
 * Item of Wizard component
 * renders step and progress bar
 * @param {WizardItemProps} props
 *
 * @returns {React.ReactElement}
 */
export const WizardItem: React.FC<WizardItemProps> = (props: WizardItemProps): React.ReactElement => {
  const {
    theme,
    isSuccess,
    isActive,
    isFirst,
    isLast,
    itemRender,
    labelText,
    currentStepProgress,
  } = props;

  const { renders: { [COMPONENTS_NAMESPACES.wizard]: wizardRenders } } = React.useContext(LedaContext);

  const Item = useElement(
    'Item',
    Div,
    itemRender || wizardRenders.itemRender,
    props,
  );

  const itemClassName = getClassNames(
    theme.wizardStep,
    { [theme.wizardItemFirst]: isFirst },
    { [theme.wizardItemLast]: isLast },
    { [theme.wizardItemSuccess]: isSuccess },
    { [theme.wizardItemActive]: isActive },
    { [theme.wizardItemProgress]: isActive },
  );

  /**
   * Function calculates progress percentage of the step
   *
   * @returns {number} - progress percentage
   */
  const getProgress = (): number => {
    if (isSuccess) {
      return 100;
    }
    if (!isNil(currentStepProgress) && isActive) {
      return currentStepProgress;
    }
    return 0;
  };

  return (
    <Item className={itemClassName}>
      <Div className={theme.wizardLine}>
        <Div
          shouldRender={isActive}
          className={theme.wizardLineProgress}
          style={{ width: `${getProgress()}%` }}
        />
      </Div>
      <Label className={theme.label}>
        {labelText}
      </Label>
    </Item>
  );
};
