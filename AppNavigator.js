import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './App';
import CEPPage from './CEPPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="CEPPage" component={CEPPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
