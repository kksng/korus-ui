import * as React from 'react';
import { isString, isNil } from 'lodash';
import { useElement, checkFormProps } from '~/utils';
import {
  addField, getValidators, removeField, updateField, validate,
} from './helpers';
import { InvalidMessage as DefaultInvalidMessage } from './InvalidMessage';
import {
  ValidationProps, ValidationState, ValidationExtra, ValidationResult,
} from './types';

export const useValidation = <P extends ValidationProps, S extends ValidationState>(
  props: P, state: S, extra: ValidationExtra,
): ValidationResult => {
  const {
    form,
    name,
    isRequired = false,
    isValid: isValidProp,
    shouldValidateUnmounted,
    validator,
    invalidMessage,
    requiredMessage,
    invalidMessageRender,
  } = props;

  checkFormProps(props);

  // значение берется из props или из state
  const value = props.value === undefined && state
    ? state.value
    : props.value;

  // текущее состояние поля
  const [isValid, setIsValid] = React.useState<boolean>(true);

  // массив сообщений об ошибке
  const [messages, setMessages] = React.useState<string[] | undefined>([]);

  // добавление/удаление поля при mount/unmount
  React.useEffect((): (() => void) | void => {
    if (isString(form) && name) {
      const validators = getValidators(validator, invalidMessage);

      addField({
        formName: form,
        fieldName: name,
        value,
        setIsValid,
        setMessages,
        shouldValidateUnmounted,
        validators,
        isRequired,
        requiredMessage,
        reset: extra.reset,
      });

      return (): void => {
        removeField(form, name);

        setIsValid(true);
      };
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, name]);

  // каждый раз при смене props - записываем новые данные в forms, необходимо для корректной работы валидации
  React.useEffect(() => {
    if (form && name) {
      const validators = getValidators(validator, invalidMessage);

      updateField({
        formName: form,
        fieldName: name,
        value,
        isValidProp,
        isRequired,
        validators,
        shouldValidateUnmounted,
        requiredMessage,
      });
    }
  }, [form, isRequired, name, value, isValidProp, validator, invalidMessage, shouldValidateUnmounted, requiredMessage]);

  const isValidateCurrent = true;
  // функция, которую получает пользователь для валидации текущего поля, её можно вызывать, например, в обработчике onBlur
  const validateCurrent = React.useCallback((val?: unknown) => (isNil(isValidProp) ? validate(form, name, val, isValidateCurrent) : isValidProp), [form, isValidProp, name]);

  // сообщение о невалидном поле, автоматически отслеживает состояние поля и показывает сообщение, когда поле не валидно
  const InvalidMessage = useElement(
    'InvalidMessage',
    DefaultInvalidMessage,
    invalidMessageRender,
    props,
    state,
  );

  const invalidMessageComponent = React.useMemo(() => {
    const message: React.FC<{}> = () => <InvalidMessage isValid={isValid} messages={messages} />;
    message.displayName = 'InvalidMessageWrapper';

    return message;
  }, [isValid, messages]);

  // если формы нет - возвращаем заглушку, сделать это в самом начале нельзя из-за правила хуков
  if (!form) return { isValid: true, validateCurrent: () => true, InvalidMessage: invalidMessageComponent };

  return {
    isValid,
    validateCurrent,
    InvalidMessage: invalidMessageComponent,
  };
};
