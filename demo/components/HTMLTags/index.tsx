import * as React from 'react';
import { Story } from '../Story';
import { BlockElements } from './BlockElements';
import { StringElements } from './StringElements';
import { LayoutElements } from './LayoutElements';
import { ListElements } from './ListElements';
import { Images } from './Images';
import { Minimal } from './Minimal';

export const HTMLTags = () => (
  <Story title="Layout with Leda">
    <BlockElements title="Block elements" />
    <StringElements title="String elements" />
    <LayoutElements title="Placement elements" />
    <ListElements title="List" />
    <Images title="Images" />
    <Minimal title="Minimal example" />
  </Story>
);
