import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ImageBackground, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Ranking({ navigation }) {
    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.topRowView}>
                <View style={styles.pointView}>
                    <Image style={{width:53, height:9, marginBottom:1, marginRight:5}} source={require('./assets/points/채집된-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={{width:265, height:17, marginBottom:4, flexDirection:"row"}}>
                        <Image style={{width:30, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(1).png')}/>
                        <Image style={{width:30, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(2).png')}/>
                        <Image style={{width:30, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(3).png')}/>
                    </ImageBackground>
                    <Image style={{width:69, height:10, marginBottom:1, marginRight:5}} source={require('./assets/points/사용가능한-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={{width:265, height:17, flexDirection:"row"}}>
                        <Image style={{width:30, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(1).png')}/>
                    </ImageBackground>
                </View>
                <Image style={{width:87, height: 82}} source={require('./assets/points/그물안에-물고기.png')}/> 
            </View>
            
            <View style={styles.content}>
                <View style={styles.rankOne}>
                    <Image style={{width:378, height:416}} source={require('./assets/ranking/할아버지와-고래.png')}/>
                    <Image style={{width:193, height:42, position:'absolute', top:365, left:160}} source={require('./assets/ranking/등수1.png')}/>
                    <Text style={{fontSize:33, color:'#747474', position:'absolute', top:367, left: 162, backgroundColor:'#fff'}}>yunakim</Text> 
                </View>
                <View style={styles.rankTwo}>
                    <Image style={{width:74, height:76}} source={require('./assets/ranking/개복치.png')}/>
                    <Image style={{width:195, height:36, position:'absolute', left:128, top:20}} source={require('./assets/ranking/등수2.png')}/>
                    <Text style={{fontSize:28, color:'#747474', position:'absolute', top:20, left:129, backgroundColor:'#fff'}}>dlwlrma</Text>
                </View>
                <View style={styles.rankThree}>
                    <Image style={{width:67, height:44}} source={require('./assets/ranking/니모.png')}/>
                    <Image style={{width:195, height:30, position:'absolute', left:124, top:3}} source={require('./assets/ranking/등수3.png')}/>
                    <Text style={{fontSize:25, color:'#747474', position:'absolute', left:127, top:3, backgroundColor:'#fff'}}>hyeri7777</Text>
                </View>
                <View style={styles.rankFour}>
                    <Image style={{width:48, height:25}} source={require('./assets/ranking/분홍물고기.png')}/>
                    <Image style={{width:192, height:28, position:'absolute', left:116}} source={require('./assets/ranking/등수4.png')}/>
                    <Text style={{fontSize:20, color:'#747474', left:69, top:3, backgroundColor:'#fff'}}>wooju1025</Text>
                </View>
                <View style={styles.rankFive}>
                    <Image style={{width:45, height:15}} source={require('./assets/ranking/멸치.png')}/>
                    <Image style={{width:187, height:25, position:'absolute', left:117}} source={require('./assets/ranking/등수5.png')}/>
                    <Text style={{fontSize:17, color:'#747474', left:74, top:4, backgroundColor:'#fff'}}>iluvyup</Text>
                </View>
            </View>
            
            <View style={styles.bottomRowView}>
                <TouchableOpacity onPress={() => navigation.navigate('Labeling')}>
                    <Image style={styles.button} source={require('./assets/ranking/라벨링-시작-버튼.png')}/> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Evaluate')}>
                    <Image style={styles.button} source={require('./assets/ranking/분석시작-버튼.png')}/> 
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
    topRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    pointView: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 18,
        width: width - 140,
        height: 70
    },
    content: {
        width: width - 50,
        height: 590
    },
    rankOne: {
        flexDirection: 'row'
    },
    rankTwo: {
        flexDirection: 'row',
        marginLeft: 34,
        marginTop:9
    },
    rankThree: {
        flexDirection: 'row',
        marginLeft: 38,
        marginTop:9
    },
    rankFour: {
        flexDirection: 'row',
        marginLeft: 48,
        marginTop:11
    },
    rankFive: {
        flexDirection: 'row',
        marginLeft: 48,
        marginTop:16
    },
    bottomRowView: {
        flexDirection: 'row',
        width: width - 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 60
    },
    button: {
        width: 142,
        height: 48
    }
  });