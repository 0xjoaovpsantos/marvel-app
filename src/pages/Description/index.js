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

function Description() {
  return (
    <Container>
      <ScrollView>
        <Header />
        <Wrapper>
          <Profile>
            <Image
              style={styles.imgProfile}
              source={{
                uri:
                  'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_fantastic.jpg',
              }}
            />
            <Name>Nome do herói nome do herói</Name>
          </Profile>
          <About>
            <TitleSection>DESCRIPTION</TitleSection>
            <DescriptionText>
              A descrição do personagem fica aqui A descrição do personagem fica
              aqui A descrição do personagem fica aqui A descrição do personagem
              fica aqui A descrição do personagem fica aqui A descrição do
              personagem fica aqui A descrição do personagem fica aqui
            </DescriptionText>
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
