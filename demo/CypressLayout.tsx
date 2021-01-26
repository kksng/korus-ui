/* eslint-disable jsx-a11y/label-has-for */
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as L from '../korus-ui';
import {
  AutoComplete,
  Button,
  ButtonGroup,
  CheckBox,
  Currency,
  Collapse,
  DatePicker,
  DateRange,
  DropDown,
  DropDownLink,
  DropDownSelect,
  DropZone,
  FileDrop,
  FileUpload,
  Input,
  MaskedInput,
  Modal,
  MultiSelect,
  Notifications,
  NumericRange,
  NumericTextBox,
  Pagination,
  Password,
  ProgressBar,
  RadioGroup,
  Rating,
  Slider,
  StatusBar,
  StickyPanel,
  Tabs,
  Textarea,
  ToolTip,
  TimePicker,
  TimeRange,
  Tour,
  Validation,
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
        <Route path="/cypress/currency">
          <Currency />
        </Route>
        <Route path="/cypress/filedrop">
          <FileDrop />
        </Route>
        <Route path="/cypress/fileupload">
          <FileUpload />
        </Route>
        <Route path="/cypress/input">
          <Input />
        </Route>
        <Route path="/cypress/modal">
          <Modal />
        </Route>
        <Route path="/cypress/notifications">
          <Notifications />
        </Route>
        <Route path="/cypress/numericrange">
          <NumericRange />
        </Route>
        <Route path="/cypress/collapse">
          <Collapse />
        </Route>
        <Route path="/cypress/datepicker">
          <DatePicker />
        </Route>
        <Route path="/cypress/daterange">
          <DateRange />
        </Route>
        <Route path="/cypress/dropdown">
          <DropDown />
        </Route>
        <Route path="/cypress/dropdownlink">
          <DropDownLink />
        </Route>
        <Route path="/cypress/dropdownselect">
          <DropDownSelect />
        </Route>
        <Route path="/cypress/dropzone">
          <DropZone />
        </Route>
        <Route path="/cypress/filedrop">
          <FileDrop />
        </Route>
        <Route path="/cypress/input">
          <Input />
        </Route>
        <Route path="/cypress/masked-input">
          <MaskedInput />
        </Route>
        <Route path="/cypress/modal">
          <Modal />
        </Route>
        <Route path="/cypress/multi-select">
          <MultiSelect />
        </Route>
        <Route path="/cypress/numericrange">
          <NumericRange />
        </Route>
        <Route path="/cypress/numerictextbox">
          <NumericTextBox />
        </Route>
        <Route path="/cypress/pagination">
          <Pagination />
        </Route>
        <Route path="/cypress/password">
          <Password />
        </Route>
        <Route path="/cypress/progressbar">
          <ProgressBar />
        </Route>
        <Route path="/cypress/radio-group">
          <RadioGroup />
        </Route>
        <Route path="/cypress/rating">
          <Rating />
        </Route>
        <Route path="/cypress/slider">
          <Slider />
        </Route>
        <Route path="/cypress/statusbar">
          <StatusBar />
        </Route>
        <Route path="/cypress/stickypanel">
          <StickyPanel />
        </Route>
        <Route path="/cypress/tabs">
          <Tabs />
        </Route>
        <Route path="/cypress/textarea">
          <Textarea />
        </Route>
        <Route path="/cypress/tooltip">
          <ToolTip />
        </Route>
        <Route path="/cypress/timepicker">
          <TimePicker />
        </Route>
        <Route path="/cypress/timerange">
          <TimeRange />
        </Route>
        <Route path="/cypress/tour">
          <Tour />
        </Route>
        <Route path="/cypress/validation">
          <Validation />
        </Route>
        <Route path="/cypress/vstepper">
          <VStepper />
        </Route>
        <Route path="/cypress/wizard">
          <Wizard />
        </Route>
      </Switch>
    </L.Div>
  </>
);
