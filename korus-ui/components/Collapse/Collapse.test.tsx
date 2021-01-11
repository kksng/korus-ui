/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { render } from '@testing-library/react';
import { Collapse } from './index';
import { Div } from '../Div';
import { H1 } from '../Headers';

// todo mock css transitions

jest.useFakeTimers();

const MockComponent = () => {
  const [panels, setPanels] = React.useState<string | string[] | null>(['1', '2']);

  return (
    <Collapse
      onSelect={(event) => setPanels(event.component.value)}
      activePanelKey={panels}
    >
      <Collapse.Panel panelKey="1">
        <Collapse.Heading>
          <H1>HEADING 1</H1>
        </Collapse.Heading>
        <Collapse.Body>
          <Div className="test-1">SOME FIRST TEST</Div>
        </Collapse.Body>
      </Collapse.Panel>
      <Collapse.Panel panelKey="2">
        <Collapse.Heading>
          <H1>HEADING 2</H1>
        </Collapse.Heading>
        <Collapse.Body>
          <Div className="test-2">SOME SECOND TEST</Div>
        </Collapse.Body>
      </Collapse.Panel>
    </Collapse>
  );
};

describe('Collapse SNAPSHOTS', () => {
  it('should render closed state', () => {
    const component = (
      <Collapse onSelect={jest.fn()} activePanelKey="0">
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div id="test">SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = render(component);

    const body = document.getElementById('test')?.parentElement;

    expect(body?.getAttribute('aria-expanded')).toEqual('false');

    expect(wrapper.container).toMatchSnapshot();
  });

  it('should render opened state', () => {
    const component = (
      <Collapse onSelect={jest.fn()} activePanelKey="1">
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div>SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = render(component);

    expect(wrapper.queryByText('SOME TEST')).toBeInTheDocument();

    expect(wrapper.container).toMatchSnapshot();
  });

  describe('multi-opened state in controlled mode', () => {
    it('should render both bodies opened', () => {
      const wrapper = render(<MockComponent />);

      const one = wrapper.getByText('SOME FIRST TEST');

      expect(one.parentElement?.getAttribute('aria-expanded')).toEqual('true');

      const two = wrapper.getByText('SOME SECOND TEST');

      expect(two.parentElement?.getAttribute('aria-expanded')).toEqual('true');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render only first body opened', () => {
      const wrapper = render(<MockComponent />);

      wrapper.getByText('HEADING 2').click();

      const one = wrapper.getByText('SOME FIRST TEST');

      expect(one.parentElement?.getAttribute('aria-expanded')).toEqual('true');

      const two = wrapper.getByText('SOME SECOND TEST');

      expect(two.parentElement?.getAttribute('aria-expanded')).toEqual('false');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.unmount();
    });
  });

  describe('accordion state in uncontrolled mode', () => {
    const component = (
      <Collapse isAccordion>
        <Collapse.Panel panelKey="1">
          <Collapse.Heading className="head-1">
            <H1>HEADING 1</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="test-1">SOME FIRST TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
        <Collapse.Panel panelKey="2">
          <Collapse.Heading className="head-2">
            <H1>HEADING 2</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div className="test-2">SOME SECOND TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    it('should render both bodies closed', () => {
      const wrapper = render(component);

      const one = wrapper.getByText('SOME FIRST TEST');

      expect(one.parentElement?.getAttribute('aria-expanded')).toEqual('false');

      const two = wrapper.getByText('SOME SECOND TEST');

      expect(two.parentElement?.getAttribute('aria-expanded')).toEqual('false');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.unmount();
    });

    it('should render only first body opened', () => {
      const wrapper = render(component);

      wrapper.getByText('HEADING 1').click();

      const one = wrapper.getByText('SOME FIRST TEST');

      expect(one.parentElement?.getAttribute('aria-expanded')).toEqual('true');

      const two = wrapper.getByText('SOME SECOND TEST');

      expect(two.parentElement?.getAttribute('aria-expanded')).toEqual('false');

      expect(wrapper.container).toMatchSnapshot();

      wrapper.unmount();
    });
  });

  it('should render loading state', () => {
    const component = (
      <Collapse onSelect={jest.fn()} activePanelKey="1">
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body isLoading>
            <Div>SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = render(component);

    expect(document.querySelector('.loader-wrapper')).toBeInTheDocument();

    expect(wrapper.container).toMatchSnapshot();
  });
});

describe('Collapse HANDLERS', () => {
  it('should call onSelect handler when click on Collapse.Heading', () => {
    const onSelectHandler = jest.fn();

    const component = (
      <Collapse onSelect={onSelectHandler}>
        <Collapse.Panel panelKey="1">
          <Collapse.Heading>
            <H1>HEADING</H1>
          </Collapse.Heading>
          <Collapse.Body>
            <Div>SOME TEST</Div>
          </Collapse.Body>
        </Collapse.Panel>
      </Collapse>
    );

    const wrapper = render(component);

    wrapper.getByText('HEADING').click();

    expect(onSelectHandler).toHaveBeenCalled();
  });
});

describe('Collapse ATTRIBUTES', () => {
  it('should be opened if activePanelKey equals panelKey', () => {
    const MyTestingComponent = () => {
      const [panels, setPanels] = React.useState<string | string[] | null>([]);

      return (
        <Collapse isAccordion onSelect={(event) => setPanels(event.component.value)} activePanelKey={panels}>
          <Collapse.Panel panelKey="1">
            <Collapse.Heading>
              <H1>HEADING 1</H1>
            </Collapse.Heading>
            <Collapse.Body>
              <Div className="first">SOME FIRST TEST</Div>
            </Collapse.Body>
          </Collapse.Panel>
          <Collapse.Panel panelKey="2">
            <Collapse.Heading>
              <H1>HEADING 2</H1>
            </Collapse.Heading>
            <Collapse.Body>
              <Div className="second">SOME SECOND TEST</Div>
            </Collapse.Body>
          </Collapse.Panel>
        </Collapse>
      );
    };

    const wrapper = render(<MyTestingComponent />);

    const one = wrapper.getByText('SOME FIRST TEST');

    const two = wrapper.getByText('SOME SECOND TEST');

    // Collapse should be closed when mounted
    expect(one.parentElement?.getAttribute('aria-expanded')).toEqual('false');

    expect(two.parentElement?.getAttribute('aria-expanded')).toEqual('false');

    // Collapse should open first panel if heading was clicked
    wrapper.getByText('HEADING 1').click();

    expect(one.parentElement?.getAttribute('aria-expanded')).toEqual('true');

    // Collapse should close previous panel and open different if its heading was clicked
    wrapper.getByText('HEADING 2').click();

    expect(one.parentElement?.getAttribute('aria-expanded')).toEqual('false');

    expect(two.parentElement?.getAttribute('aria-expanded')).toEqual('true');
  });

  describe('wrapper', () => {
    describe('usage Div as a wrapper', () => {
      it('should wrap Collapse.Heading', () => {
        const component = (
          <Collapse>
            <Collapse.Panel panelKey="1">
              <Collapse.Heading wrapperRender={() => <Div className="test" _box _active><span>SHOOT MYSELF IN THE LEG!</span></Div>}>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(wrapper.queryByText('SHOOT MYSELF IN THE LEG!')).toBeInTheDocument();
      });

      it('should wrap Collapse.Body', () => {
        const component = (
          <Collapse onSelect={jest.fn()} activePanelKey="1">
            <Collapse.Panel panelKey="1">
              <Collapse.Heading>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body wrapperRender={() => <Div className="test" _box _active><span>SHOOT MYSELF IN THE LEG!</span></Div>}>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(wrapper.queryByText('SHOOT MYSELF IN THE LEG!')).toBeInTheDocument();

        expect(wrapper.queryByText('SOME FIRST TEST')).not.toBeInTheDocument();
      });

      it('should wrap Collapse.Panel', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1" wrapperRender={() => <Div _box _active><span>SHOOT MYSELF IN THE LEG!</span></Div>}>
              <Div>TEST</Div>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(wrapper.queryByText('SHOOT MYSELF IN THE LEG!')).toBeInTheDocument();

        expect(wrapper.queryByText('TEST')).not.toBeInTheDocument();
      });
    });

    describe('usage span as a wrapper', () => {
      it('should wrap Collapse.Heading', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1">
              <Collapse.Heading wrapperRender={() => <span className="box active"><p>SHOOT MYSELF IN THE LEG!</p></span>}>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(wrapper.queryByText('SHOOT MYSELF IN THE LEG!')).toBeInTheDocument();

        expect(wrapper.queryByText('SOME FIRST TEST')).toBeInTheDocument();

        expect(wrapper.queryByText('HEADING 1')).not.toBeInTheDocument();
      });

      it('should wrap Collapse.Body', () => {
        const component = (
          <Collapse onSelect={jest.fn()} activePanelKey="1">
            <Collapse.Panel panelKey="1">
              <Collapse.Heading>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body wrapperRender={() => <span className="box active"><p>SHOOT MYSELF IN THE LEG!</p></span>}>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(wrapper.queryByText('HEADING 1')).toBeInTheDocument();

        expect(wrapper.queryByText('SHOOT MYSELF IN THE LEG!')).toBeInTheDocument();

        expect(wrapper.queryByText('SOME FIRST TEST')).not.toBeInTheDocument();
      });

      it('should wrap Collapse.Panel', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1" wrapperRender={() => <span className="box active"><p>SHOOT MYSELF IN THE LEG!</p></span>}>
              <Div>TEST</Div>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(wrapper.queryByText('SHOOT MYSELF IN THE LEG!')).toBeInTheDocument();

        expect(wrapper.queryByText('TEST')).not.toBeInTheDocument();
      });
    });
    describe('usage span as a wrapper without children', () => {
      it('should wrap Collapse.Heading', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1">
              <Collapse.Heading wrapperRender={() => <span className="box active" />}>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(document.querySelector('.box.active')).toBeInTheDocument();

        expect(wrapper.queryByText('SOME FIRST TEST')).toBeInTheDocument();

        expect(wrapper.queryByText('HEADING 1')).not.toBeInTheDocument();
      });

      it('should wrap Collapse.Body', () => {
        const component = (
          <Collapse onSelect={jest.fn()} activePanelKey="1">
            <Collapse.Panel panelKey="1">
              <Collapse.Heading>
                <H1>HEADING 1</H1>
              </Collapse.Heading>
              <Collapse.Body wrapperRender={() => <span className="box active" />}>
                <Div className="first">SOME FIRST TEST</Div>
              </Collapse.Body>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(document.querySelector('.box.active')).toBeInTheDocument();

        expect(wrapper.queryByText('SOME FIRST TEST')).not.toBeInTheDocument();
      });

      it('should wrap Collapse.Panel', () => {
        const component = (
          <Collapse onSelect={jest.fn()}>
            <Collapse.Panel panelKey="1" wrapperRender={() => <span className="box active" />}>
              <Div>TEST</Div>
            </Collapse.Panel>
          </Collapse>
        );

        const wrapper = render(component);

        expect(document.querySelector('.box.active')).toBeInTheDocument();

        expect(wrapper.queryByText('TEST')).not.toBeInTheDocument();
      });
    });
  });
});
