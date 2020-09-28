/* eslint-disable jsx-a11y/label-has-for */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as L from '../leda';
import {
  AutoComplete,
  Button,
  ButtonGroup,
  CheckBox,
  DatePicker,
  DateRange,
  DropDownSelect,
  DropZone,
  Input,
  MaskedInput,
  Modal,
  VStepper,
  Wizard,
} from './cypress';
import { Styles } from './components/Styles';

export const CypressLayout = () => (
  <>
    <L.Div _wrapper>
      <Switch>
        <Route path="/cypress/autocomplete">
          <AutoComplete />
        </Route>
        <Route path="/cypress/button">
          <Button />
        </Route>
        <Route path="/cypress/button-group">
          <ButtonGroup />
        </Route>
        <Route path="/cypress/checkbox">
          <CheckBox />
        </Route>
        <Route path="/cypress/input">
          <Input />
        </Route>
        <Route path="/cypress/modal">
          <Modal />
        </Route>
        <Route path="/cypress/datepicker">
          <DatePicker />
        </Route>
        <Route path="/cypress/daterange">
          <DateRange />
        </Route>
        <Route path="/cypress/masked-input">
          <MaskedInput />
        </Route>
        <Route path="/cypress/dropdownselect">
          <DropDownSelect />
        </Route>
        <Route path="/cypress/vstepper">
          <VStepper />
        </Route>
        <Route path="/cypress/dropzone">
          <DropZone />
        </Route>
        <Route path="/cypress/wizard">
          <Wizard />
        </Route>
      </Switch>
    </L.Div>
  </>
);
