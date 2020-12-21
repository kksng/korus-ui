import React from 'react';
import { Story } from '../Story';
import { Basic } from './Basic';
import { MinimalModal, MinimalModalAlert } from './Minimal';

export const Modal = () => (
  <Story title="Modal">
    <Basic title="Basic example" />
    <MinimalModal title="Minimal Modal example" />
    <MinimalModalAlert title="Minimal ModalAlert example" />
  </Story>
);
