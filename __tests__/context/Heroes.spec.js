import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';
import { renderHook, act } from '@testing-library/react-hooks';

import HeroesProvider, { useHeroes } from '../../src/context/Heroes';

const apiMock = new MockAdapter(api);

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
const mockData = {
  data: {
    offset: 0,
    limit: 20,
    total: 40,
    count: 20,
    results: [hero],
  },
};

describe('Heroes context', () => {
  it('should be able to load heroes', async () => {
    apiMock.onGet().reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useHeroes(), {
      wrapper: HeroesProvider,
    });

    await waitForNextUpdate();

    expect(result.current.listHeroes).toEqual([hero]);

    apiMock.onGet().reply(409, { message: 'Error' });

    expect(() => act(() => result.current.loadListHeroes())).rejects.toThrow();
  });

  it('should be able to search heroes', async () => {
    apiMock.onGet().reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useHeroes(), {
      wrapper: HeroesProvider,
    });

    await waitForNextUpdate();

    await act(async () => result.current.searchHeroes());

    expect(result.current.listSearchHeroes).toEqual([]);

    await act(async () => result.current.setSearch('3-D Man'));
    await act(async () => result.current.searchHeroes());

    expect(result.current.listSearchHeroes).toEqual([hero]);

    apiMock.onGet().reply(409, { message: 'Error' });

    expect(() => act(() => result.current.searchHeroes())).rejects.toThrow();
  });

  it('should be able to get error on instance useHeroes', () => {
    apiMock.onGet().reply(200, mockData);
    expect(
      async () => await act(async () => renderHook(() => useHeroes())),
    ).rejects.toThrow();
  });
});
