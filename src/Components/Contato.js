import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function Contato() {
    let redes = [
        require('../Images/redes/twitter.png'),
        require('../Images/redes/facebook.png'),
        require('../Images/redes/pinterest.png'),
        require('../Images/redes/instagram.png')
    ];
    
  return (
    <View style={styles.contatosContainer}>
        <Text style={styles.titulo}>Siga-nos</Text>
        <View style={styles.subContainer}>
            <TouchableOpacity style={styles.redeBtn}>
                <Image source={redes[0]} style={styles.redeImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.redeBtn}>
                <Image source={redes[1]} style={styles.redeImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.redeBtn}>
                <Image source={redes[2]} style={styles.redeImg}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.redeBtn}>
                <Image source={redes[3]} style={styles.redeImg}></Image>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    contatosContainer: {
        width: '60%',
        height: '20%',
        alignContent: 'center',
        alignSelf: 'center'
    },
    titulo: {
        textAlign: 'center',
        marginTop: '1%'
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    redeBtn: {
        padding: 1, 
        width: '20%', 
        alignItems: 'center',
        marginHorizontal: '2%',
        marginBottom: '20%'
    },
    redeImg: {
        resizeMode: 'center'
    }
});
