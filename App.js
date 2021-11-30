import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from './src/Pages/Main';
import Header from './src/Components/Header';

import Forum from './src/Pages/Male/forum';
import Lacoste from './src/Pages/Male/lacoste';
import SecFloor from './src/Pages/Male/secfloor';

import Guess from './src/Pages/Female/guess';
import Hering from './src/Pages/Female/hering';
import Malwee from './src/Pages/Female/malwee';

/* Criamos nosso navegador com a variavel Stack */
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header></Header>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Index}>
        <Stack.Screen name="Index" component={Index} />

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
