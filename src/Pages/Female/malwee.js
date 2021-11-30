import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {page} from '../../Styles/Style';

export default function Malwee({navigation}) {
    const prodF3 = require('../../Images/female/malwee.jpg');
  return (
    <View>
        <View style={page.container}>
            <TouchableOpacity onPress={() => {navigation.goBack();}} style={page.botaoVoltar}><Text style={page.textoBotao}>〈 Voltar</Text></TouchableOpacity>
            <View style={page.containerImagem}>
                <Image source={prodF3} style={page.imagem}></Image>
            </View>
            <Text style={page.textoDescricao}>Camiseta Malwee</Text>
            <Text style={page.textoDescricao}>Valor: <Text style={page.textoDestaque}>R$ 27,99</Text></Text>
        </View>
    </View>
  );
}
