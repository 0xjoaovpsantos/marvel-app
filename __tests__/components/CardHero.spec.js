import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import CardHero from '../../src/components/CardHero';

const mockedHero = {
  id: 1011334,
  name: '3-D Man',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
    extension: 'jpg',
  },
};

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('CardHero component', () => {
  it('should be able to render an Card of Hero', () => {
    const { getByTestId } = render(<CardHero hero={mockedHero} />);

    expect(getByTestId('container-cardhero')).toBeTruthy();
  });

  it('shouble be able to press on Card Hero and go to description page', () => {
    const { getByTestId } = render(<CardHero hero={mockedHero} />);

    const cardHeroComponent = getByTestId('container-cardhero');

    fireEvent.press(cardHeroComponent);

    expect(mockedNavigate).toHaveBeenCalledWith('Description', {
      hero: mockedHero,
    });
  });
});
