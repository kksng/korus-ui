import * as React from "react";
import * as L from "../../../../korus-ui";

export const ValidationTypes = () => {
  return (
    <L.Div _inner id="propsValidator">
      <L.Div _inner>
        <L.H2>Types Of Validators</L.H2>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="email"
            validator="email"
            isRequired
            requiredMessage="Обязательное поле!"
            placeholder="predefined email validator"
          />
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="regexp"
            validator={/[A-Z]/}
            isRequired
            requiredMessage="Обязательное поле!"
            invalidMessage="Должна быть хотя бы одна заглавная латинская буква!"
            placeholder="validator as RegExp"
          />
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="function"
            validator={(value: string): boolean => value.length > 10}
            invalidMessage="Минимум 10 символов!"
            isRequired
            requiredMessage="Обязательное поле!"
            placeholder="validator as function"
          />
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="array-field"
            validator={[
              { validator: "email" },
              {
                validator: /[A-Z]/,
                invalidMessage: "Должна быть хотя бы одна заглавная буква!",
              },
              {
                validator: (value: string): boolean => value.length > 10,
                invalidMessage: "Минимум 10 символов!",
              },
            ]}
            isRequired
            requiredMessage="Обязательное поле!"
            placeholder="validator as an array of validators"
          />
        </L.Div>
        <L.Div _inner>
          <L.Button
            form="form1"
            name="submitButton"
            _warning
            onClick={() => console.log("Successful click!")}
            onValidationFail={(ev) =>
              console.log("Click failed! Invalid fields", ev.invalidForms)
            }
          >
            Submit
          </L.Button>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
