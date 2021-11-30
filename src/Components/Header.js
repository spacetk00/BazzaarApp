import React from 'react';
import { View, Text } from 'react-native';
import { header } from "../Styles/Style";
export default function Header() {
  return (
  <View style={header.background}>
      <Text style={header.title}>Bazzaar</Text>
  </View>
  );
}
