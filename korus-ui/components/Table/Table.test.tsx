// @ts-nocheck
import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import {
  Col, ColGroup, Table, THead, Tr, Td, Th, TBody,
} from './index';

describe('Table SNAPSHOTS', () => {
  it('should render', () => {
    const table = (
      <Table>
        <ColGroup align="center" width="50">
          <Col width="70" />
          <Col width="30" />
        </ColGroup>
        <THead>
          <Tr>
            <Th>Browser</Th>
            <Th>Support</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Google Chrome</Td>
            <Td>+</Td>
          </Tr>
          <Tr>
            <Td>FireFox</Td>
            <Td> +</Td>
          </Tr>
          <Tr>
            <Td> Opera</Td>
            <Td>-</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    expect(wrapper.find('Tr')).toHaveLength(4);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Table HANDLERS', () => {
  it('should trigger TR onClick', () => {
    const onClick = jest.fn();
    const table = (
      <Table>
        <ColGroup align="center" width="50">
          <Col width="70" />
          <Col width="30" />
        </ColGroup>
        <THead>
          <Tr onClick={onClick}>
            <Th>Browser</Th>
            <Th>Support</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Google Chrome</Td>
            <Td>+</Td>
          </Tr>
          <Tr>
            <Td>FireFox</Td>
            <Td> +</Td>
          </Tr>
          <Tr onClick={onClick}>
            <Td> Opera</Td>
            <Td>-</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    wrapper.find('tr').first().props().onClick();

    expect(onClick).toHaveBeenCalled();

    wrapper.find('tr').last().props().onClick();

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('should trigger TD onClick', () => {
    const onClick = jest.fn();
    const table = (
      <Table>
        <ColGroup align="center" width="50">
          <Col width="70" />
          <Col width="30" />
        </ColGroup>
        <THead>
          <Tr>
            <Th>Browser</Th>
            <Th>Support</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td onClick={onClick}>Google Chrome</Td>
            <Td>+</Td>
          </Tr>
          <Tr>
            <Td>FireFox</Td>
            <Td> +</Td>
          </Tr>
          <Tr>
            <Td> Opera</Td>
            <Td onClick={onClick}>-</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    wrapper.find('td').first().props().onClick();

    expect(onClick).toHaveBeenCalled();

    wrapper.find('td').last().props().onClick();

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('should trigger TH onClick', () => {
    const onClick = jest.fn();
    const table = (
      <Table>
        <ColGroup align="center" width="50">
          <Col width="70" />
          <Col width="30" />
        </ColGroup>
        <THead>
          <Tr>
            <Th onClick={onClick}>Browser</Th>
            <Th>Support</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Google Chrome</Td>
            <Td>+</Td>
          </Tr>
          <Tr>
            <Td>FireFox</Td>
            <Td> +</Td>
          </Tr>
          <Tr>
            <Td> Opera</Td>
            <Td>-</Td>
          </Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    wrapper.find('th').first().props().onClick();

    expect(onClick).toHaveBeenCalled();
  });
});

describe('Table ATTRIBUTES', () => {
  describe('Table className', () => {
    const table = (
      <Table _box>
        <TBody>
          <Tr><Td>text</Td></Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    it('should have className', () => {
      expect(wrapper.find('table').hasClass('box')).toBeTruthy();
    });

    it('should change classes through props', () => {
      wrapper.setProps({ _active: true, _box: false });

      expect(wrapper.find('table').hasClass('box')).toBeFalsy();

      expect(wrapper.find('table').hasClass('active')).toBeTruthy();
    });

    it('should not allow className to change prop-classes', () => {
      wrapper.setProps({ className: 'testClass' });

      expect(wrapper.find('table').hasClass('box')).toBeFalsy();

      expect(wrapper.find('table').hasClass('active')).toBeTruthy();

      expect(wrapper.find('table').hasClass('testClass')).toBeTruthy();
    });
  });

  describe('Tr className', () => {
    const table = (
      <Table>
        <TBody>
          <Tr _box><Td>text</Td></Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    it('should have className', () => {
      expect(wrapper.find('tr').hasClass('box')).toBeTruthy();
    });

    it('should change classes through props', () => {
      wrapper.find('tr').instance().classList.remove('box');

      wrapper.find('tr').instance().classList.add('active');

      expect(wrapper.find('tr').instance().classList).not.toContain('box');

      expect(wrapper.find('tr').instance().classList).toContain('active');
    });

    it('should not allow className to change prop-classes', () => {
      wrapper.find('tr').instance().classList.add('testClass');

      expect(wrapper.find('tr').instance().classList).not.toContain('box');

      expect(wrapper.find('tr').instance().classList).toContain('active');

      expect(wrapper.find('tr').instance().classList).toContain('testClass');
    });
  });

  describe('Th className', () => {
    const table = (
      <Table>
        <TBody>
          <Tr><Th _box>test</Th></Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    it('should have className', () => {
      expect(wrapper.find('th').hasClass('box')).toBeTruthy();
    });

    it('should change classes through props', () => {
      wrapper.find('th').instance().classList.remove('box');

      wrapper.find('th').instance().classList.add('active');

      expect(wrapper.find('th').instance().classList).not.toContain('box');

      expect(wrapper.find('th').instance().classList).toContain('active');
    });

    it('should not allow className to change prop-classes', () => {
      wrapper.find('th').instance().classList.add('testClass');

      expect(wrapper.find('th').instance().classList).not.toContain('box');

      expect(wrapper.find('th').instance().classList).toContain('active');

      expect(wrapper.find('th').instance().classList).toContain('testClass');
    });
  });

  describe('Td className', () => {
    const table = (
      <Table>
        <TBody>
          <Tr><Td _box>test</Td></Tr>
        </TBody>
      </Table>
    );
    const wrapper = mount(table);

    it('should have className', () => {
      expect(wrapper.find('td').hasClass('box')).toBeTruthy();
    });

    it('should change classes through props', () => {
      wrapper.find('td').instance().classList.remove('box');

      wrapper.find('td').instance().classList.add('active');

      expect(wrapper.find('td').instance().classList).not.toContain('box');

      expect(wrapper.find('td').instance().classList).toContain('active');
    });

    it('should not allow className to change prop-classes', () => {
      wrapper.find('td').instance().classList.add('testClass');

      expect(wrapper.find('td').instance().classList).not.toContain('box');

      expect(wrapper.find('td').instance().classList).toContain('active');

      expect(wrapper.find('td').instance().classList).toContain('testClass');
    });
  });
});
