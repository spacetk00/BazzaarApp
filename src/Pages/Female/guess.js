import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function Guess({navigation}) {
    const prodF2 = require('../../Images/female/guees.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodF2} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Calça Jeans Guess</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 159,99</Text></Text>
        </View>
    </View>
  );
}
