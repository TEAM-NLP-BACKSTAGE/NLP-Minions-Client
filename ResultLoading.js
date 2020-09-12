import React from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground } from 'react-native';

export default function ResultLoading() {
    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Text style={styles.loading}>Loading</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      },
    loading : {
        fontSize: 50
    }
  });