import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppColors from '../../utils/appColors';

import { useHeroes } from '../../context/Heroes';

import { Container } from './styles';

function Loader() {
  const { loading } = useHeroes();

  if (!loading) {
    return <View testID="no-container-loader" />;
  }

  return (
    <Container testID="container-loader">
      <ActivityIndicator color={AppColors.fontColor} size="large" />
    </Container>
  );
}

export default Loader;
