import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {blocoProduto} from '../Styles/Style';
import { useNavigation } from '@react-navigation/native';

export default function SecaoMasculina() {
  const navigation = useNavigation(); 
  const prodP1 = require('../Images/principal/aramis.jpg');
  const prodP2 = require('../Images/principal/gap.jpg');
  const prodP3 = require('../Images/principal/nike.jpg');
  return (
    <View style={blocoProduto.container}>
      <View>
        <Text style={blocoProduto.title}>Principal</Text>
      </View>
      <View style={blocoProduto.subContainer}>
        <TouchableOpacity onPress= {() => {navigation.navigate("Aramis")}}>
          <Image source={prodP1} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Camiseta Aramis</Text>
          <Text style={blocoProduto.textSmall}>R$ 84,99</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => {navigation.navigate("Gap")}}>
          <Image source={prodP2} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Blusa GAP</Text>
          <Text style={blocoProduto.textSmall}>R$ 79,99</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => {navigation.navigate("Nike")}}>
          <Image source={prodP3} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Camiseta Nike</Text>
          <Text style={blocoProduto.textSmall}>R$ 99,99</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
