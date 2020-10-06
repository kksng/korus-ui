// @flow

import React, { useState } from 'react';
import * as L from '@korus/leda';
import { LiveDemo } from './LiveDemo';
import { InfoHeader } from './InfoHeader';
import { PropsTable } from './PropsTable';
import { InfoContent } from './InfoContent';
import { CustomPropsTable } from './CustomPropsTable';

export type ContextType = {
  kind: string,
  story: string,
};
type PropsType = {
  name: string,
  type: string,
  required: string,
  description: string,
  componentName: string,
  props: string | Object,
};

type OptionsType = {
  customProps?: Object,
  compoundCustomProps?: Object,
  text: string | React$Node,
  additionalInfo?: React$Node,
  source?: string | Array<string>,
  props?: Array<PropsType>,
  propTables?: string,
  liveDemo?: string,
};


export type StoryPropsType = OptionsType & {
  context: ContextType,
};

export const Story = (props: StoryPropsType) => {
  const {
    context,
    source,
    liveDemo,
    text,
    additionalInfo,
    props: componentProps,
    customProps,
    compoundCustomProps,
  } = props;

  const [isPropsOpen, setPropsOpen] = useState<boolean>(true);

  const [isDemoOpen, setDemoOpen] = useState<boolean>(true);

  const liveDemoProps = {
    isDemoOpen,
    setDemoOpen,
    liveDemo,
  };

  if (compoundCustomProps) {
    return (
      <L.Div _article>
        <InfoHeader {...context} />
        <InfoContent text={text} additionalInfo={additionalInfo} />
        <LiveDemo {...liveDemoProps} />

        {compoundCustomProps.map((propsSet) => {
          const subComponentProps = {
            isPropsOpen,
            setPropsOpen,
            source,
            context,
            customProps: propsSet.props,
          };

          return (
            <L.Div>
              <L.H2 _title>{propsSet.componentName.replace(/\w+\|\s/, '')} Props</L.H2>
              <CustomPropsTable {...subComponentProps} />
            </L.Div>
          );
        })}
      </L.Div>
    );
  }

  const tableProps = {
    isPropsOpen,
    setPropsOpen,
    source,
    context,
    props: componentProps,
    customProps,
  };

  return (
    <L.Div _article>
      <InfoHeader {...context} />
      <InfoContent text={text} additionalInfo={additionalInfo} />
      <LiveDemo {...liveDemoProps} />
      {customProps
        ? <CustomPropsTable {...tableProps} />
        : <PropsTable {...tableProps} />
      }
    </L.Div>
  );
};
