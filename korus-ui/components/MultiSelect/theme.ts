/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultMultiSelectTheme = {
  checkBoxItem:              'multiselect-check-box-item',
  checkBoxSemi:              'semi',
  clearIcon:                 'multiselect-clear-icon',
  input:                     'multiselect-input',
  inputFocused:              'focused',
  inputWrapper:              'multiselect-input-wrapper',
  inputWrapperDisabled:      'disabled',
  inputWrapperFocused:       'focused',
  inputWrapperInvalid:       'danger',
  inputWrapperRequired:      'required',
  placeholder:               'multiselect-placeholder',
  tagsContainer:             'multiselect-tags-container',
  tagsUnion:                 'multiselect-tags-union',
  wrapper:                   'multiselect-wrapper',
  /** SuggestionList theme */
  ...defaultSuggestionListTheme,
};
