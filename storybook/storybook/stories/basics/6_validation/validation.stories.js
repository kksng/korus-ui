import React from 'react';
import { storiesOf } from '@storybook/react';
import { Features } from './Features';
import { ApiStory } from '../../../components/ApiStory';
import {
  Api,
  Helpers,
  PredefinedValidators,
  RequiredMessage,
  ValidateOnBlur,
  ValidateOnSubmit,
} from './Examples';
import { NameForm } from './Examples/NameForm';
import { InvalidMessage } from './Examples/InvalidMessage';
import { IsRequired } from './Examples/IsRequired';
import { Validator } from './Examples/Validator';
import { InvalidMessageRender } from './Examples/InvalidMessageRender';
import { buttonsPropsDesc, elementsPropsDesc } from './propsDescription';
import { Story } from '../../../components/Story';

const validationProps = [
  { componentName: 'Form elements', props: elementsPropsDesc },
  { componentName: 'Buttons', props: buttonsPropsDesc },
];

storiesOf('Basics|Валидация форм', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={validationProps} context={context} />))
  .add('Особенности', () => <Features />)
  .add('Validate on blur', context => (<Story {...ValidateOnBlur} compoundCustomProps={validationProps} context={context} />))
  .add('Validate on submit', context => (<Story {...ValidateOnSubmit} compoundCustomProps={validationProps} context={context} />))
  .add('Готовые валидаторы', context => (<Story {...PredefinedValidators} compoundCustomProps={validationProps} context={context} />))
  .add('Хэлперы', context => (<Story {...Helpers} compoundCustomProps={validationProps} context={context} />))

storiesOf('Basics|Валидация форм.Props', module)
  .add('form, name', context => (<Story {...NameForm} compoundCustomProps={validationProps} context={context} />))
  .add('invalidMessage', context => (<Story {...InvalidMessage} compoundCustomProps={validationProps} context={context} />))
  .add('invalidMessageRender', context => (<Story {...InvalidMessageRender} compoundCustomProps={validationProps} context={context} />))
  .add('isRequired', context => (<Story {...IsRequired} compoundCustomProps={validationProps} context={context} />))
  .add('requiredMessage', context => (<Story {...RequiredMessage} compoundCustomProps={validationProps} context={context} />))
  .add('validator', context => (<Story {...Validator} compoundCustomProps={validationProps} context={context} />))
