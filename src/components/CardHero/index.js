import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Text } from './styles';

function CardHero({ hero }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Description')}
    >
      <Container>
        <Text>{hero.name}</Text>
        <Image
          style={styles.img}
          source={{
            uri: `${hero.thumbnail.path}/landscape_xlarge.${hero.thumbnail.extension}`,
          }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 2,
    marginTop: 10,
  },
});

export default CardHero;
