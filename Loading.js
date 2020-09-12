import React from 'react';
import { StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';

export default function Loading() {
    return(
        <ImageBackground source={require('./assets/loading/배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Image style={styles.logo} source={require('./assets/loading/웨일링.png')}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
    logo : {
        width: 186,
        height: 189
    }
  });