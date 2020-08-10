import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

import HeroesProvider from './context/Heroes';

function App() {
  return (
    <NavigationContainer>
      <HeroesProvider>
        <Routes />
      </HeroesProvider>
    </NavigationContainer>
  );
}

export default App;
