# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
- DropDownSelect: Fix. Unable to choose 0 as a value from SuggestionList
- DropDownSelect: Fix. Incorrect component behavior on Enter press. Should clear value, show placeholder and hide clear button.
- DateTimePicker, TimePicker: Fix. Fixed timeMax timeMin limits. Time limiting works correctly.
- DropDownSelect: Fix. Should select highlighted value on Enter press. Bug was actual when 'data' is an array of objects.


## [0.27.0] - 2020-08-03

### Added
- Password. Added showEvaluationMessage prop to hide evaluation messages
- Textarea. shouldAutoResize prop - automatically adjust vertical height when required.

### Fixed
- NumericRange. Fixed RangeChangeEvent type
- Autocomplete onEnterPress event. Fixed warning message
- DateTimeInput. Bug fixed with selecting a date by keydown "enter" in component with prop "isOpen"
- DropDownSelect. Fixed bug with uncorrectly behavior on press "enter"
- FileDrop. isRequired bug fixed
- MaskedInput. Fixed bug with incorrectly cursor position when typing same chars
- Autocomplete. Change value on Enter press only if suggestions list is open


## [0.26.0] - 2020-07-15

### Added
- Added new tests based on React testing library
(Input, DateTimeInput, DateTimeInputRange, TextArea, AutoComplete, ButtonGroup, DropZone, FileDrop, MaskedInput, MultiSelect, NumericRange, CheckBox, Password, Switcher, NumericTextBox)
- Added "form" and "name" props checker for input components
- DropDown: Added interactionMode='click' prop to opening dropdown by click
- Added onEnterPress prop for handling keydown enter to AutoComplete, DropDownSelect, MultiSelect, DateRange, NumericRange, NumericTextBox components

### Fixed
- TourItem: overlayBackgroundColor prop is removed. "tour-overlay" class with "fill" attribute used to change background color

- TourItem overlayBackgroundColor prop is removed. "tour-overlay" class with "fill" attribute used to change background color
- Added "form" and "name" props checker for input components
(Input, DateTimeInput, DateTimeInputRange, TextArea, AutoComplete, ButtonGroup, DropZone, FileDrop, MaskedInput, MultiSelect, NumericRange, CheckBox, Password, Switcher, NumericTextBox)

## [0.25.0] - 2020-07-02
- Datepicker: month names changed
- Modify interface for dateTimePicker. TabKeyPressPayload add two constant: isOneMonthInRange, isOneYearInRange
- DropZone isRequired bug fixed
- ChekBox:
  - isSemi props added, now to set checkbox semi style use it instead of passing _semi class directly
  - changed Wrapper element from span to div
  - classNames that appended to CheckBox component now passes to Wrapper instead of checkbox label
- Button type=reset added

## [0.0.7] - 2020-03-12

### Fixed
- DropDownSelect: onFilterChange incorrect value on suggestion click
- DateTimePicker: date parsing errors
- Validation: validating by validator when empty and not required

## [0.0.6] - 2020-03-05

### Fixed
- StatusBar: typeField prop


## [0.0.5] - 2020-03-03

### Fixed
- Tooltip: flickering on component mount


## [0.0.4] - 2020-02-28

### Fixed
- MaskedInput: reset event & enterPress event


## [0.0.3] - 2020-02-25

### Fixed
- MaskedInput: ChangeEvent type


## [0.0.2] - 2020-02-23

### Fixed
- Collapse: auto height
- MaskedInput: add missing inputValue to event.component


## [0.0.1-alpha.16] - 2020-02-20

### Fixed
- Collapse: better initial rendering for a large number of components


## [0.0.1-alpha.15] - 2020-02-20

### Added
- DropDownLink: better typing, props are generics now
- MultiSelect: add compareObjectsByProp
- MultiSelect: conditional textField typing
- Tabs: improved render of customized elements

### Fixed
- DropDownSelect: reset highlighted item when the input field gets cleared


## [0.0.1-alpha.14] - 2020-02-19

### Fixed
- AutoComplete: shouldCorrectValue in uncontrolled mode


## [0.0.1-alpha.13] - 2020-02-14

### Added
- Validation: L.form('formName').get() and L.form('formName').validate() helpers are available


## [0.0.1-alpha.12] - 2020-02-09

### Changed
- StickyPanel: it is better now, it works as if shouldAlwaysRerender is true, but without performance penalties
- Collapse: in does not use external dependency anymore

### Added
- Collapse: now you can customize it as you like
- DateRange: requiredMessage is available
- Validation: now you can use predefined 'url' validator

### Fixed
- CheckBox: redundant rerender on each change
- DropDownSelect: last element in the suggestions list sometimes was unavailable to choose usin keyboard
- AutoComplete: minSearchLength and isOpen conflicts
- DropDown, DropDownSelect: fix boundingContainerRef types


## [0.0.1-alpha.10 - 0.0.1-alpha.11] - 2020-02-05

### Fixed
- Compilation target for IE support


## [0.0.1-alpha.9] - 2020-02-03

### Added
- Calendar, DropDown: boundingContainerRef prop for customized positioning

### Changed
- AutoComplete: use testing library for tests
