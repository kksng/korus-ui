/* eslint-disable key-spacing */
import { defaultSuggestionListTheme } from '../../src/SuggestionList/theme';

export const defaultMultiSelectTheme = {
  checkBoxItem:              'multiselect-check-box-item',
  checkBoxList:              'multiselect-checkbox-list',
  checkBoxListFooter:        'multiselect-footer',
  checkBoxListHeader:        'multiselect-header',
  checkBoxListWrapper:       'multiselect-checkbox-list-wrapper',
  checkBoxSemi:              'semi',
  checkBoxTreeList:          'checkboxtree-list',
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
