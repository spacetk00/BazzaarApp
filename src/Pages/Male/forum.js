import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function Forum({navigation}) {
    const prodM1 = require('../../Images/male/forum.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodM1} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Calça Jeans Forum</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 159,99</Text></Text>
        </View>
    </View>
  );
}
