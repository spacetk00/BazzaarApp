import React from 'react';
import {ScrollView} from 'react-native';

import Banner from '../../Components/Banner';
import SecaoPrincipal from '../../Components/secaoPrincipal';

export default function HomeStack({ navigation }) {
  return (
    <ScrollView>
      <Banner></Banner>
      <SecaoPrincipal></SecaoPrincipal>
    </ScrollView>
  );
}
