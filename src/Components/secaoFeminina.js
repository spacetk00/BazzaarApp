import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {blocoProduto} from '../Styles/Style';
import { useNavigation } from '@react-navigation/native';

export default function SecaoFeminina() {
  const navigation = useNavigation(); 
  const prodF1 = require('../Images/female/hering.jpg');
  const prodF2 = require('../Images/female/guees.jpg');
  const prodF3 = require('../Images/female/malwee.jpg');
  return (
    <View style={blocoProduto.container}>
      <View>
        <Text style={blocoProduto.title}>Moda Feminina</Text>
      </View>
      <View style={blocoProduto.subContainer}>
        <TouchableOpacity onPress= {() => {navigation.navigate("Hering")}}>
          <Image source={prodF1} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Cardigan Hering</Text>
          <Text style={blocoProduto.textSmall}>R$ 59,99</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => {navigation.navigate("Guess")}}>
          <Image source={prodF2} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Calça Jeans Guess</Text>
          <Text style={blocoProduto.textSmall}>R$ 159,99</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => {navigation.navigate("Malwee")}}>
          <Image source={prodF3} style={blocoProduto.imagem}></Image>
          <Text style={blocoProduto.textSmall}>Camiseta Malwee</Text>
          <Text style={blocoProduto.textSmall}>R$ 27,99</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
