import * as React from 'react';
import { Story } from '../../components/Story';
import * as L from '../../../korus-ui';
import { StoryProps } from '../../types';

export const Currency = () => (
  <Story title="Currency">
    <BasicUsage title="Usage" />
  </Story>
);

export const BasicUsage = (storyProps: StoryProps) => {
  return (
    <L.Div _box _inner _demoBg>
      <L.Div _basic>
        <L.Div _rub>
          <L.Currency 
            name="rub" 
            precision={2} 
            currencyCode="RUB"
            >
              12 550
          </L.Currency>
        </L.Div>
        <br />
        <br />
        <L.Div _usd>
          <L.Currency   
            name="usd" 
            precision={2} 
            currencyCode="USD"
            >
              12 550
          </L.Currency>
        </L.Div>
        <br />
        <br />
        <L.Div _eur>
          <L.Currency 
            name="eur" 
            precision={2} 
            currencyCode="EUR"
            >
              12 550
          </L.Currency>
        </L.Div>
      </L.Div>
      <br />
      <hr />
      <L.Div>Customization</L.Div>
      <hr />
      <br />
      <L.Div _custom>
        <L.Div _custom_rub>
          <L.Currency
            name="customRub"
            currencySymbolRender={({
              elementProps: { children, style },
            }: any) => (
              <L.Span style={style} _txtDanger>
                млн. {children}
              </L.Span>
            )}
            wrapperRender={({ elementProps }: any) => <L.A {...elementProps} />}
            precision={2}
            currencyCode="RUB"
          >
            12 550
          </L.Currency>
        </L.Div>
        <br />
        <hr />
        <L.Div _placeholder>Placeholder</L.Div>
        <hr />
        <br />
        <L.Div _placeholder_eur>
          <L.Currency
            name="placeholderEur"
            precision={2}
            currencyCode="EUR"
            placeholder="тут ничего нет"
          ></L.Currency>
        </L.Div>
        <br />
        <hr />
        <L.Div>shouldTrimFraction=false</L.Div>
        <hr />
        <br />
        <L.Div _trim_eur>
          <L.Currency
            name="trimEur"
            precision={2}
            currencyCode="EUR"
            shouldTrimFraction={false}
          >
            12 500.00
          </L.Currency>
        </L.Div>
        <br />
        <hr />
        <L.Div>Precision=3</L.Div>
        <hr />
        <br />
        <L.Div _prec>
          <L.Currency 
            name="prec" 
            precision={3} 
            currencyCode="EUR"
            >
              12 500.00
          </L.Currency>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};
