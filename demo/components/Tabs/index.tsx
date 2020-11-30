import * as React from 'react';
import { Story } from '../Story';
import { Tabs as TabsMain } from './Tabs';
import { TabsNode } from './TabsNode';
import { Scroll } from './Scroll';
import { Minimal } from './Minimal';


export const Tabs = () => (
  <Story title="Tabs">
    <TabsMain title="Tabs" />
    <TabsNode title="Tabs Node" />
    <Scroll title="Tabs scroll" />
    <Minimal title="Minimal example" />
  </Story>
);
