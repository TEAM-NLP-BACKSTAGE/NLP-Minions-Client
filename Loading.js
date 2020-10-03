import React from 'react';
import { StyleSheet, Image, ImageBackground, StatusBar, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Loading() {
    return(
        <ImageBackground source={require('./assets/loading/배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Image style={styles.logo} source={require('./assets/loading/웨일링.png')}/>
            <View style={styles.loadingIndicators}>
                <Image style={{width: 19, height: 19}} source={require('./assets/loading/로딩1.png')}/>
                <Image style={{width: 19, height: 19, marginHorizontal: 7}} source={require('./assets/loading/로딩2.png')}/>
                <Image style={{width: 19, height: 19}} source={require('./assets/loading/로딩3.png')}/>
                <Image style={{width: 19, height: 19, marginHorizontal: 7}} source={require('./assets/loading/로딩4.png')}/>
                <Image style={{width: 25, height: 19}} source={require('./assets/loading/로딩5.png')}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
      },
    logo : {
        width: 186,
        height: 189,
        marginTop: height / 2 - 90
    },
    loadingIndicators: {
        flexDirection: 'row',
        marginTop: height / 8
    }
  });