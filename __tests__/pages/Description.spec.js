import React from 'react';
import { render } from '@testing-library/react-native';

import Description from '../../src/pages/Description';

const hero = {
  id: 1011334,
  name: '3-D Man',
  description: '',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
    extension: 'jpg',
  },
  comics: {
    available: 12,
  },
  series: {
    available: 3,
  },
  stories: {
    available: 21,
  },
  events: {
    available: 1,
  },
};

describe('Description page', () => {
  it('should be able to render an description of hero', () => {
    const { getByTestId } = render(<Description />);

    expect(getByTestId('container-description')).toBeTruthy();
  });
});
