import React from 'react';

import Search from '../../components/Search';
import CardHero from '../../components/CardHero';

import { Container } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import { useHeroes } from '../../context/Heroes';

function Home() {
  const { listHeroes } = useHeroes();

  return (
    <Container>
      <Search />
      <ScrollView>
        {listHeroes.map((hero) => (
          <CardHero hero={hero} />
        ))}
      </ScrollView>
    </Container>
  );
}

export default Home;
