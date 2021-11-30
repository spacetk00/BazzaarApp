import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import SecaoMasculina from '../../Components/secaoMasculina';
import SecaoFeminina from '../../Components/secaoFeminina';
import Sobre1 from '../../Components/Sobre-1';
import Sobre2 from '../../Components/Sobre-2';
import Extra from '../../Components/Extra';

export default function Index({ navigation }) {
  return (
    <ScrollView>
      <Banner></Banner>
      <SecaoMasculina></SecaoMasculina>
      <SecaoFeminina></SecaoFeminina>
      <Sobre1></Sobre1>
      <Sobre2></Sobre2>
      <Extra></Extra>
    </ScrollView>
  );
}
