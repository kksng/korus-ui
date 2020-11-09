import React from 'react';
import { render } from '@testing-library/react';
import { StickyPanel } from './index';
import { Button } from '../Button';
import { H1 } from '../Headers';

describe('StickyPanel SNAPSHOTS', () => {
  beforeEach(() => {
    (window as any).MutationObserver = function () {
      this.observe = jest.fn();
      this.disconnect = jest.fn();
    };
  });

  test('render', () => {
    const wrapper = render((
      <StickyPanel>
        <Button _success>OK</Button>
        <Button>Cancel</Button>
      </StickyPanel>
    ));
    expect(document.querySelector('div.stickypanel-wrapper')).not.toBeNull();
    expect(document.querySelector('div.stickypanel-container')).not.toBeNull();
    expect(wrapper.container).toMatchSnapshot();
  });
});

describe('StickyPanel ATTRIBUTES', () => {
  test('children', () => {
    const wrapper = render((
      <StickyPanel>
        <H1>Would you like to continue?</H1>
        <Button _success>OK</Button>
        <Button>Cancel</Button>
      </StickyPanel>
    ));
    expect(wrapper.container).toHaveTextContent('Would you like to continue?');
    expect(wrapper.container).toHaveTextContent('OK');
    expect(wrapper.container).toHaveTextContent('Cancel');
  });
});
