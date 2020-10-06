// @flow

import React, { useState } from 'react';
import * as L from '@korus/leda';
import { LiveDemo } from './LiveDemo';
import { PropsTable } from './PropsTable';
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

export const ApiStory = (props: StoryPropsType) => {
  const {
    context,
    source,
    liveDemo,
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
        {compoundCustomProps.map((propsSet) => {
          const subComponentProps = {
            isPropsOpen,
            setPropsOpen,
            source,
            context,
            customProps: propsSet.props,
          };

          return (
            <L.Section _block>
              <L.H2 _title>{propsSet.componentName.replace(/\w+\|\s/, '')} Props</L.H2>
              <CustomPropsTable {...subComponentProps} />
            </L.Section>
          );
        })}

        <LiveDemo {...liveDemoProps} />
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
      <L.H2 _title>{context.kind.replace(/\w+\|\s/, '')} Props</L.H2>
      {customProps
        ? <CustomPropsTable {...tableProps} />
        : <PropsTable {...tableProps} />
      }
      <LiveDemo {...liveDemoProps} />
    </L.Div>
  );
};
