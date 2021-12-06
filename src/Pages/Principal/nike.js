import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function Nike({navigation}) {
    const prodP2 = require('../../Images/principal/nike.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodP2} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Camiseta Nike</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 99,99</Text></Text>
        </View>
    </View>
  );
}
