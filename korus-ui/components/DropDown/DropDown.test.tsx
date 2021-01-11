import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';

import { DropDown } from './index';
// eslint-disable-next-line import/no-useless-path-segments
import * as L from '../../../korus-ui';

describe('DropDown SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = render((
      <DropDown />
    ));

    expect(wrapper.container).toMatchSnapshot();
  });
});

describe('DropDown ATTRIBUTES', () => {
  describe('className prop', () => {
    it('should have className given by prop', () => {
      render((
        <DropDown _box>test</DropDown>
      ));

      expect(screen.queryByText('test')).toHaveClass('box');
    });

    it('should change classes through props', () => {
      render((
        <DropDown _active>test</DropDown>
      ));

      expect(screen.queryByText('test')).not.toHaveClass('box');

      expect(screen.queryByText('test')).toHaveClass('active');
    });

    it('className should not change prop-classes', () => {
      render((
        <DropDown _active className="test">test</DropDown>
      ));

      expect(screen.queryByText('test')).not.toHaveClass('box');

      expect(screen.queryByText('test')).toHaveClass('active');

      expect(screen.queryByText('test')).toHaveClass('test');
    });
  });

  it('should be wrapped in wrapper', () => {
    const wrapper = render((
      <DropDown />
    ));

    wrapper.rerender((
      <DropDown
        wrapperRender={() => (
          <span />
        )}
      />
    ));

    expect(document.querySelector('span')).toBeInTheDocument();

    wrapper.rerender((
      <DropDown
        wrapperRender={() => (
          <div />
        )}
      />
    ));

    expect(document.querySelector('div')).toBeInTheDocument();

    wrapper.rerender((
      <DropDown
        wrapperRender={() => (
          <p />
        )}
      />
    ));

    expect(document.querySelector('p')).toBeInTheDocument();
  });

  it('should have children prop', () => {
    render((
      <DropDown>
        <div className="level-1"><span className="level-2">test</span></div>
      </DropDown>
    )).debug();

    expect(screen.getByText('test').textContent).toEqual('test');

    expect(screen.getByText('test').tagName).toEqual('SPAN');

    expect(screen.getByText('test').className).toEqual('level-2');

    expect(screen.getByText('test').parentElement?.tagName).toEqual('DIV');

    expect(screen.getByText('test').parentElement?.className).toEqual('level-1');
  });

  describe('InteractionMode = "click"', () => {
    it('should be opened by click on and closed by click outside', () => {
      render((
        <DropDown interactionMode="click" wrapperRender={({ elementProps }: any) => <L.Button {...elementProps} />}>
          <L.Span>test</L.Span>
        </DropDown>
      ));

      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveClass('opened');

      fireEvent.click(document);
      expect(screen.getByRole('button')).not.toHaveClass('opened');
    });
  });
});
