import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Text } from './styles';

function CardHero(props) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Description')}
    >
      <Container>
        <Text>{props}</Text>
        <Image
          style={styles.img}
          source={{
            uri:
              'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/landscape_xlarge.jpg',
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
