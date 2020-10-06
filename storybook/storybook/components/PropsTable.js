// @flow
import * as React from 'react';
import * as L from '@korus/leda';
import { parse as parseDocGen } from 'react-docgen';
import ValidationProps from '!raw-loader!@korus/leda/dist/components/Validation/index';
import type { ContextType } from './Story';

type TableProps = {
  isPropsOpen: boolean,
  setPropsOpen: ((boolean) => boolean | boolean) => void,
  source?: string | Array<string>,
  context: ContextType,
  props?: string | Object,
};

type PropTypesObject = {
  name?: string,
  type?: string,
  required?: string,
  description?: string,
};

type ComponentType = {
  componentName?: string,
  props?: Array<?PropTypesObject> | string,
}

type AddTypesToProps = {
  source?: string | Array<string>,
  context: ContextType,
  props: string | Object,
}

// функция  принимает два параметра. Первый - файл в формате строки, загруженный через raw-loader
// Второй параметр - название flow-типа, из которого нужно извлечь информацию
// Например, для валидации export type ValidationProps = { ... }, второй параметр будет ValidationProps
const getFlowTypes = (src: string, flowType: string): ComponentType => {
  const typeDefinition = src.match(new RegExp(`${flowType} = {(.|\\s)+?}`));
  const typeObject = typeDefinition ? typeDefinition[0].replace(new RegExp(`${flowType} = `), '') : '';
  const lines = typeObject.split('\n').slice(1, -1);

  const props = lines.map((line, index) => {
    if (line.includes(':') && lines[index - 1].includes('/**')) {
      const name = line.split(':')[0].trim();
      const description = lines[index - 1].trim().slice(3, -2).trim();
      const type = line.split(':')[1].match(/\w+/);
      const required = !(name.includes('?'));

      return {
        description,
        name: required ? name : name.slice(0, -1),
        type: type ? type[0] : 'unknown',
        required: required.toString(),
      };
    }

    return undefined;
  }).filter(item => !!item);

  return {
    componentName: flowType,
    props,
  };
};

const getPropTypes = (props, source): string | Array<PropTypesObject> => {
  if (props) return props;

  let types: Object = {};

  if (Array.isArray(source)) {
    types = source.map(currentSource => parseDocGen(currentSource));

    return types.map<Object>(type => ({
      componentName: type.displayName,
      props: type.props
        ? Object.keys(type.props).map<Object>((key): Object => {
          const typeItem = {
            name: key,
            required: type.props[key].required.toString(),
            description: type.props[key].description,
            type: '',
          };

          if (type.props[key].flowType.name === 'union' || type.props[key].flowType.name === 'signature' || types[key].flowType.name === 'Array') {
            typeItem.type = type.props[key].flowType.raw;
          } else {
            typeItem.type = type.props[key].flowType.name;
          }

          return typeItem;
        })
        : 'Для данного компонента отсутствуют props',
    }));
  }
  try {
    types = parseDocGen(source).props;
  } catch (error) {
    console.log(error);

    return `Ошибка обработки: ${error.message}`;
  }

  return types
    ? Object.keys(types).map<Object>((key): Object => {
      const typeItem = {
        name: key,
        required: types[key].required.toString(),
        description: types[key].description,
        type: '',
      };

      if (types[key].flowType.name === 'union' || types[key].flowType.name === 'signature' || types[key].flowType.name === 'Array') {
        typeItem.type = types[key].flowType.raw;
      } else {
        typeItem.type = types[key].flowType.name;
      }

      return typeItem;
    })
    : 'Для данного компонента отсутствуют props';
};

