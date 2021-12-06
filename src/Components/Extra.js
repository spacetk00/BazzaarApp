import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {extra} from '../Styles/Style';

export default function Extra() {

    let pagamentos = [
        require('../Images/pagamentos/visa.png'),
        require('../Images/pagamentos/master.png'),
        require('../Images/pagamentos/amazon.png'),
        require('../Images/pagamentos/bitcoin.png'),
        require('../Images/pagamentos/paypal.png')
    ]
    
  return (
    <View style={extra.container}>
        <Text style={extra.title}>Aceitamos</Text>
        <View style={extra.subContainer}>
            <TouchableOpacity style={extra.pagamentoBtn}>
              <Image source={pagamentos[0]} style={extra.pagamentoImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={extra.pagamentoBtn}>
              <Image source={pagamentos[1]} style={extra.pagamentoImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={extra.pagamentoBtn}>
              <Image source={pagamentos[2]} style={extra.pagamentoImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={extra.pagamentoBtn}>
              <Image source={pagamentos[3]} style={extra.pagamentoImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={extra.pagamentoBtn}>
              <Image source={pagamentos[4]} style={extra.pagamentoImg}></Image>
            </TouchableOpacity>
        </View>
    </View>
  );
}
