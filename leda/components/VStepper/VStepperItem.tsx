import * as React from 'react';
import { isNil } from 'lodash';
import { Div } from '../Div';
import { VStepperContext } from './VStepperContext';
import { useProps } from '../../utils';
import { Collapsible } from '../Collapsible';
import {
  getItemClassNames,
} from './helpers';
import { createClickHandler } from './handlers';
import { VStepperItemProps } from './types';
import { useCustomElements } from './hooks';

export const VStepperItem: React.FC<VStepperItemProps> = (props: VStepperItemProps): React.ReactElement => {
  const {
    children,
    titleTextField,
    statusTextField,
    className,
    isOpen: isOpenProp,
    item,
    isDisabled,
    typeField,
  } = useProps(props);

  const [isOpenState, setIsOpenState] = React.useState(false);

  const isOpen = isNil(isOpenProp) ? isOpenState : isOpenProp;

  const { theme } = React.useContext(VStepperContext);

  const statusText = statusTextField && item ? item[statusTextField] : props.statusText;

  const titleText = titleTextField && item ? item[titleTextField] : props.titleText;

  const type = typeField && item ? item[typeField] : props.type;

  const handleHeadingClick = createClickHandler(props, isOpenState, setIsOpenState);

  const {
    wrapperClassName,
    iconClassName,
    headingIconClassName,
  } = getItemClassNames({ ...props, isOpen, className }, theme, type);

  const {
    Body,
    Content,
    Heading,
    Icon,
    Status,
    Wrapper,
  } = useCustomElements(props, { isOpen });

  return (
    <Wrapper className={wrapperClassName}>
      <Div className={theme.itemSign}>
        <Icon type={type} className={iconClassName} />
        <Div className={theme.itemLine} />
      </Div>
      <Content className={theme.itemContentWrapper}>
        <Heading
          className={theme.itemHeading}
          onClick={handleHeadingClick}
        >
          <Div className={theme.itemTitle}>{titleText}</Div>
          <Div>
            <Status className={theme.itemStatus}>
              {statusText}
            </Status>
            <Div className={headingIconClassName} />
          </Div>
        </Heading>
        <Body>
          <Collapsible isOpen={!isDisabled && isOpen}>
            <Div className={theme.itemContent}>
              {children}
            </Div>
          </Collapsible>
        </Body>
      </Content>
    </Wrapper>
  );
};
