import React from 'react';
import * as L from '@korus/leda';

export default class extends React.Component {
  render() {
    return (
      <L.Tags>
        <L.Tag onClick={() => alert('Clicked')}>
          Димитровград
        </L.Tag>
        <L.Tag onClick={() => alert('Clicked')}>
          Ульяновск
        </L.Tag>
        <L.Tag onClick={() => alert('Clicked')}>
          Самара
        </L.Tag>
        <L.Tag onClick={() => alert('Clicked')}>
          Тольятти
        </L.Tag>
      </L.Tags>
    );
  }
}
