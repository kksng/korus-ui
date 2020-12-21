import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';
import { stepContent } from './constants';

const exampleCode = `
export const StaticItems = (props: { title: string }) => (
  <L.Div _box _inner _demoBg>
    <L.VStepper>
      <L.VStepper.Item hasSignIcon titleText="Добавление расходов" statusText="Заполнено" type="success">
        {stepContent[0]}
      </L.VStepper.Item>
      <L.VStepper.Item titleText="Персональные данные" statusText="Заполнено" type="success">
        {stepContent[1]}
      </L.VStepper.Item>
      <L.VStepper.Item titleText="Подтверждение командировки" statusText="В процессе" type="progress">
        {stepContent[2]}
      </L.VStepper.Item>
      <L.VStepper.Item hasSignIcon titleText="Печать закрывающих документов" statusText="Не заполнено" type="danger">
        {stepContent[3]}
      </L.VStepper.Item>
      <L.VStepper.Item titleText="Дополнительная информация" statusText="Не заполнено">
        {stepContent[4]}
      </L.VStepper.Item>
    </L.VStepper>
  </L.Div>
);
`;

export const StaticItems = (storyProps: StoryProps) => (
  <L.Div _box _inner _demoBg>
    <L.VStepper>
      <L.VStepper.Item hasSignIcon titleText="Добавление расходов" statusText="Заполнено" type="success" nextStepType="warning" footerContent={<L.Button>Далее</L.Button>}>
        {stepContent[0]}
      </L.VStepper.Item>
      <L.VStepper.Item titleText="Персональные данные" statusText="Заполнено" type="warning" nextStepType="progress">
        {stepContent[1]}
      </L.VStepper.Item>
      <L.VStepper.Item titleText="Подтверждение командировки" statusText="В процессе" type="progress" nextStepType="danger">
        {stepContent[2]}
      </L.VStepper.Item>
      <L.VStepper.Item hasSignIcon titleText="Печать закрывающих документов" statusText="Не заполнено" type="danger">
        {stepContent[3]}
      </L.VStepper.Item>
      <L.VStepper.Item titleText="Дополнительная информация" statusText="Не заполнено">
        {stepContent[4]}
      </L.VStepper.Item>
    </L.VStepper>
  </L.Div>
);
