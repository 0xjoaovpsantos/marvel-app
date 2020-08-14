import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useHeroes } from '../../context/Heroes';
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
  Appearances,
  DescriptionApperances,
  Text,
} from './styles';

function Description() {
  const { hero } = useHeroes();

  return (
    <Container testID="container-description">
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
          {hero.description !== '' && (
            <About>
              <TitleSection>DESCRIPTION</TitleSection>
              <DescriptionText>{hero.description}</DescriptionText>
            </About>
          )}
          <Appearances>
            <DescriptionApperances>
              <Text>Comics</Text>
              <Text>{hero.comics.available}</Text>
            </DescriptionApperances>
            <DescriptionApperances>
              <Text>Events</Text>
              <Text>{hero.events.available}</Text>
            </DescriptionApperances>
            <DescriptionApperances>
              <Text>Series</Text>
              <Text>{hero.series.available}</Text>
            </DescriptionApperances>
            <DescriptionApperances>
              <Text>Stories</Text>
              <Text>{hero.stories.available}</Text>
            </DescriptionApperances>
          </Appearances>
        </Wrapper>
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
