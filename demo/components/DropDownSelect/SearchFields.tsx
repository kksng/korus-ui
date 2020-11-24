import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const SearchFields = (storyProps: StoryProps): React.ReactElement => {

  return (
    <L.Div _box _inner _demoBg>

      <p>
        Поиск по названию страны или её столицы.
      </p>

      <L.DropDownSelect
        data={[
          { country: 'England', capital: 'London' },
          { country: 'Germany', capital: 'Berlin' },
          { country: 'France', capital: 'Paris' },
          { country: 'Sweden', capital: 'Stockholm' },
          { country: 'Spain', capital: 'Madrid' },
          { country: 'Vatican' },
        ]}
        searchFields={['capital', 'id']}
        textField="country"
        shouldFilterValues
        _width30
      />
    </L.Div>
  );
};
