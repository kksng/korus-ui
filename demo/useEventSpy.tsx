import * as React from 'react';
import * as L from '../leda';

export interface SpyEvent {
  component?: {
    isValid?: boolean,
    method?: string,
    name?: string | [string | undefined, string | undefined],
    value: unknown,
  },
}

export interface EventSpyReturnType {
  update: (eventType: string, ev: SpyEvent) => void,
  EventInfo: React.FC<{}>,
}

export const useEventSpy = (extraFields?: string[]): EventSpyReturnType => {
  // TODO: удалить лишнее после того, как будет убрано использование ev.target
  const [type, setType] = React.useState<string | undefined>();

  const [name, setName] = React.useState<string | [string | undefined, string | undefined] | undefined>();

  const [value, setValue] = React.useState<unknown>();

  const [isValid, setIsValid] = React.useState<boolean | undefined>();

  const [extra, setExtra] = React.useState<unknown[]>(extraFields || []);

  const [componentName, setComponentName] = React.useState<string | [string | undefined, string | undefined] | undefined>();

  const [componentValue, setComponentValue] = React.useState<unknown>();

  const [isComponentValid, setIsComponentValid] = React.useState<boolean | undefined>();

  const [componentExtra, setComponentExtra] = React.useState<unknown[]>(extraFields || []);

  const EventInfo = () => (
    <L.Div>
      <L.H5>Event: {type}</L.H5>
      <L.Div _inner>
        <L.P>target: </L.P>
        <L.Dl _list _w30 _form>
          <L.Dt>name</L.Dt>
          <L.Dd>{`${JSON.stringify(name)}`}</L.Dd>
          <L.Dt>value</L.Dt>
          <L.Dd>{`${JSON.stringify(value)}`}</L.Dd>
          <L.Dt>isValid</L.Dt>
          <L.Dd>{`${JSON.stringify(isValid)}`}</L.Dd>
          {extraFields?.map((item, index) => (
            <React.Fragment key={index.toString()}>
              <L.Dt>{item}</L.Dt>
              <L.Dd>{JSON.stringify(extra[index])}</L.Dd>
            </React.Fragment>
          ))}
        </L.Dl>
        <br />
        <L.P>component: </L.P>
        <L.Dl _list _w30 _form>
          <L.Dt>name</L.Dt>
          <L.Dd>{`${JSON.stringify(componentName)}`}</L.Dd>
          <L.Dt>value</L.Dt>
          <L.Dd>{`${JSON.stringify(componentValue)}`}</L.Dd>
          <L.Dt>isValid</L.Dt>
          <L.Dd>{`${JSON.stringify(isComponentValid)}`}</L.Dd>
          {extraFields?.map((item, index) => (
            <React.Fragment key={index.toString()}>
              <L.Dt>{item}</L.Dt>
              <L.Dd>{JSON.stringify(componentExtra[index])}</L.Dd>
            </React.Fragment>
          ))}
        </L.Dl>
      </L.Div>
    </L.Div>
  );

  const update: EventSpyReturnType['update'] = (eventType, ev) => {
    setType(eventType);
    setValue(ev.component?.value);
    setName(ev.component?.name);
    setIsValid(ev.component?.isValid);
    if (extraFields) {
      // @ts-ignore
      setExtra(extraFields.map((field) => ev.target[field]));
    }

    setComponentValue(ev.component?.value);
    setComponentName(ev.component?.name);
    setIsComponentValid(ev.component?.isValid);
    if (extraFields) {
      // @ts-ignore
      setComponentExtra(extraFields.map((field) => ev.component[field]));
    }
  };

  return { update, EventInfo };
};
