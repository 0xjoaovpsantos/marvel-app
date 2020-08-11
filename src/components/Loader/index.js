import React from 'react';
import { ActivityIndicator } from 'react-native';
import AppColors from '../../utils/appColors';

import { useHeroes } from '../../context/Heroes';

import { Container } from './styles';

function Loader() {
  const { loading } = useHeroes();

  if (!loading) {
    return null;
  }

  return (
    <Container>
      <ActivityIndicator color={AppColors.fontColor} size="large" />
    </Container>
  );
}

export default Loader;
