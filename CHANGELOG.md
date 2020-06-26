# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
