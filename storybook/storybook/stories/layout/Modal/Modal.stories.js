// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Api,
  // BasicUsage,
  // Customization,
} from './Examples';
import { Story } from '../../../components/Story';
import {
  modalPropsDesc,
  modalHeaderPropsDesc,
  modalBodyPropsDesc,
  modalFooterPropsDesc,
} from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const modalProps = [
  { componentName: 'Modal', props: modalPropsDesc },
  { componentName: 'ModalHeader', props: modalHeaderPropsDesc },
  { componentName: 'ModalBody', props: modalBodyPropsDesc },
  { componentName: 'ModalFooter', props: modalFooterPropsDesc },
];

storiesOf('Layout|Modal', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={modalProps} context={context} />))
// .add('Basic Usage', context => (<Story {...BasicUsage} compoundCustomProps={collapseProps} context={context} />))
// .add('Customization', context => (<Story {...Customization} compoundCustomProps={collapseProps} context={context} />))
