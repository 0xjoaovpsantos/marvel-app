import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Search from '../../src/components/Search';

const mockedSetSearch = jest.fn();
const mockedSetSearchEnabled = jest.fn();
const mockedSearchHeroes = jest.fn();

jest.mock('../../src/context/Heroes', () => {
  return {
    useHeroes: () => ({
      search: '',
      setSearch: mockedSetSearch,
      setSearchEnabled: mockedSetSearchEnabled,
      searchHeroes: mockedSearchHeroes,
    }),
  };
});

describe('Search component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(<Search />);

    expect(getByPlaceholderText('Search characters')).toBeTruthy();
  });

  it('should be able to change text', () => {
    const { getByPlaceholderText } = render(<Search />);

    const searchField = getByPlaceholderText('Search characters');

    fireEvent.changeText(searchField, 'name-heroe-here');
    expect(mockedSetSearch).toHaveBeenCalledWith('name-heroe-here');

    fireEvent.changeText(searchField, '');
    expect(mockedSetSearchEnabled).toHaveBeenCalledWith(false);
  });

  it('should be able to click on the keyboard send icon', () => {
    const { getByPlaceholderText } = render(<Search />);

    const searchField = getByPlaceholderText('Search characters');

    fireEvent(searchField, 'onSubmitEditing');
    expect(mockedSearchHeroes).toHaveBeenCalled();
  });
});
