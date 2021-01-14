import * as React from 'react';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.Table>
      <L.ColGroup>
        <L.Col />
        <L.Col />
        <L.Col />
      </L.ColGroup>
        <L.THead>THead</L.THead>
        <L.TBody>
          <L.Tr>
            <L.Th>1</L.Th>
            <L.Th>2</L.Th>
            <L.Th>3</L.Th>
          </L.Tr>
          <L.Tr>
            <L.Th>2</L.Th>
            <L.Td>4</L.Td>
            <L.Td>6</L.Td>
          </L.Tr>
          <L.Tr>
            <L.Th>3</L.Th>
            <L.Td>6</L.Td>
            <L.Td>9</L.Td>
          </L.Tr>
        </L.TBody>
        <L.TFoot>TFoot</L.TFoot>
      </L.Table>
    </L.Div>
  );
};
