import React, { useEffect, useRef } from 'react';
import { StyleSheet, StatusBar, ImageBackground, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function LabelCategory({ route, navigation }) {
    const bright = useRef(new Animated.Value(0)).current;
    const {userIdx} = route.params

    const turnBright = () => {
        Animated.loop(
            Animated.sequence([
                Animated.delay(500),
                Animated.timing(bright, {
                    toValue: 1,
                    duration: 0,
                    useNativeDriver: true
                }),
                Animated.delay(500),
                Animated.timing(bright, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true
                }),
            ])
        ).start();
    };

    useEffect(() => {
        turnBright();
    }, [])

    return(
        <ImageBackground source={require('./assets/labelCategory/선택화면(배경).jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>

            <TouchableOpacity onPress={() => navigation.navigate('LabelHobby', { userIdx: userIdx , teamIdx: 3})}>
                <Animated.Image style={[styles.hobbyImage, {opacity: bright}]} source={require('./assets/labelCategory/선택화면(관심사_반짝).png')}/>
                <Image style={styles.hobbyImage} source={require('./assets/labelCategory/선택화면(관심사_노반짝).png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LabelAgeGender', { userIdx: userIdx, teamIdx: 1 })}>
                <Animated.Image style={[styles.ageGenderImage, {opacity: bright}]} source={require('./assets/labelCategory/선택화면(성별나이_반짝).png')}/> 
                <Image style={styles.ageGenderImage} source={require('./assets/labelCategory/선택화면(성별나이_노반짝).png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('LabelRegion', { userIdx: userIdx, teamIdx: 4 })}>
                <Animated.Image style={[styles.regionImage, {opacity: bright}]} source={require('./assets/labelCategory/선택화면(지역_반짝).png')}/> 
                <Image style={styles.regionImage} source={require('./assets/labelCategory/선택화면(지역_노반짝).png')}/>
            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    hobbyImage: {
        height: height / 3.8,
        width: width,
        resizeMode: 'contain',
        position: 'absolute',
        left: width / 4.2,
        top: height / 60
    },
    ageGenderImage: {
        height: height / 3.5,
        width: width,
        resizeMode: 'contain',
        position: 'absolute',
        right: width / 7,
        top: height / 3.2
    },
    regionImage: {
        height: height / 2.8,
        width: width,
        resizeMode: 'contain',
        position: 'absolute',
        left: width / 7,
        top: height - (height / 2.6)
    }
  });