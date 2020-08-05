import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
