/* eslint-disable react/prop-types */
import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';


export const InvalidMessage = (props: StoryProps) => (
  <L.Div _box _inner>
    <L.Div>
      <L.Div _inner>
        <L.Input
          form="formInvalidMessage"
          name="email"
          validator="email"
          placeholder="email с предопределённым сообщением"
          _width50
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          form="formInvalidMessage"
          name="email_custom"
          validator="email"
          invalidMessage="пользовательское сообщение об ошибке email"
          placeholder="email с пользовательским сообщением"
          _width50
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          form="formInvalidMessage"
          name="function"
          validator={val => (val.length > 10)}
          invalidMessage="пользовательское сообщение об ошибке function (введите не менее десяти символов)"
          placeholder="function с пользовательским сообщением"
          _width50
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          form="formInvalidMessage"
          name="regexp"
          validator={val => /[A-Z]/.test(val)}
          invalidMessage="пользовательское сообщение об ошибке regexp (введите прописные буквы)"
          placeholder="regexp с пользовательским сообщением"
          _width50
        />
      </L.Div>
      <L.Div _inner>
        <L.Input
          form="formInvalidMessage"
          name="array"
          validator={[
            {
              validator: 'email',
              invalidMessage: 'пользовательское сообщение об ошибке email',
            },
            {
              validator: (val: string) => (val.length > 5),
              invalidMessage: 'пользовательское сообщение об ошибке function (введите не менее десяти символов)',
            },
            {
              validator: /[A-Z]/,
              invalidMessage: 'пользовательское сообщение об ошибке regexp (введите прописные буквы)',
            },
            {
              validator: /[a-z]/,
            },
          ]}
          invalidMessage="общее пользовательское сообщение, которое не должно появляться"
          placeholder="массивы валидаторов с пользовательскими сообщением"
          _width50
        />
      </L.Div>
    </L.Div>
  </L.Div>
);
