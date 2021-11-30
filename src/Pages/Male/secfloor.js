import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function SecFloor({navigation}) {
    const prodM3 = require('../../Images/male/2ndfloor.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodM3} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Jaqueta 2ND</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 269,99</Text></Text>
        </View>
    </View>
  );
}
