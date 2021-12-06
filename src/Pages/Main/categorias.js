import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriasStack from '../Stack/categoriasStack';

import Forum from '../Male/forum';
import Lacoste from '../Male/lacoste';
import SecFloor from '../Male/secfloor';

import Guess from '../Female/guess';
import Hering from '../Female/hering';
import Malwee from '../Female/malwee';

const Stack = createStackNavigator();

export default function Categorias({ navigation }) {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={CategoriasStack}>
      <Stack.Screen name="Categorias" component={CategoriasStack} />

      <Stack.Screen name="Forum" component={Forum} />
      <Stack.Screen name="Lacoste" component={Lacoste} />
      <Stack.Screen name="SecFloor" component={SecFloor} />

      <Stack.Screen name="Guess" component={Guess} />
      <Stack.Screen name="Hering" component={Hering} />
      <Stack.Screen name="Malwee" component={Malwee} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
