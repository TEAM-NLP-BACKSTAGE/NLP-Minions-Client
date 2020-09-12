import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window')

export default function Evaluate({ navigation }) {
    const [idNumber, setIdNumber] = useState('')
    const [available, setAvailable] = useState(false);

    return(
        <ImageBackground source={require('./assets/모든배경.jpg')} style={styles.container}>
            <StatusBar barStyle='light-content'></StatusBar>
            <View style={styles.toRankingView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{width:62, height:65}} source={require('./assets/evaluate/랭킹버튼.png')}/>
                </TouchableOpacity>
            </View>

            <View style={styles.topRowView}>
                <View style={styles.pointView}>
                    <Image style={{width:53, height:9, marginBottom: 1, marginRight: 5}} source={require('./assets/points/채집된-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={{width:265, height:17, marginBottom:4, flexDirection:"row"}}>
                        <Image style={{width:30, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(1).png')}/>
                        <Image style={{width:30, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(2).png')}/>
                        <Image style={{width:30, height:17}} source={require('./assets/points/파랑배경물고기_8마리중(3).png')}/>
                    </ImageBackground>
                    <Image style={{width:69, height:10, marginBottom: 1, marginRight: 5}} source={require('./assets/points/사용가능한-물고기.png')}/>
                    <ImageBackground source={require('./assets/points/회색바.png')} style={{width:265, height:17, flexDirection:"row"}}>
                        <Image style={{width:30, height:17}} source={require('./assets/points/분홍배경물고기_8마리중(1).png')}/>
                    </ImageBackground>
                </View>
                <Image style={{width:87, height: 82}} source={require('./assets/points/그물안에-물고기.png')}/> 
            </View>

            <View style={styles.idView}>
                <TextInput 
                    style={styles.idInput} 
                    onChangeText={idNumber => setIdNumber(idNumber)} 
                    value={idNumber} 
                    maxLength={15}
                    placeholder='아이디를 입력해주세요'
                    placeholderTextColor='#595757' 
                />
                <Image style={available ? styles.transparent : styles.searchFail} source={require('./assets/evaluate/없는-아이디-표시.png')}/>
                <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                    <Image style={{width:188, height:48, marginTop: 220}} source={require('./assets/evaluate/분석하러가기-클릭버튼.png')}/> 
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
    toRankingView: {
        marginTop: 35,
        marginRight: width - 70,
    },
    topRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        position: 'absolute',
        top: 80,
    },
    pointView: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 18,
        width: width - 140,
        height: 70
    },
    idView: {
        flex: 1,
        alignItems: 'center'
    },
    idInput: {
        backgroundColor: '#d8e1e3',
        height: 50,
        width: width - 90,
        paddingLeft: 10,
        borderRadius: 7,
        marginBottom: 25,
        marginTop: 300,
        fontSize: 17 // ios 입력할 때 글자 크기 변하는 에러 존재
      },
      transparent: {
        width: 0,
        height: 0
      },
      searchFail: {
        width: 334,
        height: 20
      }
});