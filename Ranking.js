import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Ranking({ navigation }) {
    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <View style={styles.endButtonView}>
                <TouchableOpacity>
                    <Image style={styles.endButton} source={require('./assets/종료버튼.png')}/>
                </TouchableOpacity>
            </View>
            
            <View style={styles.topRowView}>
                <View style={styles.points}>
                    <Text>채집된 물고기</Text>
                    <Text>사용 가능한 물고기</Text>
                </View>
                <Image style={styles.fishInNet} source={require('./assets/그물안에-물고기.png')}/> 
            </View>
            
            <View style={styles.content}>
            </View>
            
            <View style={styles.bottomRowView}>
                <TouchableOpacity onPress={() => navigation.navigate('Labeling')}>
                    <Image style={styles.button} source={require('./assets/라벨링-시작-버튼.png')}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Evaluate')}>
                    <Image style={styles.button} source={require('./assets/분석시작-버튼.png')}/> 
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    endButtonView: {
        marginTop: 30,
        marginLeft: width - 70,
        alignItems: 'flex-end'
    },
    endButton: {
        width: 59,
        height: 54
    },
    topRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    points: {
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        width: 220,
        height: 60
    },
    fishInNet: {
        width: 86,
        height: 81
    },
    content: {
        backgroundColor: '#999', 
        width: width - 50,
        marginTop: 10,
        height: 580
    },
    bottomRowView: {
        flexDirection: 'row',
        width: width - 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        width: 142,
        height: 48
    }
  });