const addTypesToProps = ({ source, context, props }: AddTypesToProps): (Array<Object> | string) => {
  if (!source) return `Не найден исходный файл для компонента: ${context.kind}`;

  const propTypes = getPropTypes(props, source);

  if (typeof propTypes === 'string') return propTypes;

  if (Array.isArray(source)) {
    const isUsingValidation = source.reduce((accum, current) => (accum && current.includes('ValidationProps')),
      source.includes('ValidationProps'));

    const validationType = isUsingValidation
      ? [getFlowTypes(ValidationProps, 'ValidationProps')]
      : [];

    return [
      ...propTypes,
      ...validationType,
    ];
  }

  const isUsingValidation = source.includes('ValidationProps');

  const componentName = parseDocGen(source).displayName;

  if (isUsingValidation) {
    const arrayPropTypes = [{ componentName, props: propTypes }];

    const validationType = isUsingValidation
      ? [getFlowTypes(ValidationProps, 'ValidationProps')]
      : [];

    return [
      ...arrayPropTypes,
      ...validationType,
    ];
  }

  return propTypes;
};

const renderPropTables = (propTypes: Array<PropTypesObject | ComponentType> | string): React$Node => {
  const tdStyle = { wordWrap: 'break-word' };

  const renderPropsRow = (name, type, required, description) => (
    <L.Tr key={name}>
      <L.Td style={tdStyle}><code>{name}</code></L.Td>
      <L.Td style={tdStyle}><code>{type}</code></L.Td>
      <L.Td style={tdStyle}><code>{required}</code></L.Td>
      <L.Td style={tdStyle}><code>{description}</code></L.Td>
    </L.Tr>
  );

  const renderTable = props => (
    <L.Table _quick-view-table>
      <L.ColGroup>
        <L.Col width={`${20}%`} />
        <L.Col width={`${25}%`} />
        <L.Col width={`${15}%`} />
        <L.Col />
      </L.ColGroup>
      <L.THead>
        <L.Tr>
          <L.Th txtLeft>Name</L.Th>
          <L.Th txtLeft>Type</L.Th>
          <L.Th txtLeft>Required</L.Th>
          <L.Th txtLeft>Description</L.Th>
        </L.Tr>
      </L.THead>
      <L.TBody>{props}</L.TBody>
    </L.Table>
  );

  const sortProps = (props: Array<Object>) => props.sort((firstEl: Object, secondEl: Object): number => {
    if (firstEl.name < secondEl.name) return -1;
    if (firstEl.name > secondEl.name) return 1;
    return 0;
  });

  if (propTypes[0].componentName && Array.isArray(propTypes)) {
    return propTypes.map<Object>((component: any) => {
      if (typeof component.props === 'string') {
        return (
          <L.Div key={component.componentName}>
            <L.H4>{component.componentName}</L.H4>
            {component.props}
            <br />
            <br />
          </L.Div>
        );
      }

      if (Array.isArray(component.props)) {
        const props = sortProps(component.props).map(({
          name, type, required, description,
        }) => renderPropsRow(name, type, required, description));

        return (
          <L.Div key={component.componentName}>
            <L.H4>{component.componentName}</L.H4>
            {renderTable(props)}
            <br />
          </L.Div>
        );
      }

      return null;
    });
  }

  const props = Array.isArray(propTypes)
    ? sortProps(propTypes).map(({
      name, type, required, description,
    }) => renderPropsRow(name, type, required, description))
    : 'Для данного компонента отсутствуют props';

  return renderTable(props);
};

export const PropsTable = (props: TableProps): React.Node => {
  const {
    isPropsOpen, setPropsOpen, source, context, props: componentProps,
  } = props;

  if (!source) return null;

  const propTypes = addTypesToProps({ source, context, props: componentProps });

  const propsTable = (typeof propTypes !== 'string')
    ? renderPropTables(propTypes)
    : propTypes;

  return (
    <React.Fragment>
      <L.H4 _title _pointer onClick={() => setPropsOpen(prevValue => !prevValue)}>Props</L.H4>
      <L.Collapsible isOpen={isPropsOpen}>
        <L.Div _grid _widget _box>
          {propsTable}
        </L.Div>
      </L.Collapsible>
      <L.Div _txt-gray onClick={() => setPropsOpen(prevValue => !prevValue)} _pointer>
        <L.I _pointer _icon-20 _i-chevron-up={isPropsOpen} _i-chevron-down={!isPropsOpen} />
        {isPropsOpen ? 'скрыть' : 'показать'}
      </L.Div>
      <br />
    </React.Fragment>
  );
};
