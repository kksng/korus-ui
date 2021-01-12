import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { form } from './form';
import { AutoComplete } from '../components/AutoComplete';
import { Textarea } from '../components/Textarea';
import { RadioGroup, RadioButton } from '../components/Radio';

describe('get controlled form', () => {
  const formName = 'form-name-get';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  const handleChange = jest.fn();
  const component = (
    <>
      <AutoComplete
        form={formName}
        value={fieldValue}
        data={data}
        isRequired
        name={fieldName}
        onChange={handleChange}
      />
      <RadioGroup
        form={formName}
        name="radio"
        value={1}
        onChange={handleChange}
      >
        <RadioButton value={1}>One</RadioButton>
        <RadioButton value={2}>Two</RadioButton>
      </RadioGroup>
    </>
  );
  test('get one', () => {
    render(component);
    const field = form(formName, fieldName).get();
    expect(field).toMatchObject({
      name: fieldName,
      value: fieldValue,
    });
  });
  test('get all', () => {
    render(component);
    const field = form(formName).get();
    expect(field).toMatchObject([{
      name: fieldName,
      value: fieldValue,
    }, {
      name: 'radio',
      value: 1,
    }]);
  });
});

describe('reset controlled form', () => {
  const formName = 'form-name-reset';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  test('reset one', () => {
    const handleChange = jest.fn();
    render((
      <AutoComplete
        form={formName}
        value={fieldValue}
        data={data}
        isRequired
        name={fieldName}
        onChange={handleChange}
      />
    ));
    const result = form(formName, fieldName).reset();
    expect(handleChange).toBeCalledTimes(1);
    expect(result).toBeTruthy();
  });
  test('reset all', () => {
    const handleChange = jest.fn();
    render((
      <AutoComplete
        form={formName}
        value={fieldValue}
        data={data}
        isRequired
        name={fieldName}
        onChange={handleChange}
      />
    ));
    const result = form(formName).reset();
    expect(handleChange).toBeCalledTimes(1);
    expect(result).toBeTruthy();
  });
});

describe('reset uncontrolled form', () => {
  const defaultValue = 'default-value';
  const newValue = 'new-value';
  const formName = 'form-name-reset';
  const fieldName = 'textarea';
  const component = (
    <Textarea
      defaultValue={defaultValue}
      form={formName}
      name={fieldName}
    />
  );
  test('reset one', () => {
    render(component);
    userEvent.type(screen.getByRole('textbox'), newValue);
    expect(screen.getByRole('textbox')).toHaveValue(newValue);
    act(() => {
      const result = form(formName, fieldName).reset();
      expect(result).toBeTruthy();
    });
    expect(screen.getByRole('textbox')).toHaveValue(defaultValue);
  });
  test('reset all', () => {
    render(component);
    userEvent.type(screen.getByRole('textbox'), newValue);
    expect(screen.getByRole('textbox')).toHaveValue(newValue);
    act(() => {
      const result = form(formName).reset();
      expect(result).toBeTruthy();
    });
    expect(screen.getByRole('textbox')).toHaveValue(defaultValue);
  });
});

describe('validate controlled form', () => {
  const formName = 'form-name-validate';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  const handleChange = jest.fn();
  const validationReference = {
    isValid: true,
    name: fieldName,
  };
  const component = (
    <AutoComplete
      form={formName}
      value={fieldValue}
      data={data}
      isRequired
      name={fieldName}
      onChange={handleChange}
    />
  );
  test('validate one', () => {
    render(component);
    act(() => {
      const validation = form(formName, fieldName).validate();
      expect(validation).toMatchObject(validationReference);
    });
    expect(handleChange).toBeCalledTimes(0);
  });
  test('validate all', () => {
    render(component);
    act(() => {
      const validation = form(formName).validate();
      expect(validation).toMatchObject([validationReference]);
    });
    expect(handleChange).toBeCalledTimes(0);
  });
});

