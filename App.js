import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './src/Components/Header';

import Home from './src/Pages/Main/home';
import Categorias from './src/Pages/Main/categorias';
import Sobre from './src/Pages/Main/sobre';
import Cartao from './src/Pages/Main/cartao';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'home-outline',
    color: '#900'
  },
  Categorias: {
    name: 'list-outline',
    color: '#900'
  },
  Sobre: {
    name: 'call-outline',
    color: '#900'
  },
  Cartao: {
    name: 'card-outline',
    color: '#900'
  },
};

function App() {
  return (
    <NavigationContainer>
      <Header></Header>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const {name} = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          }, headerShown: false,
            tabBarInactiveTintColor: 'lightgrey', 
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor: '#E95E3F',
            tabBarInactiveBackgroundColor: '#444444'

      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categorias" component={Categorias} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Cartao" component={Cartao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
