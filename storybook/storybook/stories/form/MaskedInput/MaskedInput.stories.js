import * as React from 'react';
import { storiesOf } from '@storybook/react';
import
{
  Mask,
  Api,
  BasicUsage,
  Customization,
  PlaceholderChar,
} from './Examples';
import { Story } from '../../../components/Story';
import { propsDesc } from './propsDescription';
import { ApiStory } from '../../../components/ApiStory';

storiesOf('Form|MaskedInput', module)
  .add('API', context => (<ApiStory {...Api} customProps={propsDesc} context={context} />))
  .add('Базовый пример', context => (<Story {...BasicUsage} customProps={propsDesc} context={context} />))
  .add('Расширяемость', context => (<Story {...Customization} customProps={propsDesc} context={context} />));

storiesOf('Form|MaskedInput.Props', module)
  .add('mask', context => (<Story {...Mask} customProps={propsDesc} context={context} />))
  .add('placeholderChar', context => (<Story {...PlaceholderChar} customProps={propsDesc} context={context} />));
