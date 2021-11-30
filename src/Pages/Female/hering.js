import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function Hering({navigation}) {
    const prodF1 = require('../../Images/female/hering.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodF1} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Cardigan Hering</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 59,99</Text></Text>
        </View>
    </View>
  );
}
