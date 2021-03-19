import 'element-scroll-polyfill';

import { formatDateTime, stringToDate } from './src/DateTimeInput/helpers';
import {
  bindFunctionalRef,
  bytesSizeToUnitsSize,
  generateId,
  getClassNames,
  getIsSentenceIncludingWords,
  getSizeInBytes,
  getWordEnding,
  scrollIntoView,
  useElement,
  useElementRef,
  useInterval,
  useProps,
  useValue,
  useRunAfterUpdate,
} from './utils';

import { A } from './components/A';
import { Article } from './components/Article';
import { AutoComplete } from './components/AutoComplete';
import { Aside } from './components/Aside';
import { B } from './components/B';
import { Blockquote } from './components/Blockquote';
import { Button } from './components/Button';
import { ButtonGroup } from './components/ButtonGroup';
import { CheckBox } from './components/CheckBox';
import { Collapse } from './components/Collapse';
import { Collapsible } from './components/Collapsible';
import { CountDown } from './components/CountDown';
import {
  Currency, RUB, EUR, USD,
} from './components/Currency';
import { DatePicker } from './components/DatePicker';
import { DateRange } from './components/DateRange';
import { DateTimePicker } from './components/DateTimePicker';
import { DateTimeRange } from './components/DateTimeRange';
import { Div } from './components/Div';
import { Dl, Dd, Dt } from './components/Dl';
import { DropDown } from './components/DropDown';
import { DropDownLink } from './components/DropDownLink';
import { DropDownSelect } from './components/DropDownSelect';
import { DropZone } from './components/DropZone';
import { FileDrop } from './components/FileDrop';
import { Figcaption } from './components/Figcaption';
import { Figure } from './components/Figure';
import { Footer } from './components/Footer';
import { FileUpload } from './components/FileUpload';
import {
  Header, H1, H2, H3, H4, H5, H6,
} from './components/Headers';
import { I } from './components/I';
import { Img } from './components/Img';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Li } from './components/Li';
import { LinkTree } from './components/LinkTree';
import { Loader } from './components/Loader';
import { Main } from './components/Main';
import { Mark } from './components/Mark';
import { MaskedInput } from './components/MaskedInput';
import { Menu, MenuItem } from './components/Menu';
import {
  Modal,
  ModalAlert,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from './components/Modal';
import { MultiSelect } from './components/MultiSelect';
import { Nav } from './components/Nav';
import { Notifications } from './components/Notifications';
import { NumericRange } from './components/NumericRange';
import { NumericTextBox } from './components/NumericTextBox';
import { Ol } from './components/Ol';
import { P } from './components/Paragraph';
import { Pagination } from './components/Pagination';
import { Password } from './components/Password';
import { ProgressBar } from './components/ProgressBar';
import { RadioGroup, RadioButton } from './components/Radio';
import { Rating } from './components/Rating';
import { Section } from './components/Section';
import { Slider } from './components/Slider';
import { Small } from './components/Small';
import { Span } from './components/Span';
import { StatusBar } from './components/StatusBar';
import { StickyPanel } from './components/StickyPanel';
import { Svg } from './components/Svg';
import { Switcher } from './components/Switcher';
import { Tab, Tabs } from './components/Tabs';
import {
  Table, ColGroup, Col, THead, TBody, Th, Tr, Td, TFoot,
} from './components/Table';
import { Tags, Tag } from './components/Tags';
import { Tour } from './components/Tour';
import { Textarea } from './components/Textarea';
import { TimePicker } from './components/TimePicker';
import { TimeRange } from './components/TimeRange';
import { Tooltip } from './components/Tooltip';
import { Ul } from './components/Ul';
import { Leda, LedaContext, UnderscoreClasses } from './components/LedaProvider';
import { validate } from './validators';
import { VStepper } from './components/VStepper';
import { Wizard } from './components/Wizard';

import * as Validation from './components/Validation';
import * as AutoCompleteTypes from './components/AutoComplete/types';
import * as ButtonTypes from './components/Button/types';
import * as ButtonGroupTypes from './components/ButtonGroup/types';
import * as CheckBoxTypes from './components/CheckBox/types';
import * as CollapseTypes from './components/Collapse/types';
import * as DateTimeInputTypes from './src/DateTimeInput/types';
import * as DateTimeInputRangeTypes from './src/DateTimeInputRange/types';
import * as DropDownSelectTypes from './components/DropDownSelect/types';
import * as DropZoneTypes from './components/DropZone/types';
import * as FileDropTypes from './components/FileDrop/types';
import * as DivTypes from './components/Div';
import * as FileUploadTypes from './components/FileUpload/types';
import * as InputTypes from './components/Input/types';
import * as LinkTreeTypes from './components/LinkTree/types';
import * as MaskedInputTypes from './components/MaskedInput/types';
import * as MultiSelectTypes from './components/MultiSelect/types';
import * as NotificationsTypes from './components/Notifications/types';
import * as NumericRangeTypes from './components/NumericRange/types';
import * as NumericTextBoxTypes from './components/NumericTextBox/types';
import * as PaginationTypes from './components/Pagination/types';
import * as PasswordTypes from './components/Password/types';
import * as RadioTypes from './components/Radio/types';
import * as StatusBarTypes from './components/StatusBar/types';
import * as StickyPanelTypes from './components/StickyPanel/types';
import * as SwitcherTypes from './components/Switcher/types';
import * as TabsTypes from './components/Tabs/types';
import * as TagsTypes from './components/Tags/types';
import * as TableTypes from './components/Table/types';
import * as TourTypes from './components/Tour/types';
import * as TextareaTypes from './components/Textarea/types';
import * as TooltipTypes from './components/Tooltip/types';
import * as ValidationTypes from './components/Validation/types';
import * as VStepperTypes from './components/VStepper/types';
import * as commonTypes from './commonTypes';

import { form } from './form';
import { maskValue } from './src/MaskedInputBase/helpers';

const utils = {
  bindFunctionalRef,
  bytesSizeToUnitsSize,
  formatDateTime,
  generateId,
  getClassNames,
  getIsSentenceIncludingWords,
  getSizeInBytes,
  getWordEnding,
  maskValue,
  scrollIntoView,
  stringToDate,
  useElement,
  useElementRef,
  useInterval,
  useProps,
  useRunAfterUpdate,
  useValue,
};

export {
  AutoCompleteTypes,
  ButtonTypes,
  ButtonGroupTypes,
  CheckBoxTypes,
  CollapseTypes,
  DateTimeInputRangeTypes,
  DateTimeInputTypes,
  DropDownSelectTypes,
  DropZoneTypes,
  FileDropTypes,
  DivTypes,
  FileUploadTypes,
  InputTypes,
  LinkTreeTypes,
  MaskedInputTypes,
  MultiSelectTypes,
  NotificationsTypes,
  NumericRangeTypes,
  NumericTextBoxTypes,
  PaginationTypes,
  PasswordTypes,
  RadioTypes,
  StatusBarTypes,
  StickyPanelTypes,
  SwitcherTypes,
  TabsTypes,
  TableTypes,
  TagsTypes,
  TourTypes,
  TextareaTypes,
  TooltipTypes,
  ValidationTypes,
  VStepperTypes,
  commonTypes,

  A,
  Article,
  AutoComplete,
  Aside,
  B,
  Blockquote,
  Button,
  ButtonGroup,
  CheckBox,
  Collapse,
  Collapsible,
  CountDown,
  Currency,
  RUB,
  EUR,
  USD,
  DatePicker,
  DateRange,
  DateTimePicker,
  DateTimeRange,
  Div,
  Dl,
  Dd,
  Dt,
  DropDown,
  DropDownLink,
  DropDownSelect,
  DropZone,
  FileDrop,
  Figcaption,
  Figure,
  Footer,
  FileUpload,
  Header, H1, H2, H3, H4, H5, H6,
  I,
  Img,
  Input,
  Label,
  Li,
  LinkTree,
  Loader,
  Main,
  Mark,
  MaskedInput,
  Menu,
  MenuItem,
  Modal,
  ModalAlert,
  ModalBody,
  ModalFooter,
  ModalHeader,
  MultiSelect,
  Nav,
  Notifications,
  NumericRange,
  NumericTextBox,
  Ol,
  P,
  Pagination,
  Password,
  ProgressBar,
  RadioGroup, RadioButton,
  Rating,
  Section,
  Slider,
  Small,
  Span,
  StatusBar,
  StickyPanel,
  Svg,
  Switcher,
  Tab, Tabs,
  Table, ColGroup, Col, THead, TBody, Th, Tr, Td, TFoot,
  Tags, Tag,
  Tour,
  Textarea,
  TimePicker,
  TimeRange,
  Tooltip,
  Ul,
  Leda, LedaContext, UnderscoreClasses,
  validate,
  VStepper,
  Wizard,
  form,
  utils,
  Validation,
};
