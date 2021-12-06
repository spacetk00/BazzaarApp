import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function Gap({navigation}) {
    const prodP3 = require('../../Images/principal/gap.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodP3} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Blusa GAP</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 79,99</Text></Text>
        </View>
    </View>
  );
}
