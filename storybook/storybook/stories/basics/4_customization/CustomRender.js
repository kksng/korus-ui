/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as L from '@korus/leda';
import { linkTo } from '@storybook/addon-links';
import { LiveEditor, LiveProvider } from 'react-live';



export const CustomRender = () => (
  <L.Div _article>
    <L.H1 _header>
      Изменение элемента
    </L.H1>
    <L.P>
      Каждый компонент состоит из элементов.
    </L.P>
    <L.P>
      Каждый элемент - это React Node со своими <b>props</b>.
    </L.P>
    <L.P>
      Для изменения элемента используйте атрибуты с суффиксом Render.
    </L.P>
    <L.P>
      Названия атрибутов формируются из названия элемента и суффикса Render.
      Название элемента можно узнать в React dev tools.
    </L.P>

    <L.Div _block>
      <L.P>
        Например, для замены элемента label в компоненте L.CheckBox используйте labelRender:
      </L.P>
      <pre>
        {`
          labelRender={() => <MyCustomLabel />}
        `}
      </pre>
    </L.Div>


    <div className="block">
      <L.P>
        Всего существует три варианта работы с элементами:
      </L.P>

      <ul className="txt-list">
        <li>
          нужно использовать сам элемент и изменить/добавить его <b>props</b>
        </li>
        <li>
          нужно использовать <b>props</b> элемента, но заменить сам элемент
        </li>
        <li>
          нужно полностью заменить и элемент, и его <b>props</b>
        </li>
      </ul>
    </div>

    <L.P>
      Структура методов <b>...Render</b> позволяет сделать все три преобразования.
    </L.P>

    <L.Div _block>
      <L.P>
        Замена элемента:
      </L.P>
      <pre>
        {`
          <L.CheckBox
            labelRender={({ elementProps }) => <MyCustomLabel {...elementProps} />}
          >
            Label
          </L.CheckBox>
        `}
      </pre>
    </L.Div>

    <L.Div _block>
      <L.P>
        Добавление/замена props элемента:
      </L.P>

      <pre>
        {`
          <L.CheckBox
            labelRender={({ Element, elementProps }) => (
              <Element
                {...elementProps}
                style={{ color: 'red' }}
              />
            )}
          >
            Label
          </L.CheckBox>
        `}
      </pre>
    </L.Div>

    <L.Div _block>
      <L.P>
        Замена элемента и props:
      </L.P>
      <pre>
        {`
          <L.CheckBox
            labelRender={() => (
              <MyCustomLabel
                style={{ color: 'red' }}
                onMouseEnter={() => console.log('hello world')}
              >
                My awesome label
              </MyCustomLabel>
            )}
          />
        `}
      </pre>
    </L.Div>

    <section className="block">
      <L.H2 _block-header>
        Структура методов ...Render
      </L.H2>
      <pre>
        {`
          ({ Element, elementProps, componentProps, componentState }) => React.Node
        `}
      </pre>

      <ul className="block txt-list">
        <li>
          <b>Element</b> - сам элемент
        </li>
        <li>
          <b>elementProps</b> - props элемента
        </li>
        <li>
          <b>componentState, componentProps</b> - для удобства дополнительно приходят объекты с props и state всего компонента
          <L.Div _block>
            <pre>
              {`
                <L.Input
                  prefixRender={({ Element, componentProps, componentState }) => (
                    <MyPrefixComponent
                      inputValue={componentProps.value}
                      isValid={componentState.isValid}
                    />
                  )}
                  ...
                />
              `}
            </pre>
          </L.Div>
        </li>
      </ul>
    </section>
  </L.Div>
);
