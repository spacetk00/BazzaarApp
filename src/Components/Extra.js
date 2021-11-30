import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {extra} from '../Styles/Style';

export default function Extra() {
    let redes = [
        require('../Images/redes/twitter.png'),
        require('../Images/redes/facebook.png'),
        require('../Images/redes/pinterest.png'),
        require('../Images/redes/instagram.png')
    ];

    let pagamentos = [
        require('../Images/pagamentos/visa.png'),
        require('../Images/pagamentos/master.png'),
        require('../Images/pagamentos/amazon.png'),
        require('../Images/pagamentos/bitcoin.png'),
        require('../Images/pagamentos/paypal.png')
    ]
  return (
    <View style={extra.container}>

      <View style={extra.bloco}>
        <Text style={extra.title}>Siga-nos</Text>
        <View style={extra.subContainer}>
            <TouchableOpacity><Image source={redes[0]} style={extra.redeImg}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={redes[1]} style={extra.redeImg}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={redes[2]} style={extra.redeImg}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={redes[3]} style={extra.redeImg}></Image></TouchableOpacity>
        </View>
      </View>

      <View style={extra.bloco}>
        <Text style={extra.title}>Aceitamos</Text>
        <View style={extra.subContainer}>
            <TouchableOpacity><Image source={pagamentos[0]} style={extra.pagamentoImg}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={pagamentos[1]} style={extra.pagamentoImg}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={pagamentos[2]} style={extra.pagamentoImg}></Image></TouchableOpacity>
        </View>
        <View style={extra.subContainer}>
            <TouchableOpacity><Image source={pagamentos[3]} style={extra.pagamentoImg}></Image></TouchableOpacity>
            <TouchableOpacity><Image source={pagamentos[4]} style={extra.pagamentoImg}></Image></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
