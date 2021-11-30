import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {blocoProduto} from '../Styles/Style';
import { useNavigation } from '@react-navigation/native';

export default function SecaoMasculina() {
  const navigation = useNavigation(); 
  const prodM1 = require('../Images/male/forum.jpg');
  const prodM2 = require('../Images/male/lacoste.jpg');
  const prodM3 = require('../Images/male/2ndfloor.jpg');
  return (
    <View style={blocoProduto.container}>
      <View>
        <Text style={blocoProduto.title}>Moda Masculina</Text>
      </View>
      <View style={blocoProduto.subContainer}>
        <TouchableOpacity onPress= {() => {navigation.navigate("Forum")}}>
          <Image source={prodM1} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Calça Jeans Forum</Text>
          <Text style={blocoProduto.textSmall}>R$ 159,99</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => {navigation.navigate("Lacoste")}}>
          <Image source={prodM2} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Camisa Polo Lacoste</Text>
          <Text style={blocoProduto.textSmall}>R$ 259,99</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => {navigation.navigate("SecFloor")}}>
          <Image source={prodM3} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Jaqueta 2ND</Text>
          <Text style={blocoProduto.textSmall}>R$ 269,99</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
