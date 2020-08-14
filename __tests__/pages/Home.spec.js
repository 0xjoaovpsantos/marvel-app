import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Home from '../../src/pages/Home';

let mockSearchEnabled = false;

const mockHero = {
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

const mockSearchHeroes = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('../../src/context/Heroes', () => {
  return {
    useHeroes: () => ({
      listHeroes: [mockHero],
      loadListHeroes: jest.fn(),
      searchEnabled: mockSearchEnabled,
      listSearchHeroes: [mockHero],
      searchHeroes: mockSearchHeroes,
    }),
  };
});

describe('Home Page', () => {
  it('shoud be able list heroes', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('list-heroes')).toBeTruthy();
  });

  it('should be able to list search heroes', () => {
    mockSearchEnabled = true;

    const { getByTestId } = render(<Home />);

    const listElement = getByTestId('list-search-heroes');

    expect(listElement).toBeTruthy();

    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 500,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };
    fireEvent.scroll(listElement, eventData);

    expect(mockSearchHeroes).toHaveBeenCalled();
  });
});
