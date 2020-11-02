# Korus-UI

Korus-UI is a customizable UI component library with built-in forms handling and some other niceties.

Supports TypeScript and React@^16.8.0 (the one with hooks).

![](https://github.com/kksng/leda/workflows/.github/workflows/ci.yml/badge.svg)

Key Features

- Full customization of library components for your project in [3 different ways][7]
- Concise and functional forms with validation (significantly less code than in popular solutions, with more flexibility and functionality)
- Improved layout (less code, easier to work with CSS classes)
- Uniform API (if you worked with one component you know how to work with the rest)
- About 70 components for building forms and layout

Everything that you wanted from validation you can find in Korus-UI

- Simplicity
- Field validation by function or RegExp
- There are ready-made validators
- One or more validators for each field with its own messages
- Custom messages (text and styles)
- Setting the field validity from the outside using the isValid attribute
- Validation of components in the unmounted state
- Validation of fields on loss of focus, form submission, or any custom event in the app
- Scroll to invalid fields when submitting a form
- One-click validation of multiple forms
- Helper functions for validation of passed values

## Installation

```
npm install korus-ui
```
Use the `L` namespace to distinguish library components from other components in your application.

```
import * as L from 'korus-ui';
```

## Documentation

The Korus-UI docs are located at [https://leda.esphere.ru][1].

All available features are documented in Russian. English version is on it's way.

- [Introduction][8]
- [API Reference][9]
- [CSS classes][10]
- [Forms][11]
- [Validation][12]
- [Refs and DOM][13]


## Examples

A basic example of form with validation:

```jsx
import React from 'react';
import * as L from 'korus-ui';

const Form = () => (
  <L.Div _wrapper >
    <L.Input
      validator="email"
      isRequired
      form="myForm"
      name="myInput"
    />
    <L.Button
      form="myForm"
    >
      Click me
    </L.Button>
  </L.Div>
);
```

Multiple forms can be submitted with a single button:

```jsx
import React from 'react';
import * as L from 'korus-ui';

const MultipleForms = () => (
  <L.Div>
    <L.P>
      <L.Input
        isRequired
        form="form1"
        name="Input1"
        placeholder="form1 Input1"
      />
    </L.P>
    <L.P>
      <L.Input
        isRequired
        form="form2"
        name="Input1"
        placeholder="form2 Input1"
      />
    </L.P>
    <L.Button
      form={['form1', 'form2']}
      shouldScrollToInvalidFields
    >
      Submit both
    </L.Button>
  </L.Div>
);
```
Possibility to display custom validation messages:

```jsx
import * as React from 'react';
import * as L from '../../../leda';

export const ValidationMessageRender = () => (
  <L.Div _box _inner>
    <L.Div>
      <L.Div _inner>
        <L.Input
          isRequired
          validator={(value) => value.length <= 5}
          invalidMessage="Maximum 5 symbols allowed"
          form="customValidationMessage"
          name="Input1"
          placeholder="outer isValid"
          validationMessageRender={({ elementProps: { message } }) => <L.Div _txtSuccess>{message}</L.Div>}
        />
      </L.Div>
      <L.Div _inner>
        <L.Button
          form="customValidationMessage"
          _warning
        >
          Click me
        </L.Button>
      </L.Div>
    </L.Div>
  </L.Div>
);
```

## Contributing

If you want to propose any changes to the library check out our [Contributing guidelines][14].

## Browsers support

| Browsers | version | 
|----------------|----------------|
| Google Chrome | 85.0.4183.121 | 
| Internet Explorer | 11 | 
| Microsoft Edge | 85.0.564.44 | 
| Mozilla Firefox | 81.0.1 | 
| Safari | 14 | 

## License

This project is licensed under the terms of the [MIT license][15].


## Credit

Made by [Artem Povolskikh][2] and [Andrew Dimitrov][3] for their company with invaluable help of the company's frontend team:

- [Alexei Binetsky][6]
- Andrey Shamin
- Denis Ozerov
- Diana Saginbaeva
- Dmitry Zhmudikov
- [Efim Roshal][4]
- Ekaterina Dmitrieva
- Igor Khromov
- Konstantin Tishkunov
- Maxim Fomin
- [Oksana Kukushkina][5]
- Vyacheslav Semyonov


[1]: https://leda.esphere.ru
[2]: https://github.com/Apollo-11
[3]: https://github.com/777PolarFox777
[4]: https://github.com/roshal
[5]: https://github.com/JustOxxy
[6]: https://github.com/Binetsky

[7]: https://leda.esphere.ru/?path=/story/basics-кастомизация--кастомизация
[8]: https://leda.esphere.ru/?path=/story/basics-начало-работы--введение
[9]: https://leda.esphere.ru/?path=/story/basics-api--api
[10]: https://leda.esphere.ru/?path=/story/basics-вёрстка--css-классы
[11]: https://leda.esphere.ru/?path=/story/basics-формы--особенности
[12]: https://leda.esphere.ru/?path=/story/basics-валидация-форм--api
[13]: https://leda.esphere.ru/?path=/story/basics-рефы-и-dom--использование-рефов

[14]: https://github.com/kksng/korus-ui/blob/master/CONTRIBUTING.md
[15]: https://github.com/kksng/korus-ui/blob/master/LICENSE.md