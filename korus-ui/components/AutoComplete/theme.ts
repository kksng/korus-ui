/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultAutoCompleteTheme = {
  ...defaultSuggestionListTheme,
  closeIcon:                  'autocomplete-clear-icon',
  input:                      'autocomplete-input',
  inputWrapper:               'autocomplete-input-wrapper',
  inputWrapperDisabled:       'disabled',
  inputWrapperFocused:        'focused',
  inputWrapperInvalid:        'danger',
  inputWrapperRequired:       'required',
  sectionContainer:           'autocomplete__section-container',
  sectionContainerFirst:      'first',
  sectionTitle:               'autocomplete-section-title',
  suggestion:                 'suggestion-item',
  suggestionFirst:            'first',
  suggestionHighlighted:      'highlighted',
  suggestionsContainer:       'suggestion-wrapper',
  suggestionsContainerOpened: 'opened',
  suggestionsList:            'suggestion-list',
  wrapper:                    'autocomplete-wrapper',
  wrapperOpened:              'opened',
};
