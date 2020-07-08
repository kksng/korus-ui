// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import { DropZone } from './index';
import { Li } from '../Li';

let files;
let firstFile;
let secondFile;
let container;

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

  window.URL.createObjectURL = jest.fn();

  container = document.createElement('div');

  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);

  container = null;
});

describe('DropZone SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<DropZone onDrop={jest.fn()} onRemove={jest.fn()} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('DropZone HANDLERS', () => {

});

describe('DropZone ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<DropZone _box onDrop={jest.fn()} onRemove={jest.fn()} />);

    expect(wrapper.find('Div').first().hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('Div').first().hasClass('box')).toBeFalsy();

    expect(wrapper.find('Div').first().hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('Div').first().hasClass('box')).toBeFalsy();

    expect(wrapper.find('Div').first().hasClass('active')).toBeTruthy();

    expect(wrapper.find('Div').first().hasClass('testClass')).toBeTruthy();
  });

  it('should render files in custom HTMLElement', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(<DropZone dropZoneFilesNode={div} onDrop={jest.fn()} onRemove={jest.fn()} />);

    wrapper.setProps({ value: { acceptedFiles: files, rejectedFiles: [] } });

    expect(div.innerHTML.includes('file1.pdf')).toBeTruthy();
    expect(div.innerHTML.includes('cats.gif')).toBeTruthy();
  });

  it('should render descriptionText', () => {
    const wrapper = mount(<DropZone infoRender={() => <div className="dropzone-description">LETS DESCRIBE! Размер: до 100 Мб.</div>} onDrop={jest.fn()} onRemove={jest.fn()} />);

    expect(wrapper.find('div.dropzone-description').text()).toEqual('LETS DESCRIBE! Размер: до 100 Мб.');
  });

  it('should render width', () => {
    const wrapper = mount(<DropZone _width-20 onDrop={jest.fn()} onRemove={jest.fn()} />);

    expect(wrapper.find('div').first().getDOMNode().classList).toContain('width-20');
  });

  it('should customize upload button', () => {
    const wrapper = mount(
      <DropZone
        onDrop={jest.fn()}
        onRemove={jest.fn()}
        uploadButtonRender={() => <span className="test-class">Drop me</span>}
      />,
    );

    expect(wrapper.find('.test-class').text()).toEqual('Drop me');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should customize description text', () => {
    const wrapper = mount(
      <DropZone
        onDrop={jest.fn()}
        onRemove={jest.fn()}
        infoRender={() => <span className="dropzone-description">Drop here</span>}
      />,
    );

    expect(wrapper.find('span.dropzone-description').text()).toEqual('Drop here');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
