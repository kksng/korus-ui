// @ts-nocheck
import React from 'react';
import {
  render,
  fireEvent,
} from '@testing-library/react';
import { Button } from './index';
import { Input } from '../Input';


describe('Button snapshots collection', () => {
  test('is Button render right with basic props?', () => {
    const wrapper = render((
      <Button>test</Button>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
  test('is Button render right with isLoading?', () => {
    const wrapper = render((
      <Button isLoading>test</Button>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
  test('is Button render right with isDisabled attributes?', () => {
    const wrapper = render((
      <Button isDisabled>test</Button>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
  test('is Button render right with Form and onClick props?', () => {
    const wrapper = render((
      <div>
        <Input form="test" name="in" isRequired />
        <Button onClick={jest.fn()} form="test" isDisabled>test</Button>
      </div>
    ));
    expect(wrapper.container)
      .toMatchSnapshot();
  });
});
describe('Button condition set collection', () => {
  test('is Button attributes set right?', () => {
    const { container, rerender } = render(<Button _primary>test</Button>);

    expect(container.querySelectorAll('button.primary')[0])
      .toBeInTheDocument();

    rerender(<Button _secondary>test</Button>);

    expect(container.querySelectorAll('button.secondary')[0])
      .toBeInTheDocument();

    rerender(<Button _success>test</Button>);

    expect(container.querySelectorAll('button.success')[0])
      .toBeInTheDocument();

    rerender(<Button _warning>test</Button>);

    expect(container.querySelectorAll('button.warning')[0])
      .toBeInTheDocument();

    rerender(<Button _danger>test</Button>);

    expect(container.querySelectorAll('button.danger')[0])
      .toBeInTheDocument();

    rerender(<Button _small>test</Button>);

    expect(container.querySelectorAll('button.small')[0])
      .toBeInTheDocument();

    rerender(<Button _large>test</Button>);

    expect(container.querySelectorAll('button.large')[0])
      .toBeInTheDocument();

    rerender(<Button _block>test</Button>);

    expect(container.querySelectorAll('button.block')[0])
      .toBeInTheDocument();
  });
  test('is Button work right with isDisabled property?', () => {
    const onClickHandler = jest.fn();
    const { container } = render(<Button isDisabled onClick={onClickHandler}>test</Button>);
    const button = container.querySelectorAll('button')[0];

    expect(container.querySelectorAll('button.disabled')[0])
      .toBeInTheDocument();

    fireEvent.click(button);

    expect(onClickHandler)
      .not
      .toHaveBeenCalled();
  });
  test('is Button work right with isLoading property?', () => {
    const onClickHandler = jest.fn();
    const { container } = render(<Button isLoading onClick={onClickHandler}>test</Button>);
    const button = container.querySelectorAll('button')[0];

    expect(container.querySelectorAll('button.loading')[0])
      .toBeInTheDocument();

    fireEvent.click(button);

    expect(onClickHandler)
      .not
      .toHaveBeenCalled();
  });
});
describe('Button form validation test collection', () => {
  test('is Button work right with form attributes submit Form with valid value?', () => {
    const onSubmitValid = jest.fn();
    const onSubmitInvalid = jest.fn();
    const email = 'some@email.ru';
    const { getByText } = render((
      <div>
        <Input form="test" name="email" invalidMessage="error" isRequired validator="email" value={email} />
        <Button onClick={onSubmitValid} onValidationFail={onSubmitInvalid} form="test">test</Button>
      </div>
    ));

    fireEvent.click(getByText('test'));
    expect(onSubmitValid).toBeCalledTimes(1);
    expect(onSubmitInvalid).toBeCalledTimes(0);
  });
  test('is Button work right with form attributes submit Form with invalid value?', () => {
    const onSubmitValid = jest.fn();
    const onSubmitInvalid = jest.fn();
    const email = '-----';
    const { getByText } = render((
      <div>
        <Input form="test" name="email" invalidMessage="error" isRequired validator="email" value={email} />
        <Button onClick={onSubmitValid} onValidationFail={onSubmitInvalid} form="test">test</Button>
      </div>
    ));

    fireEvent.click(getByText('test'));
    expect(onSubmitValid).toBeCalledTimes(0);
    expect(onSubmitInvalid).toBeCalledTimes(1);
  });
});
