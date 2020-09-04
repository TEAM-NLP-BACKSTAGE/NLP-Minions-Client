import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Loading() {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./assets/square.png')}/>
            <Text style={styles.logoName}>Whaleling</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo : {
        width: 50,
        height: 50,
        marginBottom: 50
    },
    logoName: {
        fontSize: 20
    }
  });