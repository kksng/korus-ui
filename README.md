# Korus-UI

Project's repository: [GitHub][15]

Korus-UI is a customizable UI component library with built-in forms handling and some other niceties.

Supports TypeScript@^3.8.3 and React@^16.8.0 (the one with hooks).

![](https://github.com/kksng/leda/workflows/.github/workflows/ci.yml/badge.svg)

## Key Features

- Full customization of library components for your project in [3 different ways][6]
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

The Korus-UI docs are located at [https://opensource.esphere.ru/korus-ui/][1].

All available features are documented in Russian. English version is on it's way.

- [Introduction][7]
- [API Reference][8]
- [CSS classes][9]
- [Forms][10]
- [Validation][11]
- [Refs and DOM][12]


## Code Style

We use [Airbnb JavaScript Style Guide][16]


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
│   │   ├── A                           : demo examples of A component
│   │   ├── AutoComplete                : demo examples of AutoComplete component
│   │   ├── Button                      : demo examples of Button component
│   │   ├── ButtonGroup                 : demo examples of ButtonGroup component
│   │   ├── CheckBox                    : demo examples of CheckBox component
│   │   ├── Collapse                    : demo examples of Collapse component
│   │   ├── Collapsible                 : demo examples of Collapsible component
│   │   ├── Currency                    : demo examples of Currency component
│   │   ├── DatePicker                  : demo examples of DatePicker component
│   │   ├── DateRange                   : demo examples of DateRange component
│   │   ├── DateTimePicker              : demo examples of DateTimePicker component
│   │   ├── DateTimeRange               : demo examples of DateTimeRange component
│   │   ├── DropDown                    : demo examples of DropDown component
│   │   ├── DropDownLink                : demo examples of DropDownLink component
│   │   ├── DropDownSelect              : demo examples of DropDownSelect component
│   │   ├── DropZone                    : demo examples of DropZone component
│   │   ├── FileDrop                    : demo examples of FileDrop component
│   │   ├── FileUpload                  : demo examples of FileUpload component
│   │   ├── HTMLTags                    : demo examples of HTMLTags component
│   │   ├── Input                       : demo examples of Input component
│   │   ├── LedaProvider                : demo examples of LedaProvider component
│   │   ├── Loader                      : demo examples of Loader component
│   │   ├── MaskedInput                 : demo examples of MaskedInput component
│   │   ├── Modal                       : demo examples of Modal component
│   │   ├── MultiSelect                 : demo examples of MultiSelect component
│   │   ├── Notifications               : demo examples of Notifications component
│   │   ├── NumericRange                : demo examples of NumericRange component
│   │   ├── NumericTextBox              : demo examples of NumericTextBox component
│   │   ├── Pagination                  : demo examples of Pagination component
│   │   ├── ProgressBar                 : demo examples of ProgressBar component
│   │   ├── RadioGroup                  : demo examples of RadioGroup component
│   │   ├── Rating                      : demo examples of Rating component
│   │   ├── Slider                      : demo examples of Slider component
│   │   ├── StatusBar                   : demo examples of StatusBar component
│   │   ├── StickyPanel                 : demo examples of StickyPanel component
│   │   ├── Svg                         : demo examples of Svg component
│   │   ├── Switcher                    : demo examples of Switcher component
│   │   ├── Table                       : demo examples of Table component
│   │   ├── Tabs                        : demo examples of Tabs component
│   │   ├── Tags                        : demo examples of Tags component
│   │   ├── Textarea                    : demo examples of Textarea component
│   │   ├── TimePicker                  : demo examples of TimePicker component
│   │   ├── TimeRange                   : demo examples of TimeRange component
│   │   ├── Tooltip                     : demo examples of Tooltip component
│   │   ├── Tour                        : demo examples of Tour component
│   │   ├── Validation                  : demo examples of Validation component
│   │   ├── VStepper                    : demo examples of VStepper component
│   │   ├── Wizard                      : demo examples of Wizard component
│   │   ├── Div.tsx                     : demo examples of Div component
│   │   ├── Dl.tsx                      : demo examples of Dl component
│   │   ├── index.ts                    : export of demo examples
│   │   ├── Navigation.tsx              : demo examples of Navigation component
│   │   ├── StateButtonGroup.tsx        : helper component for demo examples
│   │   ├── Story.tsx                   : layout for demo examples
│   │   └── Styles.tsx                  : styles for demo examples
│   │
│   ├── cypress                      : demo examples for cypress tests
│   │   ├── AutoComplete                : demo examples of AutoComplete component for cypress tests
│   │   ├── Button                      : demo examples of Button component for cypress tests
│   │   ├── ButtonGroup                 : demo examples of ButtonGroup component for cypress tests
│   │   ├── Checkbox                    : demo examples of Checkbox component for cypress tests
│   │   ├── Collapse                    : demo examples of Collapse component for cypress tests
│   │   ├── Currency                    : demo examples of Currency component for cypress tests
│   │   ├── DatePicker                  : demo examples of DatePicker component for cypress tests
│   │   ├── DateRange                   : demo examples of DateRange component for cypress tests
│   │   ├── DateTimePicker              : demo examples of DateTimePicker component for cypress tests
│   │   ├── DropDown                    : demo examples of DropDown component for cypress tests
│   │   ├── DropDownLink                : demo examples of DropDownLink component for cypress tests
│   │   ├── DropDownSelect              : demo examples of DropDownSelect component for cypress tests
│   │   ├── DropZone                    : demo examples of DropZone component for cypress tests
│   │   ├── FileDrop                    : demo examples of FileDrop component for cypress tests
│   │   ├── Input                       : demo examples of Input component for cypress tests
│   │   ├── MaskedInput                 : demo examples of MaskedInput component for cypress tests
│   │   ├── Modal                       : demo examples of Modal component for cypress tests
│   │   ├── MultiSelect                 : demo examples of MultiSelect component for cypress tests
│   │   ├── Notifications               : demo examples of Notifications component for cypress tests
│   │   ├── NumericRange                : demo examples of NumericRange component for cypress tests
│   │   ├── Pagination                  : demo examples of Pagination component for cypress tests
│   │   ├── Password                    : demo examples of Password component for cypress tests
│   │   ├── ProgressBar                 : demo examples of ProgressBar component for cypress tests
│   │   ├── RadioGroup                  : demo examples of RadioGroup component for cypress tests
│   │   ├── Rating                      : demo examples of Rating component for cypress tests
│   │   ├── Slider                      : demo examples of Slider component for cypress tests
│   │   ├── StatusBar                   : demo examples of StatusBar component for cypress tests
│   │   ├── Tabs                        : demo examples of Tabs component for cypress tests
│   │   ├── Textarea                    : demo examples of Textarea component for cypress tests
│   │   ├── TimePicker                  : demo examples of TimePicker component for cypress tests
│   │   ├── TimeRange                   : demo examples of TimeRange component for cypress tests
│   │   ├── Tooltip                     : demo examples of Tooltip component for cypress tests
│   │   ├── Tour                        : demo examples of Tour component for cypress tests
│   │   ├── Validation                  : demo examples of Validation component for cypress tests
│   │   ├── VStepper                    : demo examples of VStepper component for cypress tests
│   │   ├── Wizard                      : demo examples of Wizard component for cypress tests
│   │   └── index.ts                    : export of demo examples for cypress tests
│   │
│   ├── CypressLayout.tsx            : layout for demo examples for cypress tests
│   ├── Demo.tsx                     : demo page for cypress tests
│   ├── index.tsx                    
│   ├── types.ts                     : types
│   └── useEventSpy.tsx              : hook helps to test events
│
├── docs                         : docs
│
├── leda                         : library
│   ├── commonTypes                  : common types
│   ├── components                   : exported library components
│   │   ├── A                           : A component
│   │   ├── Article                     : Article component
│   │   ├── Aside                       : Aside component
│   │   ├── AutoComplete                : AutoComplete component
│   │   ├── B                           : B component
│   │   ├── Blockquote                  : Blockquote component
│   │   ├── Button                      : Button component
│   │   ├── ButtonGroup                 : ButtonGroup component
│   │   ├── CheckBox                    : CheckBox component
│   │   ├── Collapse                    : Collapse component
│   │   ├── Collapsible                 : Collapsible component
│   │   ├── Currency                    : Currency component
│   │   ├── DatePicker                  : DatePicker component
│   │   ├── DateRange                   : DateRange component
│   │   ├── DateTimePicker              : DateTimePicker component
│   │   ├── DateTimeRange               : DateTimeRange component
│   │   ├── Div                         : Div component
│   │   ├── Dl                          : Dl component
│   │   ├── DropDown                    : DropDown component
│   │   ├── DropDownLink                : DropDownLink component
│   │   ├── DropDownSelect              : DropDownSelect component
│   │   ├── DropZone                    : DropZone component
│   │   ├── Figcaption                  : Figcaption component
│   │   ├── Figure                      : Figure component
│   │   ├── FileDrop                    : FileDrop component
│   │   ├── FileUpload                  : FileUpload component
│   │   ├── Footer                      : Footer component
│   │   ├── Headers                     : Headers component
│   │   ├── I                           : I component
│   │   ├── Img                         : Img component
│   │   ├── Input                       : Input component
│   │   ├── Label                       : Label component
│   │   ├── LedaProvider                : LedaProvider component
│   │   ├── Li                          : Li component
│   │   ├── Loader                      : Loader component
│   │   ├── Main                        : Main component
│   │   ├── Mark                        : Mark component
│   │   ├── MaskedInput                 : MaskedInput component
│   │   ├── Modal                       : Modal component
│   │   ├── MultiSelect                 : MultiSelect component
│   │   ├── Nav                         : Nav component
│   │   ├── Notifications               : Notifications component
│   │   ├── NumericRange                : NumericRange component
│   │   ├── NumericTextBox              : NumericTextBox component
│   │   ├── Ol                          : Ol component
│   │   ├── Pagination                  : Pagination component
│   │   ├── Paragraph                   : Paragraph component
│   │   ├── Password                    : Password component
│   │   ├── ProgressBar                 : ProgressBar component
│   │   ├── Radio                       : Radio component
│   │   ├── Rating                      : Rating component
│   │   ├── Section                     : Section component
│   │   ├── Slider                      : Slider component
│   │   ├── Small                       : Small component
│   │   ├── Span                        : Span component
│   │   ├── StatusBar                   : StatusBar component
│   │   ├── StickyPanel                 : StickyPanel component
│   │   ├── Svg                         : Svg component
│   │   ├── Switcher                    : Switcher component
│   │   ├── Table                       : Table component
│   │   ├── Tabs                        : Tabs component
│   │   ├── Tags                        : Tags component
│   │   ├── Textarea                    : Textarea component
│   │   ├── TimePicker                  : TimePicker component
│   │   ├── TimeRange                   : TimeRange component
│   │   ├── Tooltip                     : Tooltip component
│   │   ├── Tour                        : Tour component
│   │   ├── UI                          : UI component
│   │   ├── Validation                  : Validation component
│   │   ├── VStepper                    : VStepper component
│   │   └── Wizard                      : Wizard component
│   │
│   ├── form                         : form component
│   │
│   ├── src                          : internal reusable components
│   │   ├── Calendar                    : Calendar component
│   │   ├── DateTimeInput               : Basic input for datetime components
│   │   ├── DateTimeInputRange          : Basic range input for datetime components
│   │   ├── HTMLTagsFactory             : Function produces wrappers for HTML tags
│   │   ├── LoaderComponent             : Reusable loader component
│   │   ├── MaskedInputBase             : Basic masked input
│   │   ├── ReactSlider                 : Import from react-slider library
│   │   ├── SuggestionList              : Suggestion list for dropdown components
│   │   └── index                       : export of internal reusable components
│   │
│   ├── utils                        : helper functions
│   │
│   ├── validators                   : constants and helpers for form validation
│   │
│   ├── constants.ts                 : common constants
│   ├── index.ts                     : export of library's components
│   └── messages.ts                  : constants for messages
│
├── public                       : folder with assets
│   └── assets                       : css styles
├── storybook                    : Storybook docs
└── styles                       : scss styles
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
          invalidMessageRender={({ elementProps: { message } }) => <L.Div _txtSuccess>{message}</L.Div>}
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

We use a simplified approach based on [Gitflow][17].

Branch `master` reflects the release history and is updated at the end of each Sprint. Branch `develop` reflects actual state of development. Feature branches are used to accomplish particular tasks and are merged into branch `develop` after task is completed.

### Branch names
Feature branch names are formed from the `feature/bugfix` name and the code of task in Jira.
For example: `feature/FEND-500`, `bugfix/FEND-1122`

### Commit messages
The commit message begins with the task code followed by name of component in brackets `[]` and short description of changes that were made. For example: `FEND-500 [DropZone] added isLoading prop to DropZone`.


## Contributing

If you want to propose any changes to the library check out our [Contributing guidelines][13].
Feel free to propose new feature or report a bug: [New issue][18]


## Release policy

The main principles of the Korus-UI release policy are to ensure the stability and compatibility of the library versions.
At the same time, the process of releasing new versions should provide the ability to quickly make changes: fix emerging errors, improve functionality and develop new features.

### Release schedule
A regular release schedule allows to plan future updates and predict the release date for necessary changes.
The development of the library is carried out in accordance with the agile methodologies. The duration of one sprint is 2 weeks (10 working days). The result of a sprint is a minor release (0.34.0 -> 0.35.0).
During a sprint, a patch version (0.34.0 -> 0.34.1) may be released if it becomes necessary to make minor changes that do not affect backward compatibility.

### Scope of release
The scope of future release is approved at the beginning of each sprint. The amount of changes planned for release is determined based on the urgency of the tasks and the severity of the identified errors. In the course of the sprint, it is possible to revise the planned updates, if the newly received tasks are assessed as of higher priority.
Third-party developers are also encouraged to make changes if they comply with the Korus-UI library [regulations][19]. Such changes will also be released after the review by the Korus-UI team.
Changes are considered ready for release if:

1. A code review was performed by at least one of the developers of the Korus-UI team;
2. The code has been covered with [autotests][20] that run successfully;
3. The changes were verified by the testing specialist of the Korus-UI team.

### Versioning
Korus-UI uses [Semantic Versioning 2.0.0][21]. Korus-UI version numbers have three parts: major.minor.patch. The version number is incremented based on the level of change included in the release and it’s impact on the library's backward compatibility. 

1. The release of the major version contains significant new features, including backward incompatible API changes. The upgrade process to a new version may require refactoring of the code, writing additional tests, and studying the documentation for the new APIs.
2. The release of the minor version contains new important features while maintaining the backward compatibility of the version.
3. The patch version release contains minor changes that do not affect backward compatibility. As a rule, patch versions are needed to fix small bugs in between planned releases.


## Browsers support

| Browsers | version |
|----------------|----------------|
| Google Chrome | 85.0.4183.121 |
| Internet Explorer | 11 |
| Microsoft Edge | 85.0.564.44 |
| Mozilla Firefox | 81.0.1 |
| Safari | 14 |

## License

This project is licensed under the terms of the [MIT license][14].


## Credit

Made by [Artem Povolskikh][2] and [Andrew Dimitrov][3] for their company with invaluable help of the company's frontend team:

- [Alexei Binetsky][5]
- Denis Ozerov
- Diana Saginbaeva
- Dmitry Zhmudikov
- Igor Khromov
- [Oksana Kukushkina][4]
- Vyacheslav Semyonov
- Ilya Shevchuck
- Ksenia Lugovaya

[1]: https://opensource.esphere.ru/korus-ui/
[2]: https://github.com/Apollo-11
[3]: https://github.com/777PolarFox777
[4]: https://github.com/JustOxxy
[5]: https://github.com/Binetsky

[6]: https://opensource.esphere.ru/korus-ui/?path=/story/basics-кастомизация--кастомизация
[7]: https://opensource.esphere.ru/korus-ui/?path=/story/basics-начало-работы--введение
[8]: https://opensource.esphere.ru/korus-ui/?path=/story/basics-api--api
[9]: https://opensource.esphere.ru/korus-ui/?path=/story/basics-вёрстка--css-классы
[10]: https://opensource.esphere.ru/korus-ui/?path=/story/basics-формы--особенности
[11]: https://opensource.esphere.ru/korus-ui/?path=/story/basics-валидация-форм--api
[12]: https://opensource.esphere.ru/korus-ui/?path=/story/basics-рефы-и-dom--использование-рефов

[13]: https://github.com/kksng/korus-ui/blob/master/CONTRIBUTING.md
[14]: https://github.com/kksng/korus-ui/blob/master/LICENSE.md
[15]: https://github.com/kksng/korus-ui

[16]: https://github.com/airbnb/javascript#airbnb-javascript-style-guide-
[17]: https://nvie.com/posts/a-successful-git-branching-model/

[18]: https://github.com/kksng/korus-ui/issues/new/choose

[19]: https://github.com/kksng/korus-ui/blob/master/CONTRIBUTING.md
[20]: https://confluence.esphere.ru/pages/viewpage.action?pageId=145694698
[21]: https://semver.org/