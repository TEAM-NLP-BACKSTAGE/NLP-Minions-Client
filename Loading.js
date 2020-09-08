import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';

export default function Loading() {
    return(
        <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
            <Image style={styles.logo} source={require('./assets/logo.png')}/>
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
        width: 200,
        height: 200
    }
  });