describe('validate controlled form with empty field', () => {
  const formName = 'form-name-validate';
  const fieldValue = '';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  const handleChange = jest.fn();
  const validationReference = {
    isValid: false,
    name: fieldName,
  };
  const component = (
    <AutoComplete
      form={formName}
      value={fieldValue}
      data={data}
      isRequired
      name={fieldName}
      onChange={handleChange}
    />
  );
  test('validate one', () => {
    render(component);
    act(() => {
      const validation = form(formName, fieldName).validate();
      expect(validation).toMatchObject(validationReference);
    });
    expect(handleChange).toBeCalledTimes(0);
  });
  test('validate all', () => {
    render(component);
    act(() => {
      const validation = form(formName).validate();
      expect(validation).toMatchObject([validationReference]);
    });
    expect(handleChange).toBeCalledTimes(0);
  });
});

describe('validate controlled form with field validator', () => {
  const formName = 'form-name-validate';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  const handleChange = jest.fn();
  const validate = (value: string) => value.length < 9;
  const invalidMessage = 'invalid-message';
  const validationReference = {
    invalidMessages: [invalidMessage],
    isValid: false,
    name: fieldName,
  };
  const component = (
    <AutoComplete
      form={formName}
      value={fieldValue}
      data={data}
      name={fieldName}
      onChange={handleChange}
      validator={validate}
      invalidMessage={invalidMessage}
    />
  );
  test('validate one', () => {
    render(component);
    act(() => {
      const validation = form(formName, fieldName).validate();
      expect(validation).toMatchObject(validationReference);
    });
    expect(handleChange).toBeCalledTimes(0);
  });
  test('validate all', () => {
    render(component);
    act(() => {
      const validation = form(formName).validate();
      expect(validation).toMatchObject([validationReference]);
    });
    expect(handleChange).toBeCalledTimes(0);
  });
});

describe('validate controlled form with validators', () => {
  const formName = 'form-name-validate';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  const handleChange = jest.fn();
  const invalidMessage = 'invalid-message';
  const validationReference = {
    invalidMessages: [invalidMessage],
    isValid: false,
    name: fieldName,
  };
  const component = (
    <AutoComplete
      form={formName}
      value={fieldValue}
      data={data}
      name={fieldName}
      onChange={handleChange}
      invalidMessage={invalidMessage}
    />
  );
  const validators = [{
    invalidMessage,
    validator: (value: string) => value.length > 0,
  }, {
    invalidMessage,
    validator: (value: string) => value.length < 9,
  }];
  test('validate one', () => {
    render(component);
    act(() => {
      const validation = form(formName, fieldName).validate(validators);
      expect(validation).toMatchObject(validationReference);
    });
    expect(handleChange).toBeCalledTimes(0);
  });
});

describe('validate uncontrolled form with field validator', () => {
  const formName = 'form-name-validate';
  const fieldValue = 'field-value';
  const data = [fieldValue];
  const fieldName = 'auto-complete';
  const handleChange = jest.fn();
  const validate = (value: string) => value.length < 9;
  const invalidMessage = 'invalid-message';
  const validationReference = {
    invalidMessages: [invalidMessage],
    isValid: false,
    name: fieldName,
  };
  const component = (
    <AutoComplete
      form={formName}
      data={data}
      name={fieldName}
      onChange={handleChange}
      validator={validate}
      invalidMessage={invalidMessage}
    />
  );
  test('validate one', () => {
    render(component);
    userEvent.type(screen.getByRole('textbox'), fieldValue);
    act(() => {
      const validation = form(formName, fieldName).validate();
      expect(validation).toMatchObject(validationReference);
    });
    expect(screen.getByRole('textbox')).toHaveValue(fieldValue);
  });
  test('validate all', () => {
    render(component);
    userEvent.type(screen.getByRole('textbox'), fieldValue);
    act(() => {
      const validation = form(formName).validate();
      expect(validation).toMatchObject([validationReference]);
    });
    expect(screen.getByRole('textbox')).toHaveValue(fieldValue);
  });
});
