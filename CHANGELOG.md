# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.46.0] - 2021-07-07

### Added
- MultiSelect: Added header and footer in checkboxes list
- MultiSelect: Refactoring
- FileList: Added new component
- Storybook: Added documentation for FileList component
- DropZone: Add new styles
- DropDown: Add new styles
- Password: Add new styles
- Pagination: Add new styles

## [0.45.1] - 2021-04-29

### Fixed
- MaskedInput: Fixed autocomplete


## [0.45.0] - 2021-04-26

### Added
- CheckBoxTree: Added new component


## [0.44.0] - 2021-04-12

### Added
- DropDown: Added class disabled

### Fixed
- NumericTextBox: Fixed rounding numbers on change event


## [0.43.0] - 2021-03-29

### Added
- LinkTree: Added new component
- Drawer: Added new component

### Fixed
- DropDownSelect: Fixed long strings display


## [0.42.0] - 2021-03-15

### Added
- CountDown: Added new component

### Fixed
- Tabs: Fixed scroll


## [0.41.0] - 2021-02-25

### Added
- Menu: Added new component
- Menu: Close dropdown items on scroll

### Changed
- Modal: Prop 'size' adds class to div.modal-window instead of style attribute

### Fixed
- DatePicker: Fixed date selection from previous month


## [0.40.0] - 2021-02-09

### Added
- Validation: added scroll to invalid DropZone and FileDrop fields
- FileUpload: Added maxFileNameLength prop
- MaskedInput: Added clear button

### Changed
- README: Updated browsers list in README.md
- Updated .npmignore

### Fixed
- MaskedInput: Fixed backspace
- Fixed test coverage report for Windows
- Tabs: Fixed scroll
- MaskedInput: Remove mask on reset


## [0.39.0] - 2021-01-26

### Added
- TimeRange, TimePicker: Added autocompletion with 0


## [0.38.0] - 2021-01-12

### Changed
- Refactoring: Renamed leda folder to korus-ui

### Fixed
- Tour: Fixed scroll behaviour when active element is inside modal window
- TimeRange: Fixed behaviour on Tab click
- DateRange: Fixed time for date values
- TimeRange, TimePicker: Added max limits for hours, minutes seconds
- Changed file structure in README


## [0.37.0] - 2020-12-21

### Added
- Tour: Added step changing animation. Block page while step loading
- VStepper: Added type warning, new props footerContent and nextStepType to VStepperItem
- Refactoring: Added changelog generator

### Changed
- Storybook: Changed library name to Korus-ui

### Fixed
- ToolTip: Fixed tooltip display
- Tabs: Fixed tabs display and scroll in IE
- Modal, DemoPage: validate DemoPage Modal name field
- FileDrop: Prevented firing change event before file upload
- FileDrop: Fixed reset handler
- Storybook: Fixed bug that prevented assets folder from being copied to build
- Tour: Fixed IE component behavior.
- NumericTextBox, MaskedInput: Fixed demo examples, removed unused props prefixRender and suffixRender


## [0.36.0] - 2020-12-07

### Added
- Added release policy to README
- Completed description in README.md: technologies, git workflow, project's structure

### Changed
- CONTRIBUTING.md, Issue template: Update GitHub issue template

### Fixed
- Input: Fixed paste event handler for Input with maxLength prop
- MaskedInput: Fixed clearing incomplete mask value by setting null value or calling reset function
- DropDown: Fixed IE11 bug. Dropdown list should be visible.
- MultiSelect: Fixed styles for IE
- Tooltip: Fixed displaying in IE
- MultiSelect: Fixed working with object data
- MaskedInput: Fixed cursor position


## [0.35.0] - 2020-11-23

### Added
- Tour: Added stepDelay prop, added positions: top-left, bottom-left, top-center, bottom-center
- DropZone: Added isLoading, loadingProgress and loadingViewRender props

