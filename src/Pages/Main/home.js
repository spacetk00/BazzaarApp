import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStack from '../Stack/homeStack';

import Aramis from '../Principal/aramis'
import Gap from '../Principal/gap'
import Nike from '../Principal/nike';

const Stack = createStackNavigator();

export default function Home({ navigation }) {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={HomeStack}>
      <Stack.Screen name="Home" component={HomeStack} />

      <Stack.Screen name="Aramis" component={Aramis} />
      <Stack.Screen name="Gap" component={Gap} />
      <Stack.Screen name="Nike" component={Nike} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}
