/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '~';

const exampleCode = `
export const BlockElements = () => (
  <L.Div _box _inner>
    <L.Img _box alt="Кот" height={200} width={250} src="http://memesmix.net/media/created/rpi0j5.jpg" />
  </L.Div>
);
`;

export const Images = ({ ...restProps }) => (
  <L.Div _box _inner>
    <L.Img _box alt="Кот" style={{ backgroundColor: '#332c22' }} height={300} width={350} src="http://memesmix.net/media/created/rpi0j5.jpg" />
    <br />
    <L.H6>Код примера:</L.H6>
  </L.Div>
);
