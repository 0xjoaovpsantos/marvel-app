import React from 'react';
import { render } from '@testing-library/react-native';

import Loader from '../../src/components/Loader';

let mockedLoading;

jest.mock('../../src/context/Heroes', () => {
  return {
    useHeroes: () => ({
      loading: mockedLoading,
    }),
  };
});

describe('Loader component', () => {
  it('shouble be able to render an loader', () => {
    mockedLoading = true;

    const { getByTestId } = render(<Loader />);

    expect(getByTestId('container-loader')).toBeTruthy();
  });

  it('should not be able to render an loader', () => {
    mockedLoading = false;

    const { getByTestId } = render(<Loader />);

    expect(getByTestId('no-container-loader')).toBeTruthy();
  });
});
