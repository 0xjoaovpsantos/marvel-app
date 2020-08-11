import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  Wrapper,
  Header,
  Profile,
  Name,
  About,
  TitleSection,
  DescriptionText,
  Comics,
} from './styles';

function Description({ route }) {
  const { hero } = route.params;

  return (
    <Container>
      <ScrollView>
        <Header />
        <Wrapper>
          <Profile>
            <Image
              style={styles.imgProfile}
              source={{
                uri: `${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`,
              }}
            />
            <Name>{hero.name}</Name>
          </Profile>
          <About>
            <TitleSection>DESCRIPTION</TitleSection>
            <DescriptionText>{hero.description}</DescriptionText>
          </About>
        </Wrapper>
        <Comics>
          <TitleSection>COMICS</TitleSection>
        </Comics>
        <ScrollView horizontal>
          <Image
            style={styles.imgComic}
            source={{
              uri:
                'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
            }}
          />
          <Image
            style={styles.imgComic}
            source={{
              uri:
                'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
            }}
          />
          <Image
            style={styles.imgComic}
            source={{
              uri:
                'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
            }}
          />
          <Image
            style={styles.imgComic}
            source={{
              uri:
                'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
            }}
          />
          <Image
            style={styles.imgComic}
            source={{
              uri:
                'http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_fantastic.jpg',
            }}
          />
        </ScrollView>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  imgProfile: {
    height: 200,
    borderRadius: 100,
    width: 200,
  },
  imgComic: {
    height: 180,
    width: 120,
    marginLeft: 20,
  },
});

export default Description;
