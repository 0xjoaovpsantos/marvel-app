import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import AppColors from '../../utils/appColors';
import { Container, InputContainer } from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

import { useHeroes } from '../../context/Heroes';

function Search() {
  const { search, setSearch, searchHeroes, setSearchEnabled } = useHeroes();
  return (
    <Container>
      <InputContainer>
        <Icon name="search1" size={20} />
        <TextInput
          placeholder="Search characters"
          style={styles.input}
          value={search}
          onChangeText={(name) => {
            if (name === '') {
              setSearchEnabled(false);
            }
            setSearch(name);
          }}
          onSubmitEditing={() => searchHeroes()}
        />
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
