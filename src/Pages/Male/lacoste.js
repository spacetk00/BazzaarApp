import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function Lacoste({navigation}) {
    const prodM2 = require('../../Images/male/lacoste.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodM2} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Camisa Polo Lacoste</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 259,99</Text></Text>
        </View>
    </View>
  );
}
