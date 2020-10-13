import React, { useRef, useEffect } from 'react';
import { StyleSheet, StatusBar, View, Animated } from 'react-native';

export default function ResultLoading() {
    const loadingOne = useRef(new Animated.Value(0)).current;
    const loadingTwo = useRef(new Animated.Value(0)).current;
    const loadingThree = useRef(new Animated.Value(0)).current;
    const loadingFour = useRef(new Animated.Value(0)).current;
    const loadingFive = useRef(new Animated.Value(0)).current;

    const loadingSequence = () => {
            Animated.sequence([
                Animated.timing(loadingOne, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(2000),
                Animated.timing(loadingTwo, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(2000),
                Animated.timing(loadingThree, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(2000),
                Animated.timing(loadingFour, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(2000),
                Animated.timing(loadingFive, {
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
        <View style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <Animated.Image style={[styles.loadingView, {opacity: loadingOne}]} source={require('./assets/resultLoading/로딩화면(6-1).jpg')}/>
            <Animated.Image style={[styles.loadingView, {opacity: loadingTwo}]} source={require('./assets/resultLoading/로딩화면(6-2).jpg')}/>
            <Animated.Image style={[styles.loadingView, {opacity: loadingThree}]} source={require('./assets/resultLoading/로딩화면(6-3).jpg')}/>
            <Animated.Image style={[styles.loadingView, {opacity: loadingFour}]} source={require('./assets/resultLoading/로딩화면(6-4).jpg')}/>
            <Animated.Image style={[styles.loadingView, {opacity: loadingFive}]} source={require('./assets/resultLoading/로딩화면(6-5).jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      loadingView: {
        width: '100%', 
        height: '100%', 
        position: 'absolute'
      }
  });