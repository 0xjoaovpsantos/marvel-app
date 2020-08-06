import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Description from '../pages/Description';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Description} />
      <Stack.Screen name="Description" component={Description} />
    </Stack.Navigator>
  );
}

export default Routes;
