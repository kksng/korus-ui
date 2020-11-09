import React from 'react';
import {
  isCustom,
  getLabelText,
  getStepPosition, getDataType,
} from './helpers';
import {
  bindFunctionalRef, getClassNames, useProps, useTheme,
} from '../../utils';
import { StatusBarProps, StatusBarRefCurrent, StatusItem } from './types';
import { COMPONENTS_NAMESPACES } from '../../constants';
import { DATA_TYPES } from './constants';
import { Div } from '../Div';
import { StatusBarItem } from './StatusBarItem';

export const StatusBar = React.forwardRef((props: StatusBarProps, ref?: React.Ref<StatusBarRefCurrent>): React.ReactElement => {
  const {
    theme: themeProp,
    data,
    className,
    textField,
    typeField,
    value,
    itemRender,
    iconRender,
    labelRender,
    onClick,
    currentStepProgress,
    ...restProps
  } = useProps(props);

  const theme = useTheme(themeProp, COMPONENTS_NAMESPACES.statusBar);

  const isCustomChildren = isCustom(data, typeField);

  const currentIndex = value && (data as (string | StatusItem)[]).indexOf(value);

  const dataType = getDataType(data);

  return (
    <Div
      className={getClassNames(theme.wrapper, className)}
      ref={ref && ((component) => bindFunctionalRef(component, ref, component && {
        wrapper: component,
      }))}
      {...restProps}
    >
      {(data as (string | StatusItem)[]).map((item, index) => {
        const labelText = getLabelText(dataType, item, textField);

        const type = dataType === DATA_TYPES.OBJECT && isCustomChildren && typeField ? (item as StatusItem)[typeField] : null;

        const position = getStepPosition(index, currentIndex as number, isCustomChildren);

        return (
          <StatusBarItem
            index={index}
            isFirst={index === 0}
            isLast={index === data.length - 1}
            item={item}
            key={index.toString()}
            theme={theme}
            labelText={labelText}
            type={type}
            position={position}
            itemRender={itemRender}
            iconRender={iconRender}
            labelRender={labelRender}
            onClick={onClick}
            currentStepProgress={currentStepProgress}
          />
        );
      })}
    </Div>
  );
}) as React.FC<StatusBarProps>;

StatusBar.displayName = 'StatusBar';
