import React from 'react';
import {View, Text, Image} from 'react-native';
import {sobre} from '../Styles/Style';

export default function Sobre1() {
    let rua = require('../Images/rua.jpg');
  return (
    <View style={sobre.container}>

      <View style={sobre.blocoTexto}>
        <Text style={sobre.title}>Bem vindos ao BAZZAAR</Text>
        <Text style={sobre.texto}>
          Nossos produtos são inspirados pelas pessoas que estão á nossa volta,
          com suas belezas e qualidades. Produtos de bom gosto especialmente
          para você. Descubra
        <Text style={sobre.textoSpan}> our story </Text>
          e aproveite as promoções
        </Text>
      </View>

      <View style={sobre.blocoImagem}>
          <Image source={rua} style={sobre.imagem}></Image>
      </View>
    </View>
  );
}
