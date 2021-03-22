/* eslint-disable import/no-extraneous-dependencies,jsx-a11y/label-has-for */
import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as L from '../korus-ui';
import {
  AutoComplete, ButtonGroup, CheckBox, CountDown, DatePicker, DateRange, Drawer,
  DropDown, DropDownSelect, Input, A, LedaProvider, LinkTree, Loader, MaskedInput, Menu, Modal,
  MultiSelect, Notifications, NumericRange, NumericTextBox, Password,
  Pagination, RadioGroup, ProgressBar, Slider, StatusBar, StickyPanel, Svg, Switcher,
  Tabs, Tags, DropZone, Textarea, DateTimePicker, TimePicker,
  DateTimeRange, TimeRange, DropDownLink, Currency, Rating,
  Div, Table, Dl, FileUpload, HTMLTags, Validation,
  Collapsible, Collapse, VStepper, Button, Tooltip, FileDrop, Tour, Wizard
} from './components';
import { useElementRef } from '../korus-ui/utils';

export const Demo = hot(() => (
  <L.Div style={{ color: 'black' }} _wrapper>
    {/*<Navigation />*/}
    <L.Div _container>
      <L.Div _row _demoMainTitle _noGutters>
        <L.H1 _colMd12>Demo sandbox</L.H1>
        <L.P _colMd12>
          Специально созданная страница для тестирования компонентов, дебага и написания кода
        </L.P>
      </L.Div>
      <HTMLTags />
      <A />
      <AutoComplete />
      <Button />
      <ButtonGroup />
      <CheckBox />
      <Collapse />
      <Collapsible />
      <CountDown />
      <Currency />
      <DateTimePicker />
      <DateTimeRange />
      <DatePicker />
      <DateRange />
      <Div />
      <Dl />
      <Drawer />
      <DropDown />
      <DropDownLink />
      <DropDownSelect />
      <DropZone />
      <FileDrop />
      <FileUpload />
      <Input />
      <LedaProvider />
      <LinkTree />
      <Loader />
      <MaskedInput />
      <Menu />
      <Modal />
      <MultiSelect />
      <Notifications />
      <NumericRange />
      <NumericTextBox />
      <Pagination />
      <Password />
      <ProgressBar />
      <RadioGroup />
      <Rating />
      <Slider />
      <StatusBar />
      <StickyPanel />
      <Svg />
      <Switcher />
      <Table />
      <Tabs />
      <Tags />
      <Textarea />
      <TimePicker />
      <TimeRange />
      <Tooltip />
      <Tour />
      <Validation />
      <VStepper />
      <Wizard />
    </L.Div>
  </L.Div>
));
