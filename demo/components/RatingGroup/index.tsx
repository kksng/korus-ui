import React from 'react';
import { Story } from '../Story';
import { Rating } from './Rating';
import { RatingGroupMinimal } from './Minimal';

export const RatingGroup = () => (
    <Story title="Rating">
        <Rating title="Базовый пример" />
        <RatingGroupMinimal title="Минимальный пример" />
    </Story>
);