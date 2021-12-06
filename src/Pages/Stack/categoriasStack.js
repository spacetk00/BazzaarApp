import React from 'react';
import {ScrollView} from 'react-native';
import SecaoMasculina from '../../Components/secaoMasculina';
import SecaoFeminina from '../../Components/secaoFeminina';

export default function CategoriasStack({ navigation }) {
  return (
    <ScrollView>
      <SecaoMasculina></SecaoMasculina>
      <SecaoFeminina></SecaoFeminina>
    </ScrollView>
  );
}
