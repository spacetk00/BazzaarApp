import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {banner} from '../Styles/Style';

export default function Banner() {
  const bannerFundo = require('../Images/banner_fundo.jpg');
  return (
    <View style={banner.bannerContainer}>
        <Image style={banner.background} source={bannerFundo} />
      <View style={{backgroundColor: 'rgba(74, 74, 74, .3)', height: '100%'}}>
          <Text style={banner.textSmall}>Até 50% de desconto</Text>
          <TouchableOpacity title="Comprar" style={banner.botao}>
              <Text style={banner.textoBotao}>Comprar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
