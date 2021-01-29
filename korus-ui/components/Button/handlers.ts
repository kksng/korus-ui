import * as React from 'react';
import { isFunction, intersection } from 'lodash';
import { getForms, validate } from '../Validation';
import { ButtonProps } from './types';
import { fromFormArraytoFormObject, getElementRect } from './helpers';
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
        const firstInvalidForm = invalidForms[0];
        const firstInvalidField = firstInvalidForm.fields.find((field) => field.isValid === false);

        // get all form elements
        const formElementsArray = [
          ...document.querySelectorAll(`[form=${firstInvalidForm.name}], [data-form=${firstInvalidForm.name}]`),
        ] as HTMLElement[];

        // find first invalid element by name attribute (unique for form elements)
        const invalidElement = formElementsArray.find((fieldElement) => (
          fieldElement.getAttribute('name') === firstInvalidField?.name
        )) as HTMLElement;

        // wait for data update
        setTimeout(() => {
          if (invalidElement) {
            const invalidElementRect = getElementRect(invalidElement);
            const isIE = !!(document as any).documentMode || /Edge/.test(navigator.userAgent);
            const offset = invalidElementRect.top - (scrollOffset ?? 0);
            if (isIE) {
              window.scrollBy(0, offset);
            } else {
              window.scrollBy({
                behavior: 'smooth',
                top: offset,
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
      form: formsObject,
      forms,
    };

    onClick(customEvent);
  }
};
