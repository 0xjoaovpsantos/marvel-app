import React from 'react';
import { FlatList, Alert, Text } from 'react-native';
import Search from '../../components/Search';
import CardHero from '../../components/CardHero';
import Loader from '../../components/Loader';

import { Container } from './styles';

import { useHeroes } from '../../context/Heroes';

function Home() {
  const {
    listHeroes,
    loadListHeroes,
    searchEnabled,
    listSearchHeroes,
    searchHeroes,
  } = useHeroes();

  return (
    <Container>
      <Search />
      {searchEnabled === false ? (
        <FlatList
          data={listHeroes}
          renderItem={({ item: hero }) => <CardHero hero={hero} />}
          keyExtractor={(hero) => hero.name}
          onEndReached={loadListHeroes}
          onEndReachedThreshold={0.1}
          ListFooterComponent={Loader}
        />
      ) : (
        <FlatList
          data={listSearchHeroes}
          renderItem={({ item: hero }) => <CardHero hero={hero} />}
          keyExtractor={(hero) => hero.name}
          onEndReached={() => searchHeroes(search)}
          onEndReachedThreshold={0.1}
          ListFooterComponent={Loader}
        />
      )}
    </Container>
  );
}

export default Home;
