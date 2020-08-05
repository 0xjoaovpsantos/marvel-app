import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import AppColors from '../../utils/appColors';
import { Container, InputContainer } from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

function Search() {
  return (
    <Container>
      <InputContainer>
        <Icon name="search1" size={20} />
        <TextInput placeholder="Search characters" style={styles.input} />
      </InputContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: AppColors.backgroundInputColor,
    paddingHorizontal: 20,
    borderRadius: 8,
    fontSize: 20,
    color: AppColors.fontColor,
  },
});

export default Search;
