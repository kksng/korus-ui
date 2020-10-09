// @flow
import * as React from 'react';
import * as L from '@korus/leda';

type Props = {
  customProps: Object,
};

export const CustomPropsTable = (props: Props): React.Node => {
  const { customProps } = props;
  return (
    <React.Fragment>
      <L.Div _table>
        <L.Table>
          <colgroup>
            <col style={{ width: '20rem' }} />
            <col style={{ width: '30rem' }} />
            <col />
          </colgroup>
          <L.THead>
            <L.Tr>
              <L.Th>
                Name
              </L.Th>
              <L.Th>
                Type
              </L.Th>
              <L.Th>
                Description
              </L.Th>
            </L.Tr>
          </L.THead>
          <L.TBody>
            {customProps.map((propData) => {
              const {
                name, type, description, required,
              } = propData;

              return (
                <L.Tr _txt-bold={required}>
                  <L.Td>
                    {name}
                    {required && <sup className="txt-danger" style={{ fontWeight: 1000 }}>required</sup>}
                  </L.Td>
                  <L.Td>
                    {type}
                  </L.Td>
                  <L.Td>
                    {description}
                  </L.Td>
                </L.Tr>
              );
            })}
          </L.TBody>
        </L.Table>
      </L.Div>
    </React.Fragment>
  );
};
