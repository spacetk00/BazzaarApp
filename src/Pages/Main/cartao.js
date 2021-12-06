import React from 'react';
import {View, StyleSheet} from 'react-native';
import Extra from '../../Components/Extra';

export default function Cartao({ navigation }) {
  return (
    <View style={styles.viewContainer}>
      <Extra></Extra>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer : {
      flex: 1,
      alignItems: 'center'
  }
});
