import * as React from 'react';
import { isFunction, intersection } from 'lodash';
import { getForms, validate } from '../Validation';
import { ButtonProps } from './types';
import { fromFormArraytoFormObject } from './helpers';
import { form as LedaForm } from '../../form';

export const createClickHandler = (props: ButtonProps) => (ev: React.MouseEvent<HTMLButtonElement>): void => {
  const {
    onClick, onValidationFail, isDisabled, isLoading, scrollDelay,
    scrollOffset, form: formProp, shouldScrollToInvalidFields, type,
  } = props;

  if (isDisabled || isLoading) return; // если кнопка отключена или в состояниии загрузки, прервать выполнение функции

  // если кнопка участвует в валидации форм
  if (formProp) {
    const buttonFormNames = Array.isArray(formProp) ? formProp : [formProp];
    const formNames = getForms().map((form) => form.name);
    const validButtonFormNames = intersection(formNames, buttonFormNames);

    if (type === 'reset') {
      validButtonFormNames.map((formName) => LedaForm(formName).reset());
      return;
    }

    const isEachFormValid = validButtonFormNames
      .map((currentForm) => validate(currentForm)) // validate all forms
      .every((item) => item); // tell me if all of them are valid

    if (!isEachFormValid) {
      const invalidForms = getForms()
        .filter((currentForm) => validButtonFormNames.includes(currentForm.name))
        .filter((currentForm) => currentForm.fields.some((field) => !field.isValid));

      if (isFunction(onValidationFail)) {
        onValidationFail({ ...ev, invalidForms });
      }

      if (shouldScrollToInvalidFields && invalidForms.length > 0) {
        const firstInvalidFormName = invalidForms[0].name;
        // data-form для buttonGroup, использовать просто [from=""] нельзя, т.к. захватит кнопки тоже
        const formElements = document.querySelectorAll(`input[form="${firstInvalidFormName}"], [data-form="${firstInvalidFormName}"`);
        // ждем пока обновятся данные
        setTimeout(() => {
          const invalidElement = Array.from(formElements).find((element) => element.getAttribute('aria-invalid') === 'true');

          if (invalidElement) {
            const invalidElementRect = invalidElement.getBoundingClientRect();
            const isIE = !!(document as any).documentMode || /Edge/.test(navigator.userAgent);
            const offset = invalidElementRect.top - (scrollOffset ?? 0);
            if (isIE) {
              window.scrollBy(0, offset);
            } else {
              window.scrollBy({
                top: offset,
                behavior: 'smooth',
              });
            }
          }
        }, scrollDelay ?? 0);
      }

      return;
    }
  }

  if (isFunction(onClick)) {
    if (!formProp) {
      onClick(ev);
      return;
    }

    const forms = getForms(formProp);
    const formsObject = fromFormArraytoFormObject(forms);

    const customEvent = {
      ...ev,
      forms,
      form: formsObject,
    };

    onClick(customEvent);
  }
};
