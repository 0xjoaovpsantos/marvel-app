import React from 'react';
import { Text } from 'react-native';

import Search from '../../components/Search';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

export default Home;
