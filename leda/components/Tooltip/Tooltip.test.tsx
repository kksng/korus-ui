import React from 'react';
import { render } from '@testing-library/react';
import { I } from '../I';
import { Tooltip } from './index';

jest.mock('./constants', () => ({
  ...jest.requireActual('./constants'),
  defaultArrowSize: 0,
}));

describe('Tooltip SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = render((
      <Tooltip title="test">test</Tooltip>
    ));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render isOpened state', () => {
    const wrapper = render((
      <Tooltip title="test" isOpen>test</Tooltip>
    ));

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Tooltip ATTRIBUTES', () => {
  it('should accept jsx in title', () => {
    render((
      <Tooltip title={<span style={{ color: 'blue' }}>test</span>} />
    ));

    expect(document.querySelectorAll('span')).toHaveLength(1);
  });

  describe('position prop when open', () => {
    it('should be top by default', () => {
      render((
        <Tooltip isOpen title="test">Test</Tooltip>
      ));

      expect(document.querySelector('.tooltip')).toHaveClass('top');
    });

    it('should be top', () => {
      render((
        <Tooltip isOpen title="test" position="top">test</Tooltip>
      ));

      expect(document.querySelector('.tooltip')).toHaveClass('top');
    });

    it('should be left', () => {
      render((
        <Tooltip isOpen title="test" position="left">test</Tooltip>
      ));

      expect(document.querySelector('.tooltip')).toHaveClass('left');
    });

    it('should be right', () => {
      render((
        <Tooltip isOpen title="test" position="right">test</Tooltip>
      ));

      expect(document.querySelector('.tooltip')).toHaveClass('right');
    });

    it('should be bottom', () => {
      render((
        <Tooltip isOpen title="test" position="bottom">test</Tooltip>
      ));

      expect(document.querySelector('.tooltip')).toHaveClass('bottom');
    });
  });

  it('should have children prop', () => {
    render((
      <Tooltip title="test">
        <div className="level-0" style={{ float: 'right' }}>
          <span className="level-1">test</span>
        </div>
      </Tooltip>
    ));

    expect(document.querySelector('div.level-0')).toBeInTheDocument();

    expect(document.querySelector('div.level-0')).toHaveStyle('float: right');

    expect(document.querySelector('span.level-1')).toBeInTheDocument();

    expect(document.querySelector('span.level-1')).toHaveTextContent('test');
  });

  it('should wrap element', () => {
    render((
      <Tooltip title="test" position="top">
        <I _i-search />
      </Tooltip>
    ));

    expect(document.querySelectorAll('i')).toHaveLength(1);
  });

  it('should wrap elements', () => {
    render((
      <Tooltip title="test" position="top">
        <I _i-search />
        <I _i-search />
      </Tooltip>
    ));

    expect(document.querySelectorAll('i')).toHaveLength(2);
  });
});
