import React from 'react';

import Search from '../../components/Search';
import CardHero from '../../components/CardHero';

import { Container } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

function Home() {
  return (
    <Container>
      <Search />
      <ScrollView>
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
        <CardHero />
      </ScrollView>
    </Container>
  );
}

export default Home;
