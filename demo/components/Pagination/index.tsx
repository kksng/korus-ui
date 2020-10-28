import React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { Minimal } from './Minimal';

export const Pagination = () => (
  <Story title="Pagination">
    <Basic title="Базовый пример" />
    <Minimal title="Minimal example" />
  </Story>
);
