import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Sobre1 from '../../Components/Sobre-1';
import Sobre2 from '../../Components/Sobre-2';
import Contato from '../../Components/Contato';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.viewContainer}>
      <ScrollView>
          <Sobre1></Sobre1>
          <Sobre2></Sobre2>
          <Contato></Contato>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    }
});
