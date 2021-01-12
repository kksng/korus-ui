import React from 'react';
import { Span } from '../Span';
import { InvalidMessageProps } from './types';

export const InvalidMessage = ({ isValid, messages = [] }: InvalidMessageProps): React.ReactElement | null => (isValid || messages.length === 0
  ? null
  : (
    <Span _invalid-message-list>
      {messages.map((message) => (
        <Span key={message} _invalid-message-item>
          {message}
        </Span>
      ))}
    </Span>
  ));
