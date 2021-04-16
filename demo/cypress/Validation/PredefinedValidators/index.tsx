import * as React from 'react';
import * as L from '../../../../korus-ui';

export const PredefinedValidators = () => {
  return (
    <L.Div _inner _box>
      <L.Div _inner id="predefinedValidators">
        <L.H2>Predefined Validators</L.H2>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="cadastralNumber"
            validator="cadastralNumber"
            placeholder="cadastralNumber"
          />
          <br />
          <L.Span _txtGray>47:14:1203001:814</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input form="form1" name="inn" validator="inn" placeholder="inn" />
          <br />
          <L.Span _txtGray>7801392271 / 470707900932</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="innCorp"
            validator="innCorp"
            placeholder="innCorp"
          />
          <br />
          <L.Span _txtGray>7801392271</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="innPrivate"
            validator="innPrivate"
            placeholder="innPrivate"
          />
          <br />
          <L.Span _txtGray>470707900932</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="kpp"
            validator="kpp"
            placeholder="kpp"
          />
          <br />
          <L.Span _txtGray>770201001</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="ogrn"
            validator="ogrn"
            placeholder="ogrn"
          />
          <br />
          <L.Span _txtGray>1037739169335</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="ogrnIp"
            validator="ogrnIp"
            placeholder="ogrnIp"
          />
          <br />
          <L.Span _txtGray>317798096945129</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="postalCode"
            validator="postalCode"
            placeholder="postalCode"
          />
          <br />
          <L.Span _txtGray>195196</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="snils"
            validator="snils"
            placeholder="snils"
          />
          <br />
          <L.Span _txtGray>123-456-789 64</L.Span>
        </L.Div>
        <L.Div _inner>
          <L.Input
            form="form1"
            name="url"
            validator="url"
            placeholder="url"
          />
          <br />
          <L.Span _txtGray>https://www.esphere.ru/</L.Span>
        </L.Div>
      </L.Div>
      <L.Div _inner _box>
        <L.Div _inner id="passwordValidator">
          <L.Input
            form="form1"
            name="password"
            validator="password"
            placeholder="password"
          />
          <br />
          <L.Span _txtGray>1q2W3e4R!</L.Span>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
