import React, { useRef, useEffect } from 'react';
import { StyleSheet, Image, ImageBackground, StatusBar, View, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Loading() {
    const indicatorOne = useRef(new Animated.Value(0)).current;
    const indicatorTwo = useRef(new Animated.Value(0)).current;
    const indicatorThree = useRef(new Animated.Value(0)).current;
    const indicatorFour = useRef(new Animated.Value(0)).current;
    const indicatorFive = useRef(new Animated.Value(0)).current;

    const loadingSequence = () => {
            Animated.sequence([
                Animated.timing(indicatorOne, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(500),
                Animated.timing(indicatorTwo, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(500),
                Animated.timing(indicatorThree, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(500),
                Animated.timing(indicatorFour, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(500),
                Animated.timing(indicatorFive, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                })
            ]).start();
    };

    useEffect(() => {
        loadingSequence();
    }, [])

    return(
        <ImageBackground source={require('./assets/loading/배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Image style={styles.logo} source={require('./assets/loading/웨일링.png')}/>
            <View style={styles.loadingIndicators}>
                <Animated.Image style={{width: 19, height: 19, opacity: indicatorOne}} source={require('./assets/loading/로딩1.png')}/>
                <Animated.Image style={{width: 19, height: 19, marginHorizontal: 7, opacity: indicatorTwo}} source={require('./assets/loading/로딩2.png')}/>
                <Animated.Image style={{width: 19, height: 19, opacity: indicatorThree}} source={require('./assets/loading/로딩3.png')}/>
                <Animated.Image style={{width: 19, height: 19, marginHorizontal: 7, opacity: indicatorFour}} source={require('./assets/loading/로딩4.png')}/>
                <Animated.Image style={{width: 25, height: 19, opacity: indicatorFive}} source={require('./assets/loading/로딩5.png')}/>
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