// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  AllowedSymbols,
  Api,
  BasicUsage,
  Customization,
  ForbiddenSymbols,
  HasClearButton,
  LetterCase,
  MaxLength,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc, validationPropsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

const compoundProps = [
  { componentName: 'Input', props: propsDesc },
  { componentName: 'Validation', props: validationPropsDesc },
];

storiesOf('Form|Input', module)
  .add('API', context => (<ApiStory {...Api} compoundCustomProps={compoundProps} context={context} />))
  .add('Базовый пример', context => (
    <Story {...BasicUsage} compoundCustomProps={compoundProps} context={context} />
  ))
  .add('Расширяемость', context => (
    <Story {...Customization} compoundCustomProps={compoundProps} context={context} />
  ));

storiesOf('Form|Input.Props', module)
  .add('allowedSymbols', context => (
    <Story {...AllowedSymbols} compoundCustomProps={compoundProps} context={context} />
  ))
  .add('forbiddenSymbols', context => (
    <Story {...ForbiddenSymbols} compoundCustomProps={compoundProps} context={context} />
  ))
  .add('hasClearButton', context => (
    <Story {...HasClearButton} compoundCustomProps={compoundProps} context={context} />
  ))
  .add('letterCase', context => (<Story {...LetterCase} compoundCustomProps={compoundProps} context={context} />))
  .add('maxLength', context => (<Story {...MaxLength} compoundCustomProps={compoundProps} context={context} />));