### Fixed
- Validation: Fixed displaying of invalidMessage with isValid prop set to false
- NumericRange: Fixed null value display bug
- Tour: Added class 'tour-active-element' for active element to customize styles
- Fixed typing of props for Demo examples
- FileDrop, DropZone: Added loadingText prop
- ToolTip: Updated styles
- VStepper: hiding step content using 'display: none'. Required to fix IE related bug.


## [0.34.0] - 2020-11-09

### Added
- Set up automatic calculation of test coverage
- Tour: Added padding prop and possibility to interact with tour element

### Fixed
- DatePicker, TimePicker: Fixed validation
- MultiSelect: Input is cleared after selecting item
- ToolTip: Added corner position
- Validation: Fixed validation in controlled mode


## [0.33.0] - 2020-10-26

### Added
- README: Added description to README.md
- DatePicker: Added tests for Input, onEnterPress event, test for pressing the "Backspace", "Esc" and "Tab"

### Fixed
- DropDownLink: Close on mouseleave
- DropDown: Close on button and item click
- Input: Fixed paste event handler, paste is handled by default
- DropDownSelect: Removed dropdown opening logic from focus handler to click handler
- MultiSelect: Fixed checkbox classes
- AutoComplete: Fixed component's behavior on enter press by synchronizing selected and highlighted values
- ToolTip: Fixed calculation of position for selecting the opening side
- DropZone: Prohibited deleting files in disabled mode
- FileDrop: Fixed danger class on error.


## [0.32.0] - 2020-10-12

### Fixed
- Wizard: Added new div element with class .progress-line to set styles for progress bar
- Modal: Increased the sm width of the component from 420px to 480px
- DateRange: Added possibility to set array of empty strings as state
- MultiSelect: Fixed selectAll text
- RadioGroup: Restricted possibility to work with value=undefined. Component defaults to first RadioButton's value
- DropZone: Fixed change event handler for removed files
- MultiSelect: Fixed logic of select all checkbox
- DropDown: Fixed closing dropdown list on click outside an element in interactionMode="click"
- Switcher: Changed wrapper span tag to div


## [0.31.1] - 2020-09-28

### Fixed
- RadioGroup: Fixed change-event type


## [0.31.0] - 2020-09-28

### Added
- Modal: Added Alert with an overlay. Should disable Modal interactions(closing) while Alert is displayed.
- Wizard: Added new Wizard component

### Fixed
- DropZone: Fixed downloading external and attached files


## [0.30.0] - 2020-09-14

### Added
- RadioGroup: Added component to ev.form
- Input: Added possibility to paste multiple times without replacing previous value
- DatePicker: Added tests for monthNames, shortMonthNames, weekDayNames, shortWeekDayNames
- DatePicker: Added tests for max, min attributes and onEnterPress event
- Checkbox: Added tests checking that className attribute is passed to Wrapper, not LabelElement
- DatePicker: Added possibility to pass custom month and week day name through props. New props: monthNames, shortMonthNames, weekDayNames, shortWeekDayNames.
- Notifications: Pass removed notification as component.currentItem to onChange handler.

### Fixed
- RadioGroup: Fixed value prop type
- Input: Focus input on clear button click.
- MaskedInput: Fixed onPaste event handler, added tests


## [0.29.0] - 2020-08-31

### Added
- DateTimePicker: Added disabledDates prop. Array of dates and dates ranges that are disabled to be selected as a value.

### Fixed
- NumericRange: Incorrect 0 value handler.
- Autocomplete, Input, MultiSelect, Password: hide clear button when disabled.


## [0.28.0] - 2020-08-17

### Fixed
- DropDownSelect: Unable to choose 0 as a value from SuggestionList
- DropDownSelect: Incorrect component behavior on Enter press. Should clear value, show placeholder and hide clear button.
- DateTimePicker, TimePicker: Fixed timeMax timeMin limits. Time limiting works correctly.
- DropDownSelect: Should select highlighted value on Enter press. Bug was actual when 'data' is an array of objects.
- Input: Incorrect text input behavior with maxLength prop.


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
