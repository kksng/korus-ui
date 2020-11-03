// @ts-nocheck
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

import { Span } from '~/components/Span';
import { FileUpload } from './index';

let files;
let firstFile;
let secondFile;

beforeEach(() => {
  files = [
    {
      name: 'file1.pdf',
      size: 19000000,
      type: 'application/pdf',
    },
    {
      name: 'cats.gif',
      size: 21000000,
      type: 'image/gif',
    },
  ];
  [firstFile, secondFile] = files;
});

describe('FileUpload SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<FileUpload onFileLoad={jest.fn()} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('should render different component states', () => {
    it('should render isLoading', () => {
      const wrapper = mount(<FileUpload isLoading infoRender={({ componentProps: { isLoading }, Element }) => (isLoading ? 'WAIT FOR ETERNITY' : <Element />)} onFileLoad={jest.fn()} />);

      expect(wrapper.text()).toEqual('WAIT FOR ETERNITY');

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

describe('FileUpload HANDLERS', () => {
  it('should call onClick handler', () => {
    const onClick = jest.fn();
    const wrapper = mount(<FileUpload onFileLoad={jest.fn()} onClick={onClick} />);

    act(() => {
      wrapper.find('a').props().onClick({ currentTarget: { value: 'blah-blah-blah' }, preventDefault: () => {} });
    });

    expect(onClick).toHaveBeenCalled();
  });

  it('should have correct event format', () => {
    const onClick = jest.fn();
    const wrapper = mount(<FileUpload onFileLoad={jest.fn()} onClick={onClick} />);

    act(() => {
      wrapper.find('a').props().onClick({ currentTarget: { value: 'blah-blah-blah' }, preventDefault: () => {} });
    });

    expect(onClick).toHaveBeenCalled();

    const [[event]] = onClick.mock.calls;

    expect(event.currentTarget).toEqual({ value: 'blah-blah-blah' });

    expect(event.defaultPrevented).toBeFalsy();
  });
});

describe('FileUpload ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<FileUpload _box onFileLoad={jest.fn()} />);

    expect(wrapper.find('Wrapper').first().hasClass('box')).toBeTruthy();

    wrapper.setProps({ _active: true, _box: false });


    expect(wrapper.find('Wrapper').first().hasClass('box')).toBeFalsy();

    expect(wrapper.find('Wrapper').first().hasClass('active')).toBeTruthy();
  });

  it('should render FileUpload in custom wrapper', () => {
    const wrapper = mount(<FileUpload _active onFileLoad={jest.fn()} wrapperRender={({ elementProps }) => <Span {...elementProps} />} />);

    expect(wrapper.find('span')).toHaveLength(2);

    expect(wrapper.find('span').first().hasClass('active')).toBeTruthy();
  });

  it('should render descriptionText', () => {
    const wrapper = mount(<FileUpload infoRender={() => 'LETS DESCRIBE!'} onFileLoad={jest.fn()} />);

    expect(wrapper.find('a').text()).toEqual('LETS DESCRIBE!');
  });
});
