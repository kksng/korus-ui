// @ts-nocheck
import React from 'react';
import { mount } from 'enzyme';
import { Modal, ModalBody, ModalHeader } from './index';
import { WINDOW_SIZES } from './constants';

describe('Modal SNAPSHOTS', () => {
  let wrapper;
  afterEach(() => { wrapper.unmount(); });

  it('should render', () => {
    wrapper = mount(<Modal isOpen />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('different component states', () => {
    it('should be closed', () => {
      wrapper = mount(<Modal isOpen={false} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should have header', () => {
      const modal = (
        <Modal isOpen>
          <ModalHeader>
            <h1>Bread all over the Head</h1>
          </ModalHeader>
          <ModalBody>
            <span>Yo, buddy</span>
          </ModalBody>
        </Modal>
      );
      wrapper = mount(modal);

      expect(wrapper.find('div.modal-header')).toHaveLength(1);

      expect(wrapper.find('h1').text()).toEqual('Bread all over the Head');

      expect(wrapper).toMatchSnapshot();
    });

    it('should render closing icon in wrapper', () => {
      const modal = (
        <Modal isOpen onCloseButtonClick={jest.fn()}>
          <ModalHeader>
            <h1>Bread all over the Head</h1>
          </ModalHeader>
          <ModalBody>
            <span>Yo, buddy</span>
          </ModalBody>
        </Modal>
      );
      wrapper = mount(modal);

      expect(wrapper.find('A')).toHaveLength(1);

      // проверим, что иконка действительно в ModalWindow
      expect(wrapper.find('.modal-window a.modal-cross')).toHaveLength(1);

      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('Modal HANDLERS', () => {
  it('should trigger onCloseIconClick', () => {
    const onClickHandler = jest.fn();
    const modal = (
      <Modal isOpen onCloseButtonClick={onClickHandler}>
        <ModalBody>
          <span>Yo, buddy</span>
        </ModalBody>
      </Modal>
    );
    const wrapper = mount(modal);

    wrapper.find('a.modal-cross').props().onClick({ preventDefault: () => true });

    expect(onClickHandler).toHaveBeenCalled();

    wrapper.unmount();
  });

  it('should delete overflow:hidden style when unmount', () => {
    const modal = (
      <Modal isOpen={false}>
        <ModalBody>
          <span>Yo, buddy</span>
        </ModalBody>
      </Modal>
    );

    const wrapper = mount(modal);

    wrapper.setProps({ isOpen: true });

    wrapper.update();

    expect(document.body.style.overflow).toBe('hidden');

    wrapper.unmount();

    expect(document.body.style.overflow).toBe('');
  });
});

describe('Modal ATTRIBUTES', () => {
  it('should have className, change classes through props and className should not change prop-classes', () => {
    const wrapper = mount(<Modal _box isOpen><div className="test">default</div></Modal>);

    expect(wrapper.find('div.modal-wrapper').hasClass('box')).toBeTruthy();


    wrapper.setProps({ _active: true, _box: false });

    expect(wrapper.find('div.modal-wrapper').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div.modal-wrapper').hasClass('active')).toBeTruthy();


    wrapper.setProps({ className: 'testClass' });

    expect(wrapper.find('div.modal-wrapper').hasClass('box')).toBeFalsy();

    expect(wrapper.find('div.modal-wrapper').hasClass('active')).toBeTruthy();

    expect(wrapper.find('div.modal-wrapper').hasClass('testClass')).toBeTruthy();
  });

  it('should have children prop', () => {
    const modal = (
      <Modal isOpen>
        <ModalHeader>
          <h1>Bread all over the Head</h1>
        </ModalHeader>
        <ModalBody>
          <div className="lvl1">
            <span className="lvl2">TEXT</span>
          </div>
        </ModalBody>
      </Modal>
    );
    const wrapper = mount(modal);

    const modalBody = wrapper.find('ModalBody');

    expect(modalBody.contains(<div className="lvl1"><span className="lvl2">TEXT</span></div>)).toBeTruthy();
  });

  it('should be opened if isOpen and vice versa', () => {
    const modal = (
      <Modal isOpen>
        <ModalHeader>
          <h1>Bread all over the Head</h1>
        </ModalHeader>
        <ModalBody>
          Body
        </ModalBody>
      </Modal>
    );
    const wrapper = mount(modal);

    const modalBody = wrapper.find('ModalBody');

    expect(modalBody.contains('Body')).toBeTruthy();

    wrapper.setProps({ isOpen: false });

    expect(wrapper.find('ModalBody')).toHaveLength(0);
  });

  describe('size', () => {
    it('should accept sm', () => {
      const modal = (
        <Modal isOpen size="sm">
          <ModalHeader>
            <h1>Bread all over the Head</h1>
          </ModalHeader>
          <ModalBody>
            Body
          </ModalBody>
        </Modal>
      );
      const wrapper = mount(modal);

      expect(wrapper.find('div.modal-window').props().style.width).toEqual(WINDOW_SIZES.sm);
    });

    it('should accept md', () => {
      const modal = (
        <Modal isOpen size="md">
          <ModalHeader>
            <h1>Bread all over the Head</h1>
          </ModalHeader>
          <ModalBody>
            Body
          </ModalBody>
        </Modal>
      );
      const wrapper = mount(modal);

      expect(wrapper.find('div.modal-window').props().style.width).toEqual(WINDOW_SIZES.md);
    });

    it('should accept lg', () => {
      const modal = (
        <Modal isOpen size="lg">
          <ModalHeader>
            <h1>Bread all over the Head</h1>
          </ModalHeader>
          <ModalBody>
            Body
          </ModalBody>
        </Modal>
      );
      const wrapper = mount(modal);

      expect(wrapper.find('div.modal-window').props().style.width).toEqual(WINDOW_SIZES.lg);
    });
  });
});
