import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Container, Text } from './styles';

function CardHero() {
  return (
    <Container>
      <Text>3-D Man</Text>
      <Image
        style={styles.img}
        source={{
          uri:
            'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/landscape_xlarge.jpg',
        }}
      />
    </Container>
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
