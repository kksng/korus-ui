import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as L from '../../../../korus-ui';
import { Urls } from '../../../constants';

export const En = (): React.ReactElement => (
  <L.Div _article>
    <L.H1 _header>
      Reactive Leda
    </L.H1>
    <L.P>
      Reactive Leda is a library of components for creating interactive interfaces and markup in React applications.
    </L.P>
    <L.Section _block>
      <L.H2 _blockHeader>
        Features
      </L.H2>
      <L.Ul _txtList>
        <li>
          Fully
          {' '}
          <NavLink to={Urls.Customization}>customizable</NavLink>
          {' '}
          components, supports 3 types of customization
        </li>
        <li>
          Concise and functional
          {' '}
          <NavLink to={Urls.FormsDifferences}>forms</NavLink>
          {' '}
          with built in
          {' '}
          <NavLink to={Urls.ValidationDifferences}>validation</NavLink>
          {' '}
          (much less code than in popular solutions, with more flexibility and functionality)
        </li>
        <li>
          Enhanced
          {' '}
          <NavLink to={Urls.Markup}>markup</NavLink>
          {' '}
          (less code, easier css classes)
        </li>
        <li>
          Unified
          {' '}
          <NavLink to={Urls.Api}>API</NavLink>
          {' '}
          (worked with one component, you know how to work with the others)
        </li>
        <li>
          More than 50 components for forms and layouts
        </li>
      </L.Ul>
    </L.Section>
    <L.Section _block>
      <L.H2 _blockHeader>
        Setup
      </L.H2>
      <L.Div _block>
        <pre>
          {`
  npm i korus-ui
          `}
        </pre>
      </L.Div>
    </L.Section>
    <L.Section _block>
      <L.H2 _blockHeader>
        Import
      </L.H2>
      <L.Div _block>
        <pre>
          {`
  import * as L from 'korus-ui';
          `}
        </pre>
      </L.Div>
      <L.P>
        Use namespace <b>L</b> to distinguish library components from other components in your
        application.
      </L.P>
    </L.Section>
    <L.Section _block>
      <L.H2 _blockHeader>
        Usage
      </L.H2>
      <L.P>
        Example of a complete form with validation:
      </L.P>
      <L.Div _block>
        <pre>
          {`
  <L.Div _wrapper >
    <L.Input
      onChange={ev => //...}
      validator="email"
      isRequired
      form="myForm"
      name="myInput"
    />
    <L.Button
      form="myForm"
      onClick={submitForm}
    >
      Click me
    </L.Button>
  </L.Div>
          `}
        </pre>
      </L.Div>
      <br />
      <L.P>
        Yeah, that&apos;s all it takes
      </L.P>
    </L.Section>
  </L.Div>
);

En.displayName = 'En';
