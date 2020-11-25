# Korus-UI

Project's repository: [GitHub][16]

Korus-UI is a customizable UI component library with built-in forms handling and some other niceties.

Supports TypeScript@^3.8.3 and React@^16.8.0 (the one with hooks).

![](https://github.com/kksng/leda/workflows/.github/workflows/ci.yml/badge.svg)

## Key Features

- Full customization of library components for your project in [3 different ways][7]
- Concise and functional forms with validation (significantly less code than in popular solutions, with more flexibility and functionality)
- Improved layout (less code, easier to work with CSS classes)
- Uniform API (if you worked with one component you know how to work with the rest)
- About 70 components for building forms and layout

### Everything that you wanted from validation you can find in Korus-UI

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


## Technologies

- React@^16.8.0
- TypeScript@^3.8.3


## Documentation

The Korus-UI docs are located at [https://leda.esphere.ru][1].

All available features are documented in Russian. English version is on it's way.

- [Introduction][8]
- [API Reference][9]
- [CSS classes][10]
- [Forms][11]
- [Validation][12]
- [Refs and DOM][13]


## Code Style

We use [Airbnb JavaScript Style Guide][17]


## Installation

```
npm install korus-ui
```
Use the `L` namespace to distinguish library components from other components in your application.

```
import * as L from 'korus-ui';
```

## Development mode

- Clone or download the repo
- Run `npm i` to install dependencies
- Run `npm start` to launch dev-server with demo examples on `http://localhost:9000/`


### Available NPM scripts

| script | description | 
|----------------|----------------|
| npm start | runs project in development mode | 
| npm run build | builds project | 
| npm run check | checks eslint and typescript errors, runs jest tests | 
| npm run cypress | runs cypress tests | 
| npm run coverage | shows coverage after running cypress tests | 


## File Structure

```
├── demo                         : demo examples
│   ├── components                   : demo examples for dev mode
│   │   └── AutoComplete                : demo examples of component
│   │       ├── Minimal.tsx                 : example of usage with minimal required props
│   │       ├── Customization.tsx           : some other examples of important component's features
│   │       └── index.tsx                   : export of component's examples
│   │
│   └── cypress                     : demo examples for cypress tests
│       └── AutoComplete                : demo examples of component for cypress tests
│           └── index.tsx                   : component's usage examples
│
├── leda                         : library
│   ├── commonTypes                 : common types
│   │   └── index.ts              
│   ├── components                  : exported library components
│   │   └── DropZone                    : component
│   │       ├── constants.ts                : constants   
│   │       ├── DropZone.test.tsx           : tests for component  
│   │       ├── DropZone.tsx                : main component's features 
│   │       ├── DropZoneFiles.tsx           : additional component's features       
│   │       ├── handlers.ts                 : event handlers   
│   │       ├── helpers.test.tsx            : tests for helper functions 
│   │       ├── helpers.ts                  : helper functions 
│   │       ├── hooks.ts                    : hooks   
│   │       ├── index.tsx                   : export of component 
│   │       ├── theme.ts                    : component's theme
│   │       └── types.ts                    : component's types
│   │
│   ├── form                    : form helpers
│   │   ├── form.test.tsx           : tests for form helpers         
│   │   ├── form.ts                 : form validation helpers   
│   │   ├── helpers.ts              : helper functions   
│   │   ├── index.ts                : export form helpers 
│   │   └── types.ts                : types
│   │ 
│   ├── src                     : internal reusable components
│   │   └── DateTimeInputRange      : reusable component         
│   │       ├── handlers.ts             : event handlers   
│   │       ├── helpers.ts              : helper functions   
│   │       ├── hooks.ts                : hooks 
│   │       ├── index.tsx               : export of component 
│   │       ├── theme.ts                : component's theme 
│   │       └── types.ts                : component's types
│   │ 
│   ├── utils                   : helpers
│   │   ├── getWordEnding.ts        : helper function 
│   │   └── index.ts                : export of helper functions
│   │ 
│   ├── validators              : constants and helpers for form validation
│   │   ├── email.ts                : constant and helper function for email validation
│   │   └── index.ts                : export of validators
│   │
│   ├── constants.ts            : common constants
│   ├── index.ts                : export of library's components
│   └── messages.ts             : constants for messages
│
├── storybook                 
└── styles
```


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
import React from 'react';
import * as L from 'korus-ui';

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

## Git Workflow

We use [Gitflow][18].

### Branch names
Feature branch names are formed from the `feature/bugfix` name and the code of task in Jira.
For example: `feature/FEND-500`, `bugfix/FEND-1122`

### Forming messages in commits
The message in the commit begins with the task code, for example: `FEND-500: added isLoading prop to DropZone`.


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
- Ilya Shevchuck
- Ksenia Lugovaya

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
[16]: https://github.com/kksng/korus-ui

[17]: https://github.com/airbnb/javascript#airbnb-javascript-style-guide-
[18]: https://nvie.com/posts/a-successful-git-branching-model/