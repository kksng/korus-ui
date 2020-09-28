import React from 'react';
import { mount } from 'enzyme';
import {
  render, fireEvent, act, wait,
} from '@testing-library/react';
import toJson from 'enzyme-to-json';
import { DropZone } from './index';
import { FileErrorCodes } from './types';

const files = [
  new File(['file 1'], 'file_1.txt', { type: 'plain/text' }),
  new File(['file 2'], 'file_2.pdf', { type: 'application/pdf' }),
];

const externalFile = { name: 'file_3.txt', link: 'http://example.com/file.txt' };

const rejectedFile = new File(['rejected file'], 'rejected_file.txt', { type: 'plain/text' });
Object.assign(rejectedFile, { errorCode: FileErrorCodes.FileIsTooBig });

const mockObjectURL = 'blob://mockObjectURL';

beforeAll(() => {
  window.URL.createObjectURL = jest.fn(() => mockObjectURL);
});

describe('DropZone SNAPSHOTS', () => {
  it('should render', () => {
    const wrapper = mount(<DropZone onDrop={jest.fn()} onRemove={jest.fn()} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render file list', () => {
    const { container } = render(
      <DropZone
        value={{
          acceptedFiles: [
            ...files,
            externalFile,
          ],
          rejectedFiles: [rejectedFile],
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

describe('DropZone HANDLERS', () => {
  it('should call onClick handler', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<DropZone onClick={handleClick} />);

    fireEvent.click(getByText('Выбрать...'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onChange handler on drop files into the dropZone', async () => {
    const handleChange = jest.fn();

    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        dropped: {
          acceptedFiles: [
            expect.objectContaining(files[0]),
            expect.objectContaining(files[1]),
          ],
          rejectedFiles: [],
        },
        value: {
          acceptedFiles: [
            expect.objectContaining(files[0]),
            expect.objectContaining(files[1]),
          ],
          rejectedFiles: [],
        },
      }),
    });

    const component = <DropZone onChange={handleChange} />;

    const { rerender, container, queryByText } = render(component);

    const dropZoneContent = container.querySelector('div.dropzone-content');

    expect(dropZoneContent).toBeInTheDocument();

    const data = {
      dataTransfer: {
        files,
        items: files.map((file) => ({
          kind: 'file',
          type: file.type,
          getAsFile: () => file,
        })),
        types: ['Files'],
      },
    };

    const event = new Event('drop', { bubbles: true });
    Object.assign(event, data);

    fireEvent(dropZoneContent as Element, event);

    await act(() => wait(() => rerender(component)));

    expect(queryByText('file_1.txt')).toBeInTheDocument();
    expect(queryByText('file_2.pdf')).toBeInTheDocument();

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenLastCalledWith(eventMatcher);
  });

  /*
   TODO fix the bug with incorrect "dropped" value in the change event triggered by removing file
   Now: "dropped" equals "value" before remove
   Expected: "dropped" empty
   */
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should call onChange handler on remove file', () => {
    const handleChange = jest.fn();

    const eventMatcher = expect.objectContaining({
      component: expect.objectContaining({
        dropped: {
          acceptedFiles: [],
          rejectedFiles: [],
        },
        value: {
          acceptedFiles: [],
          rejectedFiles: [],
        },
        removedFile: [externalFile],
      }),
    });

    const { container } = render(
      <DropZone
        onChange={handleChange}
        value={{
          acceptedFiles: [externalFile],
          rejectedFiles: [],
        }}
      />,
    );

    const removeFileIcon = container.querySelector('i.dropzone-delete-icon');

    expect(removeFileIcon).toBeInTheDocument();

    fireEvent.click(removeFileIcon as Element);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenLastCalledWith(eventMatcher);
  });
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

    expect(div.innerHTML.includes('file_1.txt')).toBeTruthy();
    expect(div.innerHTML.includes('file_2.pdf')).toBeTruthy();
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
