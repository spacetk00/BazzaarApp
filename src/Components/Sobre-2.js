import React from 'react';
import {View, Text, Image} from 'react-native';
import {sobre} from '../Styles/Style';

export default function Sobre2() {
    let loja = require('../Images/loja.jpg');
  return (
    <View style={sobre.container}>

      <View style={sobre.blocoImagem}>
        <Image source={loja} style={sobre.imagem}></Image>
      </View>

      <View style={sobre.blocoTexto}>
        <Text style={sobre.textoC}>Rua Eusébio 10</Text>
        <Text style={sobre.textoC}>Centro, Cidade das Águas</Text>
        <Text style={sobre.textoC}>Aberta de segunda a sexta das 10:00 ás 21:00</Text>
      </View>
    </View>
  );
}
